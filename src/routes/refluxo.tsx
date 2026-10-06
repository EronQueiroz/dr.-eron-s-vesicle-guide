import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MapPin, Phone, Instagram, Check, AlertCircle, ChevronDown, Flame, Wind } from "lucide-react";
import portrait480 from "@/assets/dr-eron-portrait-480.webp.asset.json";
import portrait720 from "@/assets/dr-eron-portrait-720.webp.asset.json";
import portrait1200 from "@/assets/dr-eron-portrait-1200.webp.asset.json";
import formal800 from "@/assets/dr-eron-formal-800.webp.asset.json";
import formal1200 from "@/assets/dr-eron-formal-1200.webp.asset.json";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import ilustracao from "@/assets/refluxo-ilustracao.jpg";
import { WA_AVALIACAO, WA_VALORES, trackWhatsApp, waLink } from "@/lib/refluxo-config";

const TITLE = "Refluxo em Brasília: Tratamento e Cirurgia | Dr. Eron Queiroz";
const DESCRIPTION =
  "Azia frequente, regurgitação ou tosse por refluxo? Entenda sintomas, diagnóstico e quando a cirurgia é indicada. Dr. Eron Queiroz, Brasília-DF.";

const ADDRESS_FULL =
  "Edifício Santos Dumont Medical Center, SHIS QI 1, Bloco B, Sala 010-7, Lago Sul, Brasília-DF, CEP 71605-170";
const MAP_EMBED =
  "https://www.google.com/maps?q=Santos%20Dumont%20Medical%20Center%2C%20SHIS%20QI%201%20Bloco%20B%2C%20Lago%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2071605-170&output=embed";

// Ative quando o conteúdo for confirmado (revisão médica / data de atualização).
const REVIEW_INFO: { date: string } | null = null;

// Depoimentos reais — preencher apenas com textos aprovados. Vazio = seção oculta.
const TESTIMONIALS: { text: string; author: string; source: string }[] = [];

const faq = [
  { q: "Refluxo tem cura?", a: "O refluxo pode ser controlado na maioria dos casos. Mudanças de hábito e medicamentos resolvem os sintomas de muitas pessoas, e a cirurgia corrige o mecanismo da válvula quando há indicação. O tratamento ideal depende da causa e de cada paciente." },
  { q: "Quando o refluxo precisa de cirurgia?", a: "A cirurgia pode ser indicada quando os sintomas continuam mesmo com o tratamento correto, quando há hérnia de hiato relevante, complicações no esôfago ou quando o paciente não deseja usar medicamento por longo prazo. A indicação é sempre individual." },
  { q: "Posso tomar remédio para refluxo para sempre?", a: "O uso prolongado de medicamentos deve ser sempre acompanhado por um médico, que avalia a dose, o tempo de uso e as alternativas. Quem usa remédio há anos sem controle completo dos sintomas pode se beneficiar de uma nova avaliação." },
  { q: "Qual médico trata refluxo?", a: "O gastroenterologista acompanha o tratamento clínico. O cirurgião do aparelho digestivo avalia e realiza a cirurgia quando há indicação, especialmente em casos com hérnia de hiato. O Dr. Eron atua nas duas frentes." },
  { q: "A cirurgia de refluxo é feita por vídeo?", a: "Na maioria dos casos, sim. A fundoplicatura costuma ser feita por videolaparoscopia, com pequenas incisões. Em casos selecionados, pode ser feita por cirurgia robótica." },
  { q: "Qual a diferença entre cirurgia robótica e videolaparoscopia para refluxo?", a: "As duas são minimamente invasivas. Na robótica, o cirurgião comanda braços robóticos com visão 3D ampliada, o que pode ajudar em casos mais complexos, como hérnias de hiato grandes ou reoperações. A escolha é feita junto com o paciente." },
  { q: "Quanto tempo de recuperação depois da cirurgia de refluxo?", a: "Em geral, a internação é de 1 a 2 dias, com alimentação líquida e pastosa nas primeiras semanas e retorno gradual às atividades leves. O tempo exato varia de pessoa para pessoa." },
  { q: "Pessoas acima de 70 anos podem operar refluxo?", a: "A idade, sozinha, não impede a cirurgia. O que define a indicação é a avaliação da saúde geral, dos riscos e dos benefícios esperados para cada paciente, com planejamento específico para a recuperação." },
  { q: "Hérnia de hiato sempre precisa de cirurgia?", a: "Não. Hérnias pequenas e com poucos sintomas costumam ser acompanhadas com tratamento clínico. A cirurgia é considerada em hérnias maiores, sintomáticas ou com complicações." },
  { q: "Quanto custa a cirurgia de refluxo em Brasília?", a: "O valor depende da técnica, do hospital e da necessidade de corrigir hérnia de hiato. Depois da consulta e dos exames, o paciente recebe um orçamento detalhado antes de decidir." },
  { q: "O Dr. Eron atende seguros internacionais?", a: "Sim. Pacientes com seguros internacionais, como Cigna e Allianz, e de embaixadas são atendidos no Hospital Sírio-Libanês, em Brasília." },
  { q: "Onde o Dr. Eron atende?", a: "No Edifício Santos Dumont Medical Center, SHIS QI 1, Bloco B, Sala 010-7, Lago Sul, Brasília-DF. As cirurgias são realizadas nos hospitais Sírio-Libanês e DF Star. Também há atendimento online." },
];

const physician = {
  "@type": "Physician",
  "@id": "#dr-eron-queiroz",
  name: "Dr. Eron Barbosa de Queiroz",
  medicalSpecialty: "Surgical",
  description: "Cirurgião do Aparelho Digestivo · CRM-DF 26024 · RQE 17127 e 17279",
  identifier: [{ "@type": "PropertyValue", propertyID: "CRM-DF", value: "26024" }],
  telephone: "+55-61-3546-6409",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SHIS QI 1, Bloco B, Sala 010-7, Edifício Santos Dumont Medical Center",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "71605-170",
    addressCountry: "BR",
  },
  hospitalAffiliation: [
    { "@type": "Hospital", name: "Hospital Sírio-Libanês Brasília" },
    { "@type": "Hospital", name: "Hospital DF Star" },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "pt-BR",
      about: { "@id": "#drge" },
      author: { "@id": "#dr-eron-queiroz" },
    },
    physician,
    {
      "@type": "MedicalCondition",
      "@id": "#drge",
      name: "Doença do refluxo gastroesofágico (DRGE)",
      alternateName: "Gastroesophageal reflux disease",
      signOrSymptom: [
        { "@type": "MedicalSymptom", name: "Azia" },
        { "@type": "MedicalSymptom", name: "Regurgitação" },
        { "@type": "MedicalSymptom", name: "Tosse seca persistente" },
        { "@type": "MedicalSymptom", name: "Rouquidão e pigarro" },
      ],
      possibleTreatment: [
        { "@type": "MedicalTherapy", name: "Mudanças de hábito e medicamentos que reduzem a acidez" },
        { "@type": "MedicalProcedure", name: "Fundoplicatura" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Dr. Eron Queiroz", item: "/" },
        { "@type": "ListItem", position: 2, name: "Refluxo (DRGE)", item: "/refluxo" },
      ],
    },
  ],
};

export const Route = createFileRoute("/refluxo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: portrait720.url,
        imagesrcset: `${portrait480.url} 480w, ${portrait720.url} 720w, ${portrait1200.url} 1200w`,
        imagesizes: "(min-width: 768px) 460px, 100vw",
        fetchPriority: "high",
      } as any,
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: RefluxoPage,
});

/* ---------- peças reutilizáveis ---------- */

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.484-1.32.13-.302.244-.917.244-1.234 0-.43-2.04-1.31-2.434-1.41zm-2.92 7.45a8.39 8.39 0 0 1-4.27-1.17l-3.06.97 1-3a8.45 8.45 0 1 1 6.33 3.2zm0-18.55a10.13 10.13 0 0 0-8.61 15.46L6 27.06l5.55-1.76A10.13 10.13 0 1 0 16.19 6.1z" />
    </svg>
  );
}

function WaButton({
  href = WA_AVALIACAO,
  origem,
  children,
  variant = "solid",
}: {
  href?: string;
  origem: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "gtag-whatsapp inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const cls =
    variant === "solid"
      ? `${base} text-primary-foreground shadow-lg hover:shadow-xl focus-visible:ring-[var(--color-sage)]`
      : `${base} border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(origem)}
      className={cls}
      style={
        variant === "solid"
          ? { background: "linear-gradient(180deg, var(--color-sage-strong), color-mix(in oklab, var(--color-sage-strong) 80%, black))" }
          : undefined
      }
    >
      <WaIcon />
      {children}
    </a>
  );
}

function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  tone?: "white" | "cream" | "cool";
  children: ReactNode;
  className?: string;
}) {
  const bg = tone === "cream" ? "bg-muted" : tone === "cool" ? "bg-cool" : "bg-background";
  return (
    <section id={id} className={`section-organic scroll-mt-6 ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-8">{children}</div>
    </section>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <>
      <span aria-hidden="true" className="sage-rule" />
      <h2 className="mt-6 text-[1.75rem] leading-tight md:text-[2.25rem]">{children}</h2>
    </>
  );
}

function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`measure mt-5 text-lg leading-[1.75] text-foreground/85 ${className}`}>{children}</p>;
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
          <Check size={22} className="mt-1 flex-shrink-0 text-[var(--color-sage-strong)]" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* Tabela que vira cartões empilhados no celular */
function ResponsiveTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table className="mt-8 block w-full text-left md:table md:overflow-hidden md:rounded-2xl md:border md:border-border">
      <thead className="sr-only md:not-sr-only md:table-header-group md:bg-primary md:text-primary-foreground">
        <tr>
          {headers.map((h) => (
            <th key={h} scope="col" className="px-5 py-4 text-base font-bold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block space-y-4 md:table-row-group md:space-y-0">
        {rows.map((r) => (
          <tr
            key={r[0]}
            className="block rounded-2xl border border-border bg-card p-5 md:table-row md:rounded-none md:border-0 md:border-t md:p-0 md:even:bg-muted/60"
          >
            {r.map((c, i) => (
              <td key={i} className="block py-1 align-top text-lg leading-relaxed md:table-cell md:px-5 md:py-4">
                <span className="block text-sm font-bold uppercase tracking-wider text-[var(--color-sage-strong)] md:hidden">
                  {headers[i]}
                </span>
                <span className={i === 0 ? "font-bold text-primary" : "text-foreground/85"}>{c}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------- página ---------- */

function RefluxoPage() {
  return (
    <>
      <WhatsAppFloat href={WA_AVALIACAO} pagina="refluxo" />
      <main className="pb-20">
        <Hero />

        {/* 2. O que é */}
        <Section tone="white">
          <H2>O que é a doença do refluxo gastroesofágico (DRGE)?</H2>
          <div className="mt-8 grid items-center gap-8 xl:grid-cols-2 xl:gap-10">
          <div className="min-w-0">
          <P className="mt-0 text-xl font-semibold text-primary">
            A doença do refluxo gastroesofágico (DRGE) acontece quando o conteúdo do estômago volta para o esôfago com frequência, causando sintomas como azia e regurgitação ou lesões na parede do esôfago.
          </P>
          <P>
            Um pouco de refluxo depois de uma refeição pesada pode acontecer com qualquer pessoa. O que caracteriza a doença é a repetição: sintomas em geral duas ou mais vezes por semana, ou que atrapalham o sono, a alimentação e a rotina.
          </P>
          <P>
            Na maioria dos casos, o problema está na válvula natural entre o esôfago e o estômago, chamada esfíncter esofágico inferior. Quando ela perde a capacidade de fechar bem, o ácido sobe. A hérnia de hiato, situação em que parte do estômago passa para o tórax, é uma das causas mais comuns dessa falha.
          </P>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-2xl border border-border bg-background">
            <img
              src={ilustracao}
              alt="Ilustração do esôfago e do estômago mostrando o conteúdo do estômago voltando para o esôfago pelo esfíncter esofágico inferior, abaixo do diafragma"
              width={1600}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain"
            />
            <figcaption className="border-t border-border px-5 py-3 text-base text-muted-foreground">
              Quando o esfíncter esofágico inferior não fecha bem, o conteúdo do estômago volta para o esôfago.
            </figcaption>
          </figure>
          </div>
        </Section>

        {/* 3. Sintomas */}
        <Section id="sintomas" tone="cream">
          <H2>Quais são os sintomas do refluxo?</H2>
          <P>
            Os sintomas mais conhecidos são azia e regurgitação, mas o refluxo também pode aparecer de formas que pouca gente associa ao estômago, como tosse, rouquidão e pigarro.
          </P>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
              <h3 className="flex items-center gap-3 text-xl"><Flame size={24} className="shrink-0 text-[var(--color-sage-strong)]" aria-hidden="true" />Sintomas típicos</h3>
              <CheckList
                items={[
                  "Azia ou queimação que sobe do estômago em direção ao peito",
                  "Regurgitação: sensação de líquido ácido ou amargo voltando à boca",
                  "Piora ao deitar, ao se curvar ou depois de refeições grandes",
                  "Despertar à noite com queimação ou gosto ácido",
                ]}
              />
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
              <h3 className="flex items-center gap-3 text-xl"><Wind size={24} className="shrink-0 text-[var(--color-sage-strong)]" aria-hidden="true" />Sintomas que nem parecem refluxo</h3>
              <CheckList
                items={[
                  "Tosse seca persistente, principalmente à noite",
                  "Pigarro e rouquidão frequentes",
                  "Sensação de algo parado na garganta",
                  "Dor no peito sem causa cardíaca identificada (sempre após avaliação do coração)",
                  "Desgaste no esmalte dos dentes",
                ]}
              />
            </div>
          </div>
          <div className="mt-6 rounded-2xl border-2 border-[var(--color-gold)] bg-[var(--color-warm)] p-6 md:p-8">
            <h3 className="flex items-center gap-3 text-xl">
              <AlertCircle size={24} className="text-[var(--color-warm-foreground)]" aria-hidden="true" />
              Sinais de alerta
            </h3>
            <p className="mt-3 text-lg font-semibold text-foreground">Alguns sinais pedem avaliação médica sem esperar:</p>
            <ul className="mt-4 grid gap-x-8 gap-y-3 text-lg leading-relaxed text-foreground/85 sm:grid-cols-2">
              {[
                "Dificuldade ou dor para engolir",
                "Perda de peso sem explicação",
                "Vômitos frequentes",
                "Vômito com sangue ou fezes escuras",
                "Anemia",
                "Início dos sintomas depois dos 50 anos",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-warm-foreground)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <P className="mx-auto mt-8 max-w-[700px] text-center">
            Nenhum desses sintomas, sozinho, fecha um diagnóstico. Eles indicam que vale investigar com um especialista.
          </P>
          <div className="mt-6 text-center [&>a]:w-full [&>a]:whitespace-nowrap [&>a]:px-4 [&>a]:text-base [&_svg]:shrink-0 sm:[&>a]:w-auto sm:[&>a]:px-8 sm:[&>a]:text-lg">
            <WaButton
              href={waLink("Olá, vim pela página de refluxo e gostaria de agendar uma avaliação dos meus sintomas.")}
              origem="secao_sintomas"
            >
              Agendar avaliação
            </WaButton>
          </div>
        </Section>

        {/* 4. Conviver é normal? */}
        <section className="hero-navy relative overflow-hidden text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 lg:px-8">
            <span aria-hidden="true" className="sage-rule sage-rule-on-dark" />
            <h2 className="mt-6 text-center text-[1.75rem] leading-tight text-primary-foreground md:text-[2.25rem]">
              Conviver com refluxo é normal?
            </h2>
            <p className="mt-5 w-full text-center font-serif-display text-2xl leading-snug text-gold md:text-[1.75rem]">
              Não. Refluxo frequente é comum, mas não é normal, e a adaptação costuma esconder o tamanho do problema.
            </p>
            <p className="mt-5 w-full text-lg leading-[1.75] text-primary-foreground/85">
              Muita gente reorganiza a vida em volta do sintoma sem perceber: deixa de jantar tarde, dorme com dois travesseiros, evita café, vinho e comida de família, carrega antiácido na bolsa, toma o remédio todos os dias há anos. Quando a rotina se ajusta ao refluxo, a sensação é de controle. Mas o que mudou foi o hábito, não a causa.
            </p>
            <div className="mt-10 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 md:p-8">
              <h3 className="text-center text-xl text-primary-foreground">Você se reconhece?</h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Toma remédio para o estômago quase todos os dias",
                  "Evita deitar logo depois de comer",
                  "Já deixou de comer algo de que gosta por medo da queimação",
                  "Acorda à noite com tosse ou gosto ácido",
                  "Sente que precisa de cada vez mais remédio para o mesmo efeito",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-lg leading-relaxed text-primary-foreground/90">
                    <Check size={22} className="mt-1 flex-shrink-0 text-gold" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 w-full text-lg leading-[1.75] text-primary-foreground/85">
              Se dois ou mais itens fazem parte da sua rotina, uma avaliação ajuda a entender a causa e a conhecer as opções de tratamento.
            </p>
            <div className="mt-8">
              <WaButton origem="secao_conviver">Agendar avaliação</WaButton>
            </div>
          </div>
        </section>

        {/* 5. Complicações */}
        <Section tone="white">
          <H2>O que pode acontecer se o refluxo não for acompanhado?</H2>
          <P>
            Na maioria das pessoas, o refluxo bem acompanhado não evolui para complicações. Quando o ácido agride o esôfago por muito tempo sem tratamento adequado, porém, algumas alterações podem surgir e precisam ser conhecidas.
          </P>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              ["Esofagite", "inflamação da parede do esôfago causada pelo contato repetido com o ácido."],
              ["Estreitamento do esôfago (estenose)", "cicatrizes que reduzem a passagem e dificultam engolir."],
              ["Esôfago de Barrett", "mudança nas células do esôfago em resposta à agressão crônica. É considerada uma lesão pré-maligna, o que significa que pede acompanhamento com endoscopia em intervalos definidos pelo médico. Ter Barrett não significa ter câncer."],
              ["Sintomas respiratórios", "tosse crônica, piora de asma e irritação da laringe."],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-border p-6">
                <span className="numeral-display text-[2rem]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{t}</h3>
                <p className="mt-2 text-lg leading-relaxed text-foreground/85">{d}</p>
              </div>
            ))}
          </div>
          <P className="mx-auto mt-8 text-center">
            O objetivo do acompanhamento é justamente esse: tratar no tempo certo, com informação, para que a decisão seja planejada e não tomada às pressas.
          </P>
        </Section>

        {/* 6. Hérnia de hiato */}
        <Section tone="cool">
          <H2>Qual a relação entre refluxo e hérnia de hiato?</H2>
          <P>
            A hérnia de hiato é uma das causas mais frequentes do refluxo. Ela acontece quando parte do estômago passa por uma abertura do diafragma, chamada hiato, e se desloca para dentro do tórax.
          </P>
          <P>
            Com essa mudança de posição, a barreira natural que impede o ácido de subir fica enfraquecida. Por isso, muitas pessoas com hérnia de hiato convivem com refluxo há anos, às vezes sem nunca terem ouvido falar da hérnia.
          </P>
          <P>
            Hérnias pequenas costumam ser acompanhadas com tratamento clínico. Hérnias maiores, ou que causam sintomas persistentes, podem ter indicação cirúrgica. Na cirurgia, o cirurgião reposiciona o estômago, fecha a abertura do diafragma (hiatoplastia) e reconstrói a válvula antirrefluxo no mesmo procedimento.
          </P>
        </Section>

        {/* 7. Diagnóstico e tratamento */}
        <Section tone="white">
          <H2>Como o refluxo é diagnosticado?</H2>
          <P>
            O diagnóstico começa na consulta, com a história dos sintomas, e é confirmado por exames escolhidos para cada caso.
          </P>
          <ResponsiveTable
            headers={["Exame", "Para que serve"]}
            rows={[
              ["Endoscopia digestiva alta", "Avalia a parede do esôfago e do estômago, identifica esofagite, hérnia de hiato e esôfago de Barrett"],
              ["pHmetria ou impedâncio-pHmetria de 24 horas", "Mede quantas vezes e por quanto tempo o refluxo acontece ao longo do dia"],
              ["Manometria esofágica", "Avalia a força e o funcionamento do esôfago; costuma ser pedida antes de uma cirurgia"],
              ["Raio-X contrastado (esofagograma)", "Mostra o tamanho e a posição da hérnia de hiato"],
            ]}
          />

        </Section>

        <Section tone="cool">
            <H2>Refluxo tem cura? Quais são os tratamentos?</H2>
            <P>
              O refluxo <strong>pode ser controlado na maioria dos casos</strong>. O tratamento vai de ajustes na rotina e medicamentos até a cirurgia, que corrige o mecanismo da válvula quando há indicação.
            </P>
            <div className="mt-10 grid items-start gap-4 md:gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border-t-4 border-[var(--color-sage-strong)] bg-card p-6 shadow-sm">
                <span className="numeral-display text-[2rem]">01</span>
                <h3 className="mt-2 text-xl">Tratamento clínico</h3>
                <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                  Ajustes de alimentação e horários, elevação da cabeceira da cama, controle de peso e medicamentos que reduzem a acidez. <strong>Para muitas pessoas, é suficiente.</strong> O Dr. Eron também faz esse acompanhamento clínico.
                </p>
              </div>
              <div className="rounded-2xl border-t-4 border-primary bg-card p-6 shadow-sm [&>ul]:mt-3">
                <span className="numeral-display text-[2rem]">02</span>
                <h3 className="mt-2 text-xl">Quando a cirurgia pode ser indicada</h3>
                <CheckList
                  items={[
                    "Sintomas que continuam mesmo com o remédio correto",
                    "Necessidade de uso contínuo de medicamento por longo período, com desejo de outra alternativa",
                    "Hérnia de hiato de tamanho relevante",
                    "Regurgitação importante ou sintomas respiratórios ligados ao refluxo comprovado",
                    "Complicações como esofagite intensa ou estenose",
                  ]}
                />
              </div>
              <div className="rounded-2xl border-t-4 border-[var(--color-gold)] bg-card p-6 shadow-sm">
                <span className="numeral-display text-[2rem]">03</span>
                <h3 className="mt-2 text-xl">Como é a cirurgia</h3>
                <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                  A cirurgia mais realizada é a <strong>fundoplicatura</strong>. O cirurgião usa a parte de cima do estômago para envolver o final do esôfago e reconstruir a barreira contra o refluxo. Quando há hérnia de hiato, ela é corrigida no mesmo tempo.
                </p>
              </div>
            </div>
            <h3 className="mt-14 text-xl md:text-2xl">Comparativo de técnicas</h3>
            <ResponsiveTable
              headers={["Técnica", "Como é feita", "Para quem"]}
              rows={[
                ["Videolaparoscopia", "Pequenas incisões no abdômen, com câmera e pinças", "Padrão para a maioria dos casos"],
                ["Cirurgia robótica", "O cirurgião comanda braços robóticos com visão em 3D ampliada", "Casos selecionados, como hérnias grandes, reoperações e pacientes com maior complexidade"],
                ["Cirurgia aberta (convencional)", "Incisão maior no abdômen", "Situações específicas, hoje menos frequentes"],
              ]}
            />
            <div className="mt-8 flex flex-col items-center gap-6 [&>p]:mt-0">
            <P className="text-center">
              A escolha da técnica é <strong>individual e definida na consulta</strong>, a partir dos exames, da idade, da saúde geral e da rotina de cada paciente.
            </P>
            <div className="w-full text-center [&>a]:w-full [&>a]:whitespace-nowrap [&>a]:px-4 [&>a]:text-base [&_svg]:shrink-0 sm:w-auto sm:[&>a]:w-auto sm:[&>a]:px-8 sm:[&>a]:text-lg">
              <WaButton
                href={waLink("Olá, gostaria de agendar uma avaliação para entender as opções de tratamento para refluxo no meu caso.")}
                origem="secao_tratamentos"
              >
                Conversar sobre meu tratamento
              </WaButton>
            </div>
            </div>
        </Section>

        {/* 8. Recuperação */}
        <Section tone="cream">
          <H2>Como é a recuperação da cirurgia de refluxo?</H2>
          <P>
            Nas técnicas minimamente invasivas, a internação costuma ser curta e a volta às atividades leves acontece de forma gradual, com orientações definidas para cada paciente.
          </P>
          <ol className="mt-10 space-y-0">
            {[
              ["Antes da cirurgia", "avaliação pré-operatória completa, revisão de medicamentos e planejamento da data no momento mais adequado para o paciente e a família."],
              ["Internação", "em geral de 1 a 2 dias, variando conforme o caso."],
              ["Primeiras semanas", "alimentação em consistência líquida e pastosa, avançando aos poucos conforme a orientação da equipe."],
              ["Retorno à rotina", "atividades leves e trabalho em escritório costumam ser retomados nas primeiras semanas; esforço físico, mais adiante."],
              ["Acompanhamento", "consultas de retorno para ajustar a alimentação e acompanhar a evolução."],
            ].map(([t, d], i, arr) => (
              <li key={t} className="relative flex gap-5 pb-8">
                {i < arr.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[23px] top-12 bottom-0 w-[2px] bg-[var(--color-gold-soft)]" />
                )}
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-serif-display text-xl text-gold">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl">{t}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-foreground/85">{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-2xl border-l-4 border-[var(--color-sage-strong)] bg-card p-6 md:p-8">
            <h3 className="text-xl">Cuidado para quem tem mais de 65 anos</h3>
            <p className="mt-3 text-lg leading-relaxed text-foreground/85">
              Para pacientes idosos, a decisão vai além da doença. O planejamento considera a qualidade de vida, a autonomia depois da alta e o equilíbrio entre riscos e benefícios para cada pessoa. Esse olhar faz parte da formação e da história do Dr. Eron.
            </p>
          </div>
          <P className="mt-8 text-base italic text-muted-foreground">
            Os prazos acima são referências gerais. Cada recuperação depende da técnica, da idade, da saúde e da rotina de cada paciente.
          </P>
          <div className="mt-8 [&>a]:w-full [&>a]:whitespace-nowrap [&>a]:px-4 [&>a]:text-base [&_svg]:shrink-0 sm:[&>a]:w-auto sm:[&>a]:px-8 sm:[&>a]:text-lg">
            <WaButton
              href={waLink("Olá, gostaria de agendar uma avaliação com o Dr. Eron para conversar sobre a cirurgia de refluxo e a recuperação.")}
              origem="secao_recuperacao"
            >
              Agendar avaliação com o Dr. Eron
            </WaButton>
          </div>
        </Section>

        {/* 9. Sobre o Dr. Eron */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:px-8 [@media(min-width:768px)_and_(min-height:600px)]:grid-cols-[0.8fr_1.2fr]">
            <div className="mx-auto w-full max-w-sm">
              <div className="[@media(min-width:768px)_and_(min-height:600px)]:sticky [@media(min-width:768px)_and_(min-height:600px)]:top-8">
              <img
                src={formal800.url}
                srcSet={`${formal800.url} 800w, ${formal1200.url} 1200w`}
                sizes="(min-width: 768px) 380px, 90vw"
                alt="Dr. Eron Barbosa de Queiroz, cirurgião do aparelho digestivo em Brasília"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="portrait-treatment aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              </div>
            </div>
            <div>
              <H2>Quem é o Dr. Eron Queiroz?</H2>
              <P className="font-semibold text-primary">
                Dr. Eron Barbosa de Queiroz é cirurgião do aparelho digestivo em Brasília (CRM-DF 26024, RQE 17127 e 17279), com atuação em cirurgia de refluxo, hérnia de hiato, vesícula e hérnias abdominais por videolaparoscopia e cirurgia robótica.
              </P>
              <P>
                Formado em Medicina pela Universidade Federal de Goiás, fez residência em Cirurgia Geral no Hospital Lúcio Rebelo e em Cirurgia do Aparelho Digestivo no Hospital das Clínicas da UFG. Tem MBA em Gestão em Saúde pela Fundação Getulio Vargas e é membro do Colégio Brasileiro de Cirurgia Digestiva, da Associação Brasileira de Câncer Gástrico e da Associação Latino-Americana de Câncer Gástrico.
              </P>
              <P>Atende no consultório do Lago Sul e opera nos hospitais Sírio-Libanês e DF Star, em Brasília.</P>
              <P>
                O Dr. Eron integra o Grupo Lívere, uma equipe de cirurgiões do aparelho digestivo em que cada caso é conduzido por profissionais com experiência específica naquela área.
              </P>
              <div className="mt-8 rounded-2xl bg-cool p-6">
                <h3 className="text-xl">Atendimento a pacientes internacionais</h3>
                <p className="mt-3 text-lg leading-relaxed text-foreground/85">
                  Pacientes de embaixadas, organismos internacionais e com seguros como Cigna e Allianz são atendidos no Hospital Sírio-Libanês, em Brasília.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9.1 Avaliações — oculta enquanto não houver depoimentos aprovados */}
        {TESTIMONIALS.length > 0 && (
          <Section tone="cream">
            <H2>O que dizem os pacientes do Dr. Eron Queiroz</H2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <figure key={t.author + t.text.slice(0, 12)} className="rounded-2xl bg-card p-6 shadow-sm">
                  <blockquote className="text-lg leading-relaxed text-foreground/85">“{t.text}”</blockquote>
                  <figcaption className="mt-4 text-base font-bold text-primary">
                    {t.author} <span className="font-normal text-muted-foreground">· {t.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-base italic text-muted-foreground">
              Relatos individuais de pacientes. Cada caso é único e os resultados dependem de fatores individuais.
            </p>
          </Section>
        )}

        {/* 10. Custo */}
        <Section tone="cool">
          <H2>Quanto custa a cirurgia de refluxo?</H2>
          <P>
            O valor da cirurgia de refluxo varia conforme a técnica, o hospital e a necessidade de corrigir hérnia de hiato no mesmo procedimento. Depois da consulta e dos exames, o paciente recebe um orçamento detalhado antes de qualquer decisão.
          </P>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-6 md:p-8">
              <h3 className="text-xl">O que compõe o investimento</h3>
              <CheckList
                items={[
                  "Honorários da equipe cirúrgica",
                  "Anestesia",
                  "Custos hospitalares (centro cirúrgico, internação, materiais)",
                  "Exames pré-operatórios",
                  "Material específico, quando a técnica for robótica",
                ]}
              />
            </div>
            <div className="rounded-2xl bg-card p-6 md:p-8">
              <h3 className="text-xl">Formas de atendimento</h3>
              <CheckList
                items={[
                  "Particular",
                  "Seguros internacionais (como Cigna e Allianz), no Hospital Sírio-Libanês",
                  "Reembolso pelo plano de saúde",
                ]}
              />
            </div>
          </div>
          <div className="mt-10">
            <WaButton href={WA_VALORES} origem="secao_valores" variant="outline">
              Solicitar informações sobre valores
            </WaButton>
          </div>
        </Section>

        {/* 11. FAQ */}
        <Section tone="white">
          <H2>Perguntas frequentes sobre refluxo</H2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faq.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex min-h-[56px] cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-bold leading-snug md:text-xl">{f.q}</h3>
                  <ChevronDown
                    size={24}
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 text-[var(--color-sage-strong)] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="measure pb-6 text-lg leading-relaxed text-foreground/85">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* 12. CTA final e rodapé */}
        <section className="hero-navy text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24 lg:px-8">
            <span aria-hidden="true" className="sage-rule sage-rule-on-dark mx-auto" />
            <h2 className="mt-6 text-[1.75rem] leading-tight text-primary-foreground md:text-[2.5rem]">
              Uma avaliação para entender o seu caso
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.75] text-primary-foreground/85">
              Cada refluxo tem uma causa, e cada pessoa tem uma rotina. Na consulta, o Dr. Eron avalia os sintomas, os exames que você já tem e explica com clareza os caminhos possíveis, incluindo o que esperar de custo e de recuperação.
            </p>
            <div className="mt-10">
              <WaButton origem="cta_final">Agendar avaliação pelo WhatsApp</WaButton>
            </div>
            <ul className="mx-auto mt-10 max-w-2xl space-y-3 text-left text-lg text-primary-foreground/85">
              <li className="flex gap-3">
                <MapPin size={22} className="mt-1 flex-shrink-0 text-[var(--color-sage)]" aria-hidden="true" />
                <span>Consultório: {ADDRESS_FULL}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={22} className="mt-1 flex-shrink-0 text-[var(--color-sage)]" aria-hidden="true" />
                <span>
                  Telefone: <a href="tel:+556135466409" className="underline underline-offset-4">(61) 3546-6409</a>
                </span>
              </li>
              <li className="flex gap-3">
                <Check size={22} className="mt-1 flex-shrink-0 text-[var(--color-sage)]" aria-hidden="true" />
                <span>Atendimento presencial e online</span>
              </li>
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl border border-primary-foreground/15">
              <iframe
                src={MAP_EMBED}
                title="Mapa do consultório do Dr. Eron Queiroz no Santos Dumont Medical Center, Lago Sul, Brasília"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0"
              />
            </div>
          </div>
          <footer className="border-t border-primary-foreground/15">
            <div className="mx-auto max-w-4xl space-y-3 px-6 py-10 text-center text-base text-primary-foreground/70 lg:px-8">
              <p className="font-semibold text-primary-foreground/90">
                Dr. Eron Barbosa de Queiroz · Cirurgião do Aparelho Digestivo · CRM-DF 26024 · RQE 17127 e 17279
              </p>
              <p>
                Conteúdo de caráter informativo e educativo. Não substitui a consulta médica, o diagnóstico ou a indicação de tratamento, que são sempre individuais.
              </p>
              {REVIEW_INFO && (
                <p>Conteúdo revisado por Dr. Eron Barbosa de Queiroz. Última atualização: {REVIEW_INFO.date}.</p>
              )}
              <p>
                <a
                  href="https://www.instagram.com/dreronqueiroz/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram do Dr. Eron Queiroz"
                  className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                >
                  <Instagram size={18} aria-hidden="true" /> @dreronqueiroz
                </a>
              </p>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="hero-navy relative isolate overflow-hidden text-primary-foreground">
      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[1.25fr_1fr] md:gap-14 md:py-20 lg:px-8">
        <div>
          <p className="eyebrow eyebrow-on-dark hero-rise hero-rise-1 !text-[0.8125rem] !tracking-[0.22em]">
            Cirurgia do Aparelho Digestivo em Brasília
          </p>
          <h1 className="font-serif-display hero-rise hero-rise-2 mt-6 text-[2rem] leading-[1.15] text-primary-foreground sm:text-[2.375rem] lg:text-[2.875rem]">
            Refluxo gastroesofágico (DRGE) em Brasília:{" "}
            <span className="italic text-gold">sintomas, diagnóstico e tratamento</span>
          </h1>
          <p className="measure hero-rise hero-rise-3 mt-6 text-lg leading-[1.7] text-primary-foreground/90 md:text-xl">
            Azia que volta toda semana, queimação que acorda à noite, pigarro que não passa. Quando o refluxo vira rotina, ele merece uma avaliação cuidadosa, e não adaptação. Aqui você entende o que está acontecendo e quais caminhos de tratamento existem.
          </p>
          <div className="hero-rise hero-rise-4 mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <WaButton origem="hero">Agendar avaliação pelo WhatsApp</WaButton>
            <a
              href="#sintomas"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border-2 border-primary-foreground/40 px-8 py-4 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
            >
              Entender os sintomas
            </a>
          </div>
          <p className="hero-rise hero-rise-5 mt-8 text-base leading-relaxed text-primary-foreground/75">
            Dr. Eron Barbosa de Queiroz · Cirurgião do Aparelho Digestivo · CRM-DF 26024 · RQE 17127 e 17279 · Lago Sul, Brasília
          </p>
          <ul className="hero-rise hero-rise-5 mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
            {["Cirurgia robótica e videolaparoscópica", "Atendimento no Hospital Sírio-Libanês e no DF Star"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-base font-semibold text-primary-foreground/90">
                <span aria-hidden="true" className="text-gold">◆</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-rise hero-rise-image relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="portrait-treatment relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem]">
            <img
              src={portrait720.url}
              srcSet={`${portrait480.url} 480w, ${portrait720.url} 720w, ${portrait1200.url} 1200w`}
              sizes="(min-width: 768px) 460px, 100vw"
              alt="Retrato profissional do Dr. Eron Queiroz, cirurgião do aparelho digestivo em Brasília"
              width={896}
              height={1152}
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 20%", transform: "scale(1.22)", transformOrigin: "50% 20%" }}
            />
            <span aria-hidden="true" className="portrait-tint" />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-8 right-8 h-[2px] rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}
