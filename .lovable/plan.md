## O que encontrei no scan de SEO

O scanner identificou **8 problemas** na página. Resumo:  
  
tambem verifique se existe og:image configurado; se não, vamos definir uma imagem de preview 1200x630 com foto profissional e o título da página

### Metadata (2 problemas)

1. **Title e description fora do padrão** — title tem mais de 60 caracteres, description mais de 160, há `<meta description>` duplicado (um em inglês), e falta `<link rel="canonical">`. Essa sera a description pronta: Cirurgia de vesícula em Brasília. Avaliação criteriosa, técnica minimamente invasiva e acompanhamento completo, do diagnóstico à recuperação. Dr. Eron Queiroz.
2. **Social preview inconsistente** — `og:title` e `og:description` duplicados, descrições em inglês misturadas com português, e falta `og:url`.

### Descoberta e indexação (3 problemas)

3. `**/robots.txt` ausente** — crawlers não têm regras nem referência ao sitemap.
4. `**/sitemap.xml` ausente** — retorna 404.
5. **Google Search Console não conectado** — sem dados de performance nem submissão de sitemap.

### IA / readiness (1 problema)

6. `**/llms.txt` ausente** — assistentes de IA (ChatGPT, Perplexity, Claude) precisam parsear toda a página para entender o site.

### Performance e acessibilidade (2 problemas, medidos na versão publicada)

7. **LCP lento** — imagem hero ou H1 demora para aparecer. Falta `fetchpriority="high"` na imagem principal e/ou `font-display: swap` nas fontes.
8. **Contraste de texto baixo** em algum texto secundário (provável `text-muted-foreground` muito claro ou classe arbitrária).

---

## Mudanças que proponho

### 1. Metadata em `src/routes/__root.tsx` e `src/routes/index.tsx`

- Encurtar title para: **"Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz"** (~52 chars).
- Reescrever description única em português, 150–160 chars.
- Remover todas as entradas duplicadas (description em inglês, `og:title`/`og:description` repetidos, `twitter:description` em inglês).
- Mover title/description/`og:*` específicos da home para `src/routes/index.tsx` (deixar no root só defaults sitewide: charset, viewport, `og:type`, `og:site_name`).
- Adicionar `og:url` e `<link rel="canonical">` apenas no leaf (`index.tsx`) apontando para `https://vesicula.dreronqueiroz.com.br/`.

### 2. Criar `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://vesicula.dreronqueiroz.com.br/sitemap.xml
```

### 3. Criar `src/routes/sitemap[.]xml.ts`

Server route do TanStack com uma entrada (`/`), `lastmod` atual, `changefreq: weekly`, `priority: 1.0`.

### 4. Criar `public/llms.txt`

Resumo curto da clínica e link para a home, em português.

### 5. Performance (LCP)

- Identificar a imagem hero da home e adicionar `fetchpriority="high"`, `width`/`height` explícitos, remover `loading="lazy"` se existir.
- Adicionar `<link rel="preload" as="image" ...>` no `head()` da rota `/`.
- Para a fonte Mulish já carregada via Google Fonts, garantir `&display=swap` no URL (verificar — já parece estar presente).

### 6. Acessibilidade

- Auditar usos de `text-muted-foreground` com opacidade (ex.: `/50`, `/60`) ou cores arbitrárias claras e ajustar para tokens do design system com contraste AA (4.5:1 para corpo). ajustar apenas os textos que reprovam no AA, com a mudança mínima de tom necessária, sem alterar a identidade visual da página

### 7. Google Search Console (opcional, requer ação sua)

- Posso disparar o fluxo de conexão do conector do Google Search Console, verificar o domínio via meta tag e submeter o sitemap. Isso exige que você autorize o OAuth em uma janela.

---

## O que **não** vou mexer

- A seção de avaliações do Google que acabamos de implementar.
- Conteúdo editorial / copy das seções existentes.
- Estrutura visual, cores do tema, layout.

Quer que eu inclua o passo 7 (conectar Google Search Console agora) ou prefere deixar para depois?