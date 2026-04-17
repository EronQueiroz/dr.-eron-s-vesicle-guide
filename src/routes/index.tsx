import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  Clock,
  Star,
  ShieldCheck,
  ClipboardList,
  Users,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import drEronPortrait from "@/assets/dr-eron-portrait.jpg";
import drEronFormal from "@/assets/dr-eron-formal.jpg";
import livereLogo from "@/assets/livere-logo.jpg";
import { ReadingProgress } from "@/components/ReadingProgress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FaqAccordion } from "@/components/FaqAccordion";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/556135466409?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20cirurgia%20de%20ves%C3%ADcula%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica%20L%C3%ADvere%20SGAS%20614%20Ed.%20Vitrium%20Sala%2031%20Asa%20Sul%20Bras%C3%ADlia";

const faqItems = [
  {
    q: "Toda pedra na vesícula precisa de cirurgia?",
    a: "Não. Pedras assintomáticas descobertas por acaso podem ser monitoradas clinicamente em muitos casos. A indicação cirúrgica depende da presença de sintomas (cólica biliar, dispepsia pós-prandial), tamanho e número de cálculos, idade do paciente e presença de fatores de risco para complicações. Pacientes com sintomas recorrentes ou com pedras grandes geralmente se beneficiam da cirurgia eletiva.",
  },
  {
    q: "A cirurgia por vídeo é segura para idosos?",
    a: "Sim, desde que haja avaliação pré-operatória adequada. A colecistectomia videolaparoscópica é preferível à cirurgia aberta mesmo em pacientes idosos por causar menos trauma cirúrgico e permitir recuperação mais rápida. Estudos científicos recentes, incluindo meta-análises publicadas em periódicos internacionais, demonstram que a cirurgia eletiva planejada em idosos com risco controlado apresenta taxas de complicação substancialmente menores do que a cirurgia de urgência realizada após uma complicação como colecistite aguda.",
  },
  {
    q: "Quanto tempo dura a internação para colecistectomia?",
    a: "A internação dura em média 12 a 24 horas. A maioria dos pacientes recebe alta no mesmo dia da cirurgia ou na manhã seguinte, dependendo da evolução clínica imediata, resposta anestésica e aceitação da dieta.",
  },
  {
    q: "Quando posso voltar ao trabalho depois da cirurgia de vesícula?",
    a: "Para trabalhos de escritório ou atividades sedentárias, o retorno ocorre entre 5 e 10 dias após a cirurgia. Para atividades físicas ou trabalhos que exijam esforço, o prazo é de 3 a 4 semanas. O retorno é sempre avaliado individualmente na consulta de retorno.",
  },
  {
    q: "Vou sentir muita dor depois da cirurgia?",
    a: "Desconforto moderado nas primeiras 24 a 48 horas é esperado e controlado com analgesia oral. A maioria dos pacientes descreve o pós-operatório como mais tranquilo do que imaginava. Dor intensa, persistente ou de características atípicas deve ser comunicada imediatamente ao cirurgião.",
  },
  {
    q: "Posso fazer a avaliação sem me comprometer a operar?",
    a: "Sim. A consulta de avaliação serve exatamente para entender seu caso com profundidade e discutir opções — inclusive a possibilidade de acompanhamento clínico em vez de cirurgia imediata, quando apropriado. Não há nenhum compromisso cirúrgico numa primeira consulta.",
  },
  {
    q: "Em qual hospital a cirurgia é realizada em Brasília?",
    a: "O Dr. Eron Queiroz realiza procedimentos em hospitais credenciados em Brasília/DF com estrutura cirúrgica de alto padrão. A definição do hospital ocorre durante a consulta, considerando perfil do paciente, complexidade do caso e preferências individuais.",
  },
  {
    q: "Qual a diferença de fazer particular em relação ao convênio?",
    a: "No atendimento particular, o paciente tem consulta com tempo dedicado (geralmente 40 a 60 minutos), planejamento cirúrgico personalizado, contato direto com o cirurgião em todas as etapas do processo e acompanhamento pós-operatório incluído. A escolha do hospital, da equipe anestésica e do instrumental cirúrgico é feita com critério individual.",
  },
  {
    q: "Posso comer normalmente depois de retirar a vesícula?",
    a: "Na maioria dos casos, sim, após um período inicial de adaptação. Nas primeiras semanas, recomenda-se dieta com moderação de gorduras. A grande maioria dos pacientes volta a se alimentar normalmente após 1 a 2 meses, sem restrições significativas.",
  },
  {
    q: "O que acontece se eu adiar a cirurgia indicada?",
    a: "Em casos com sintomas recorrentes, adiar a cirurgia aumenta o risco de complicações como colecistite aguda, pancreatite biliar, coledocolitíase ou obstrução das vias biliares — situações que exigem cirurgia de urgência, com maior risco cirúrgico e recuperação mais prolongada.",
  },
  {
    q: "A cirurgia deixa marcas visíveis?",
    a: "As incisões da videolaparoscopia têm entre 5 e 10mm e são estrategicamente posicionadas. Após cicatrização completa (6 a 12 meses), tendem a ficar discretas e na maioria dos casos dificilmente perceptíveis à distância.",
  },
  {
    q: "Preciso tomar algum cuidado especial antes de marcar a cirurgia?",
    a: "Sim. É importante trazer todos os exames prévios (especialmente ultrassom de abdome), lista de medicações em uso, histórico de cirurgias anteriores e, se possível, estar acompanhado de um familiar na consulta de avaliação — especialmente pacientes idosos.",
  },
];

const recoveryTimeline = [
  {
    when: "Dia 1–2",
    text: "Repouso em casa. Alimentação líquida e pastosa nas primeiras refeições, progredindo para dieta leve. Leve desconforto abdominal esperado, controlado com analgesia oral. Evitar esforço físico. Cuidados com curativos conforme orientação.",
  },
  {
    when: "Dia 3–5",
    text: "Retorno gradual às atividades cotidianas leves — caminhadas curtas, atividades domésticas simples. A maioria dos pacientes relata melhora significativa do desconforto.",
  },
  {
    when: "Dia 7–10",
    text: "Consulta de retorno para avaliação das incisões, resultado do exame anatomopatológico da peça cirúrgica e orientações de progressão alimentar e de atividade.",
  },
  {
    when: "Dia 15–21",
    text: "Liberação progressiva para atividades normais. Alimentação sem restrições significativas na maioria dos casos, com recomendação de moderação em alimentos muito gordurosos nas primeiras semanas.",
  },
  {
    when: "Dia 30",
    text: "Avaliação final. Orientações sobre atividade física, incluindo exercícios de maior intensidade. A maioria dos pacientes já está plenamente recuperada nesse ponto.",
  },
];

const testimonials = [
  {
    name: "Elaine Martins",
    text: "Gratidão imensa ao Dr. Eron. Ele foi extremamente atencioso, gentil e cuidadoso comigo antes, durante e após a cirurgia de retirada da vesícula. Tranquilizou meu esposo, prestando informações a todo momento. E a cicatrização dos pontos da cirurgia ficou perfeita.",
  },
  {
    name: "Ivanice Cunha Nunes",
    text: "Excelente médico! Com excelente equipe! Foi a pessoa certa na hora certa quando precisei tratar-me com pedras na vesícula. Olhar amplo, acolhedor e simpático! Recomendo, agradecida e feliz!",
  },
  {
    name: "Laura Isabel Furtado",
    text: "Ele fez a cirurgia da remoção da minha vesícula. É um dos melhores médicos que conheci. Gostaria que todos fossem como ele. Recomendo muito!",
  },
];

function Index() {
  return (
    <>
      <ReadingProgress />
      <WhatsAppFloat />

      <main className="bg-background text-foreground">
        {/* SEÇÃO 1 — HERO */}
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
            style={{
              background:
                "radial-gradient(ellipse at top right, color-mix(in oklab, var(--color-primary) 12%, transparent), transparent 65%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-16 md:py-24 lg:px-8">
            <div>
              <img
                src={livereLogo}
                alt="Logo Clínica Lívere"
                width={120}
                height={120}
                className="mb-6 h-20 w-auto md:h-24"
                fetchPriority="high"
              />
              <p className="eyebrow mb-5">Dr. Eron Queiroz</p>
              <h1 className="text-3xl font-extrabold leading-[1.15] text-primary sm:text-4xl md:text-[2.6rem] lg:text-[2.95rem]">
                Cirurgia de vesícula em Brasília: avaliação criteriosa, explicação clara e acompanhamento do início ao fim.
              </h1>
              <p className="measure mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Cada caso de vesícula tem uma história diferente. Antes de qualquer decisão cirúrgica, o Dr. Eron Queiroz avalia seus exames, seus sintomas e seu histórico — e explica exatamente o que está acontecendo e quais são suas opções.
              </p>
              <div className="mt-9 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-sage-strong)]" aria-hidden="true" />
                <span>
                  Dr. Eron Queiroz — CRM-DF 26024 &nbsp;|&nbsp; Cirurgião do Aparelho Digestivo &nbsp;|&nbsp; Clínica Lívere, Asa Sul, Brasília/DF
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 85%, black), color-mix(in oklab, var(--color-primary-soft) 85%, transparent))",
                }}
              />
              <img
                src={drEronPortrait}
                alt="Retrato profissional do Dr. Eron Queiroz, cirurgião do aparelho digestivo, em ambiente clínico"
                width={896}
                height={1152}
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 — RESUMO 30s */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 md:py-20">
            <div
              className="rounded-2xl border border-border bg-background px-6 py-9 shadow-sm sm:px-10 sm:py-11"
              style={{ borderLeft: "4px solid var(--color-sage-strong)" }}
            >
              <p className="eyebrow">Resumo em 30 segundos</p>
              <h2 className="mt-3 text-2xl font-extrabold text-primary sm:text-[1.75rem]">
                Informação essencial sobre cirurgia de vesícula
              </h2>
              <ul className="mt-8 space-y-4 text-base leading-relaxed text-foreground/90">
                {[
                  "A colelitíase (pedra na vesícula) afeta entre 10 e 20% da população adulta, com prevalência maior em mulheres; no Brasil, estudos apontam prevalência geral próxima de 9% na população assistida no SUS.",
                  "Nem toda pedra na vesícula requer cirurgia imediata — a indicação depende da presença de sintomas, tamanho e número de cálculos, idade e condição clínica do paciente.",
                  "A colecistectomia videolaparoscópica é o padrão-ouro mundial para tratamento cirúrgico de patologias benignas da vesícula biliar desde os anos 1990.",
                  "A cirurgia minimamente invasiva tem duração média de 40 a 60 minutos em casos eletivos não complicados, com alta hospitalar em geral em até 24 horas.",
                  "Pacientes idosos podem e frequentemente devem ser operados quando sintomáticos — estudos mostram que a cirurgia eletiva bem planejada apresenta riscos substancialmente menores que a cirurgia de urgência.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-sage-strong)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3 — O que é a vesícula */}
        <section>
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 md:py-28">
            <p className="eyebrow mb-4">Saúde digestiva</p>
            <span className="sage-rule mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
              Entendendo a vesícula biliar: função, pedras e quando o problema aparece
            </h2>
            <div className="mt-10 space-y-6 text-base leading-[1.8] text-foreground/85 md:text-lg">
              <p>
                A vesícula biliar é um pequeno órgão em formato de pera localizado abaixo do fígado, com capacidade de armazenar entre 30 e 60 ml de bile — líquido produzido pelo fígado que auxilia na digestão de gorduras. Durante as refeições, a vesícula se contrai e libera bile no intestino delgado. Na maioria do tempo, ela funciona silenciosamente.
              </p>
              <p>
                A colelitíase — nome técnico para pedras na vesícula — ocorre quando substâncias presentes na bile, principalmente colesterol e sais de cálcio, se solidificam e formam cálculos. Fatores de risco incluem sexo feminino (prevalência 2 a 3 vezes maior que em homens), idade acima de 40 anos, obesidade, gravidez, jejum prolongado, perda rápida de peso, diabetes e histórico familiar. Estudos epidemiológicos apontam prevalência entre 10 e 20% da população adulta em países ocidentais, sendo a maioria dos casos assintomática. No Brasil, a colelitíase é a doença cirúrgica abdominal mais comum em idosos, com cerca de 60 mil internações anuais registradas no Sistema Único de Saúde.
              </p>
              <p>
                O ponto crítico é que pedras na vesícula podem permanecer completamente assintomáticas por anos — e de repente causar uma crise aguda. Por isso, o momento certo de avaliar e tratar é uma decisão individualizada, nunca baseada em regras genéricas. A presença de sintomas muda completamente a conduta recomendada pelas principais diretrizes clínicas internacionais, incluindo as Tokyo Guidelines, que norteiam o manejo de doenças biliares no mundo todo.
              </p>
            </div>
            <p className="mt-12 border-t border-border pt-6 text-xs italic text-muted-foreground">
              Informação revisada pelo Dr. Eron Queiroz, CRM-DF 26024. Última atualização: abril de 2026.
            </p>
          </div>
        </section>

        {/* SEÇÃO 4 — Quando operar */}
        <section className="bg-muted">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Fique atento</p>
              <span className="sage-rule mb-6" aria-hidden="true" />
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
                Quando a cirurgia é necessária — e quando ainda dá para avaliar com calma
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
              <article
                className="rounded-2xl border border-[var(--color-warm-foreground)]/15 p-7 shadow-sm sm:p-8"
                style={{ backgroundColor: "#FFF4E6" }}
              >
                <div className="flex items-center gap-3 text-[var(--color-warm-foreground)]">
                  <AlertTriangle size={22} aria-hidden="true" />
                  <h3 className="text-xl font-extrabold sm:text-[1.35rem]">
                    Situações que pedem avaliação urgente
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/85">
                  {[
                    "Febre acima de 38 °C acompanhada de dor abdominal intensa",
                    "Pele ou olhos amarelados (icterícia) — pode indicar obstrução de via biliar",
                    "Dor intensa e contínua no quadrante superior direito do abdome que não cede",
                    "Náuseas e vômitos repetidos numa mesma crise",
                    "Sinais de pancreatite biliar (dor irradiando para as costas)",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-warm-foreground)]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className="rounded-2xl border border-[var(--color-cool-foreground)]/15 p-7 shadow-sm sm:p-8"
                style={{ backgroundColor: "#E6F1FB" }}
              >
                <div className="flex items-center gap-3 text-[var(--color-cool-foreground)]">
                  <Clock size={22} aria-hidden="true" />
                  <h3 className="text-xl font-extrabold sm:text-[1.35rem]">
                    Situações que permitem avaliação eletiva
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/85">
                  {[
                    "Pedra descoberta por acaso em exame de rotina sem sintomas",
                    "Episódio isolado de cólica biliar já resolvida",
                    "Dúvida sobre indicação cirúrgica recebida de outro profissional",
                    "Desejo de entender melhor o caso antes de decidir",
                    "Preparo para cirurgia eletiva com planejamento adequado",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-cool-foreground)]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="measure-wide mt-12 text-base leading-relaxed text-muted-foreground md:text-lg">
              A decisão cirúrgica depende do seu caso específico — tamanho e número de cálculos, presença e frequência de sintomas, histórico clínico, condição geral e idade. Essa avaliação não pode ser feita por protocolo genérico; precisa ser conduzida por um cirurgião do aparelho digestivo que analise o seu caso em profundidade. As principais diretrizes clínicas internacionais para manejo de doenças biliares, como as Tokyo Guidelines 2018, reforçam a importância da abordagem individualizada.
            </p>
          </div>
        </section>

        {/* SEÇÃO 5 — Como é a cirurgia */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 md:py-28">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Procedimento</p>
              <span className="sage-rule mb-6" aria-hidden="true" />
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
                Colecistectomia videolaparoscópica: o que acontece em cada etapa
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A colecistectomia videolaparoscópica foi introduzida no final da década de 1980 e se consolidou como padrão-ouro mundial para tratamento de patologias benignas da vesícula biliar a partir dos anos 1990. No Brasil, a primeira cirurgia foi realizada no Hospital Albert Einstein, em São Paulo.
              </p>
            </div>

            <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  label: "Antes",
                  text: "Avaliação clínica detalhada com análise de exames laboratoriais (hemograma, coagulograma, função hepática) e de imagem (ultrassom de abdome, eventualmente colangiorressonância). Orientação sobre jejum pré-operatório (8 horas), suspensão ou ajuste de medicações em uso (especialmente anticoagulantes) e avaliação anestésica quando indicado.",
                },
                {
                  label: "Durante",
                  text: "São realizadas 3 a 4 incisões de 5 a 10 mm no abdome. Uma microcâmera é introduzida permitindo visualização ampliada da cavidade abdominal. A vesícula é cuidadosamente dissecada e removida. Duração média: 40 a 60 minutos em casos eletivos não complicados. Anestesia geral conduzida por equipe de anestesiologistas especializados.",
                },
                {
                  label: "Depois",
                  text: "Alta hospitalar no mesmo dia ou em até 24 horas na maioria dos casos. Retorno às atividades leves em 5 a 7 dias. Consulta de retorno incluída no acompanhamento. Cicatrizes pequenas que tendem a ficar imperceptíveis após alguns meses.",
                },
              ].map((step, i) => (
                <li
                  key={step.label}
                  className="rounded-2xl border border-border bg-background p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold text-primary-foreground"
                    style={{ backgroundColor: "var(--color-sage-strong)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-primary">
                    {step.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-foreground/80">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-14 border-t border-border pt-6 text-xs italic text-muted-foreground">
              Informação revisada pelo Dr. Eron Queiroz, CRM-DF 26024.
            </p>
          </div>
        </section>

        {/* SEÇÃO 6 — Idosos (bloco azul marinho — mesma identidade da página atual) */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 md:py-28">
            <div className="text-center">
              <p className="eyebrow eyebrow-on-dark mb-5">Cuidado especializado</p>
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-primary-foreground md:text-[2.5rem]">
                Cirurgia de vesícula em pacientes idosos: o que muda na avaliação e no cuidado
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
                Com o envelhecimento, a abordagem cirúrgica precisa ser ainda mais criteriosa — e a família faz parte dessa decisão.
              </p>
            </div>

            <div className="mt-12 space-y-6 text-base leading-[1.8] text-primary-foreground/90 md:text-lg">
              <p>
                Pacientes acima de 70 anos com colelitíase sintomática podem e frequentemente devem ser operados, pois o risco de complicações graves aumenta quando a cirurgia é adiada. Uma meta-análise publicada em Digestive Surgery (Karger, 2017), que avaliou 592 pacientes com idade média de 81 anos operados por colecistite aguda, documentou morbidade perioperatória de 24% e mortalidade de 3,5% — taxas superiores às observadas em pacientes mais jovens operados na mesma condição (morbidade aproximada de 15% e mortalidade abaixo de 1%). Estudo mais recente publicado no JAMA Surgery em 2025, comparando tratamento cirúrgico e não-cirúrgico em idosos com múltiplas comorbidades, demonstrou redução absoluta de 3% na mortalidade aos 30 dias e 4% aos 90 dias no grupo operado, além de menos readmissões hospitalares. Isso reforça que, quando bem indicada, a cirurgia eletiva planejada com critério é mais segura do que esperar a cirurgia de urgência.
              </p>
              <p>
                A abordagem exige avaliação de risco cirúrgico mais detalhada (escala ASA, avaliação cardiológica), revisão cuidadosa de medicações em uso (especialmente anticoagulantes e antiagregantes), preparo nutricional e planejamento anestésico que considere a recuperação funcional, não apenas a física. O Dr. Eron Queiroz tem experiência específica com cirurgia digestiva em pacientes idosos e conduz essa avaliação de forma individualizada, incluindo a família nas decisões clínicas quando apropriado.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { Icon: ShieldCheck, label: "Avaliação de risco individualizada" },
                { Icon: ClipboardList, label: "Preparo pré-operatório adaptado" },
                { Icon: Users, label: "Acompanhamento pós-operatório com a família" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: "color-mix(in oklab, var(--color-sage) 35%, transparent)" }}
                  >
                    <Icon size={20} aria-hidden="true" className="text-[var(--color-sage)]" />
                  </span>
                  <p className="text-base font-bold leading-snug text-primary-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 — Recuperação */}
        <section>
          <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 md:py-28">
            <p className="eyebrow mb-4">Pós-operatório</p>
            <span className="sage-rule mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
              O que esperar na recuperação: uma linha do tempo realista
            </h2>

            <ol
              className="mt-14 space-y-0 pl-8"
              style={{ borderLeft: "2px solid color-mix(in oklab, var(--color-sage-strong) 50%, transparent)" }}
            >
              {recoveryTimeline.map((it) => (
                <li key={it.when} className="relative pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-sage-strong)] bg-background"
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-sage-strong)]">
                    {it.when}
                  </p>
                  <p className="mt-3 text-base leading-[1.75] text-foreground/85 md:text-lg">
                    {it.text}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-10 border-t border-border pt-6 text-sm italic text-muted-foreground">
              Cada recuperação tem seu próprio ritmo. A equipe da Clínica Lívere está disponível para dúvidas entre as consultas.
            </p>
          </div>
        </section>

        {/* SEÇÃO 8 — Quem é o Dr. Eron */}
        <section style={{ backgroundColor: "var(--color-primary-soft)" }} className="text-primary-foreground">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 md:py-28">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 -z-10 rounded-[2rem]"
                  style={{ background: "color-mix(in oklab, black 20%, transparent)" }}
                />
                <img
                  src={drEronFormal}
                  alt="Retrato do Dr. Eron Queiroz, CRM-DF 26024, cirurgião do aparelho digestivo"
                  loading="lazy"
                  width={896}
                  height={1152}
                  className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
                />
              </div>
              <div>
                <p className="eyebrow eyebrow-on-dark mb-4">Cirurgião do Aparelho Digestivo</p>
                <h2 className="text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-[2.5rem]">
                  Dr. Eron Queiroz
                </h2>
                <p className="mt-3 text-sm tracking-wide text-[var(--color-sage)]">
                  CRM-DF 26024 &nbsp;|&nbsp; RQE 17127 &nbsp;|&nbsp; RQE 17279
                </p>

                <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-primary-foreground/90">
                  {[
                    "Medicina pela Universidade Federal de Goiás (UFG)",
                    "Residência em Cirurgia Geral — Hospital Lúcio Rebelo",
                    "Residência em Cirurgia do Aparelho Digestivo — Hospital das Clínicas da UFG",
                    "MBA em Gestão em Saúde — Fundação Getúlio Vargas (FGV)",
                    "Membro do Colégio Brasileiro de Cirurgia Digestiva (CBCD)",
                    "Membro da Associação Brasileira de Câncer Gástrico (ABCG)",
                    "Membro da Associação Latino-Americana de Câncer Gástrico",
                  ].map((c) => (
                    <li key={c} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-sage)]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <blockquote
                  className="mt-10 pl-6 text-lg italic leading-relaxed text-primary-foreground md:text-xl"
                  style={{ borderLeft: "3px solid var(--color-sage)" }}
                >
                  Acredito que o trabalho do cirurgião começa muito antes do centro cirúrgico e termina bem depois da alta. Meu objetivo é garantir que cada paciente — e sua família — entenda o que está acontecendo, confie no plano e sinta que tem um profissional disponível em cada etapa do processo.
                </blockquote>

                <p className="mt-8 flex items-start gap-3 text-sm text-primary-foreground/80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-sage)]" aria-hidden="true" />
                  <span>
                    Atendimento na Clínica Lívere — SGAS 614, Ed. Vitrium, Sala 31, Asa Sul, Brasília/DF.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 9 — Depoimentos */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 md:py-28">
            <div className="text-center">
              <p className="eyebrow mb-4">Avaliações</p>
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
                O que dizem os pacientes
              </h2>
              <div className="mt-6 inline-flex flex-col items-center gap-1">
                <p className="text-sm font-extrabold tracking-wider text-foreground">EXCELENTE</p>
                <div className="flex gap-0.5 text-[#FBBF24]" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Avaliações verificadas — fonte: Google Meu Negócio Dr. Eron Queiroz
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-border bg-muted p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-[#FBBF24]" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                      ))}
                    </div>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-muted-foreground"
                      style={{ backgroundColor: "var(--color-background)" }}
                      aria-label="Avaliação Google"
                    >
                      G
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-[15px] leading-[1.7] text-foreground/85">
                    “{t.text}”
                  </p>
                  <p className="mt-6 border-t border-border pt-4 text-sm font-bold text-primary">
                    {t.name}
                  </p>
                </article>
              ))}
            </div>

            <div id="trustindex-embed" className="mt-12" aria-label="Widget Google Meu Negócio (a configurar)" />
          </div>
        </section>

        {/* SEÇÃO 10 — FAQ */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 md:py-28">
            <p className="eyebrow mb-4">Perguntas frequentes</p>
            <span className="sage-rule mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-extrabold text-primary md:text-4xl">
              Perguntas frequentes sobre cirurgia de vesícula
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Respondidas com clareza — porque dúvida não resolvida vira medo.
            </p>
            <div className="mt-12 rounded-2xl bg-background p-2 shadow-sm sm:p-4">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* SEÇÃO 11 — Autoridade (faixa sage clara, alinhada ao site existente) */}
        <section style={{ backgroundColor: "color-mix(in oklab, var(--color-sage) 35%, white)" }}>
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 md:py-20 text-center">
            <p className="eyebrow">Referências e diretrizes clínicas</p>
            <p className="measure-wide mx-auto mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              As condutas e recomendações apresentadas nesta página seguem diretrizes clínicas reconhecidas internacionalmente — especialmente as Tokyo Guidelines 2018 para manejo de doenças biliares — e estão alinhadas com a literatura cirúrgica mais atual em cirurgia do aparelho digestivo. As informações têm caráter educativo e não substituem a consulta médica individual, que é o único contexto adequado para avaliação de cada caso.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-80">
              {["CBCD", "SBCBM", "ABCG"].map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-extrabold tracking-[0.22em] text-primary"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 12 — Contato */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 md:py-28 text-center">
            <span aria-hidden="true" className="sage-rule sage-rule-on-dark mx-auto" />
            <h2 className="mt-8 text-3xl font-extrabold leading-tight text-primary-foreground md:text-[2.5rem]">
              Tem dúvidas sobre o seu caso? Podemos conversar.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Se depois de ler você ainda tiver dúvidas sobre se o seu caso precisa de avaliação cirúrgica — ou simplesmente quiser uma segunda opinião — entre em contato. Não há compromisso cirúrgico numa primeira consulta.
            </p>

            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gtag-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-sage), var(--color-sage-strong))",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.484-1.32.13-.302.244-.917.244-1.234 0-.43-2.04-1.31-2.434-1.41zm-2.92 7.45a8.39 8.39 0 0 1-4.27-1.17l-3.06.97 1-3a8.45 8.45 0 1 1 6.33 3.2zm0-18.55a10.13 10.13 0 0 0-8.61 15.46L6 27.06l5.55-1.76A10.13 10.13 0 1 0 16.19 6.1z" />
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="mt-10 space-y-3 text-sm text-primary-foreground/80">
              <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span className="inline-flex items-center gap-2">
                  <Phone size={14} aria-hidden="true" />
                  <a href="tel:+556135466409" className="hover:text-primary-foreground">
                    (61) 3546-6409
                  </a>
                </span>
                <span aria-hidden="true" className="text-primary-foreground/40">|</span>
                <span className="inline-flex items-center gap-2">
                  <Mail size={14} aria-hidden="true" />
                  <a href="mailto:clinicalivere@gmail.com" className="hover:text-primary-foreground">
                    clinicalivere@gmail.com
                  </a>
                </span>
              </p>
              <p className="flex items-start justify-center gap-2 pt-1">
                <MapPin size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground"
                >
                  Clínica Lívere — SGAS 614, Ed. Vitrium, Sala 31, Asa Sul, Brasília/DF
                </a>
              </p>
            </div>

            <p className="mt-16 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/55">
              © 2026 Dr. Eron Queiroz. Última atualização desta página: abril de 2026.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
