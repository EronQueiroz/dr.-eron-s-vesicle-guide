
## Diagnóstico atual

Rodei uma revisão do código da rota `/`, dos assets em `src/assets/`, do CSS global, do `__root.tsx` (shell HTML) e dos logs do preview. Abaixo, os pontos que hoje custam performance percebida — do mais impactante para o menos:

### 1. LCP — retrato do hero em JPG sem responsividade
- `src/assets/dr-eron-portrait.jpg` = **101 KB**, servido como JPG único, sem WebP/AVIF nem `srcset`.
- Ele é o candidato a LCP (topo do hero, `fetchPriority="high"`).
- Além disso é renderizado com `transform: scale(1.22)` — o navegador decodifica a imagem inteira só para mostrar ~82% dela. Desperdício de bytes e de decode.
- O `head().links` faz `rel="preload"` do JPG, mas usa `fetchpriority` em minúsculo — React reclama no console (`Invalid DOM property fetchpriority. Did you mean fetchPriority`). O preload até funciona no HTML final, mas a prop precisa ser corrigida.

### 2. Fontes Google carregadas de forma bloqueante
Em `src/routes/__root.tsx`:
- Mulish com **5 pesos** (400/500/600/700/800)
- Playfair Display com **4 pesos + itálico**
- Ambas via `<link rel="stylesheet">` — bloqueia render, e o CSS remoto ainda dispara múltiplos downloads de `.woff2`.
- Playfair é usado em pouquíssimos lugares (H1 do hero, pull-quote, numerais). Não precisa de 4 pesos.

### 3. Google Tag Manager no `<head>` sem `async`/`defer`
O snippet inline do GTM roda imediatamente no `<head>`. Ele mesmo cria um script async, mas antes disso executa JS síncrono no caminho crítico. Pode ser movido para depois do `<body>` ou disparado após `load`.

### 4. Assets menores com espaço para ganho
- `dr-eron-formal.jpg` (122 KB) — abaixo da dobra, já é `loading="lazy"`, mas continua JPG. WebP corta ~40–60%.
- `og-cover.jpg` (121 KB) — só usado como preview social, não afeta LCP; ok manter.
- `livere-logo.jpg` (5,9 KB) — **importado e não utilizado** em `index.tsx` (só entra no bundle sem aparecer). Remover.

### 5. Faltam sinais de renderização progressiva no miolo
Seções longas (FAQ, referências, timeline de recuperação, avaliações) ficam sempre pintando mesmo fora da viewport. `content-visibility: auto` nas seções abaixo da dobra reduz custo de paint em cada scroll/resize sem mudar nada visual.

### 6. `decoding="async"` ausente
Nenhuma `<img>` tem `decoding="async"`. Barato, evita bloqueio no thread principal em imagens pesadas.

---

## O que proponho executar

### Passo 1 — Otimizar a imagem LCP (maior ganho isolado)
- Gerar variantes WebP do `dr-eron-portrait.jpg` no **tamanho real de exibição** já considerando o `scale(1.22)` (ou seja, gerar a versão já pré-cortada, e remover o `scale` no CSS). Alvos:
  - 480w (mobile 1x)
  - 720w (mobile 2x / desktop 1x)
  - 1200w (desktop 2x retina)
- Publicar via `.asset.json` no CDN do projeto.
- Trocar o `<img>` do hero por WebP com `srcset` + `sizes`, `decoding="async"`, `fetchPriority="high"`, mantendo width/height explícitos para evitar CLS.
- Ajustar `head().links` do `index.tsx`:
  - Trocar `fetchpriority` (string em qualquer casing pode virar warning) por `fetchPriority` camelCase (React 19 aceita e emite o atributo correto).
  - Fazer o preload apontar para a variante WebP que será exibida no viewport atual (usar `imagesrcset` + `imagesizes` no `<link rel="preload">` para responsividade).
- Esperado: ~40–60 KB a menos na crítica + LCP mais previsível em 3G/4G.

### Passo 2 — Enxugar fontes
Em `src/routes/__root.tsx`:
- Mulish: reduzir para **3 pesos** (400, 600, 800). Os intermediários (500/700) são pouco perceptíveis vs. 600/800 e economizam 2 `.woff2`.
- Playfair Display: reduzir para **1 peso itálico + 1 peso regular** (500 italic + 600). O restante não é usado.
- Adicionar `<link rel="preload" as="style">` para a URL do Google Fonts e carregar via padrão `media="print" onload="this.media='all'"` (não bloqueia render). Fallback via `<noscript>`.
- Manter `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`.
- Esperado: ~150–250 KB a menos em fontes na primeira visita.

### Passo 3 — Desbloquear GTM
- Manter GTM, mas atrasar a injeção do script até `requestIdleCallback` (ou `window.addEventListener('load', …)`). GTM continua funcionando; só sai do caminho crítico do FCP.
- Nenhum evento (`conversion_whatsapp`, `conversion_telefone`, `video_play`) muda de comportamento, porque eles disparam via interação — só passam a enfileirar em `dataLayer` até o GTM subir.

### Passo 4 — Retrato "formal" e limpezas
- Gerar WebP do `dr-eron-formal.jpg` (1 variante 800w + 1 variante 1200w retina), trocar no bloco "Quem é o Dr. Eron". Continua `loading="lazy"`.
- Remover o import não utilizado `livere-logo.jpg` (e o arquivo, se não houver outro consumidor).
- Adicionar `decoding="async"` em todas as `<img>`.

### Passo 5 — Renderização progressiva do miolo
- Aplicar `content-visibility: auto; contain-intrinsic-size: <altura estimada>;` via classe utilitária em `src/styles.css`, aplicada nas `<section>` do FAQ, referências, timeline de recuperação e depoimentos. Reduz custo de composição em cada scroll sem alterar nada visualmente.

### Passo 6 — Validação
Ao final, rodar Playwright headless no preview local com throttling mobile (390×844) e capturar:
- Peso total transferido na primeira carga
- FCP e LCP (via `PerformanceObserver`)
- Confirmar que o novo LCP é a variante WebP correta (tamanho ≥ pixels reais)

Reportar os números antes/depois. Para o número que importa (produção com CDN, cache, HTTPS), sugiro rodar em seguida um Lighthouse na URL publicada `vesicula.dreronqueiroz.com.br`.

---

## O que **não** vou mexer

- Copy, títulos, seções, cores, layout.
- Comportamento do vídeo (fachada + `dataLayer.push`).
- Google reviews (loader Supabase Cloud atual).
- Estrutura de rotas / SEO / JSON-LD.

## Ganho esperado (ordem de grandeza)

- **-40 a -60%** no peso das imagens acima da dobra
- **-30 a -50%** no peso das fontes
- **FCP**: 200–500 ms mais rápido em 4G
- **LCP**: sai do JPG único para WebP responsivo com preload correto → alvo confortável < 2 s na produção em conexão média

Pode aprovar para eu implementar? Se quiser, posso executar tudo em sequência ou dividir em duas entregas (Passos 1+2+3 primeiro; 4+5+6 depois).
