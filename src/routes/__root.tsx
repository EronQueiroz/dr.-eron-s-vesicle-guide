import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz — Clínica Lívere" },
      {
        name: "description",
        content:
          "Dr. Eron Queiroz, cirurgião do aparelho digestivo em Brasília/DF, CRM-DF 26024. Avaliação individualizada para cirurgia de vesícula biliar (colecistectomia) por videolaparoscopia na Clínica Lívere, Asa Sul.",
      },
      { name: "author", content: "Dr. Eron Queiroz" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz — Clínica Lívere",
      },
      {
        property: "og:description",
        content:
          "Cirurgião do aparelho digestivo em Brasília/DF. Avaliação criteriosa para cirurgia de vesícula biliar por videolaparoscopia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz — Clínica Lívere" },
      { name: "twitter:title", content: "Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz — Clínica Lívere" },
      { name: "description", content: "Dr. Eron Queiroz offers expert, editorial-style information on private gallbladder surgery in Brasília." },
      { property: "og:description", content: "Dr. Eron Queiroz offers expert, editorial-style information on private gallbladder surgery in Brasília." },
      { name: "twitter:description", content: "Dr. Eron Queiroz offers expert, editorial-style information on private gallbladder surgery in Brasília." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d86d99b8-e7d8-4370-8c45-26ad271eb254/id-preview-37d38ccd--92e657ba-f4c0-4499-8e0a-b2a7a588562a.lovable.app-1776434184756.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d86d99b8-e7d8-4370-8c45-26ad271eb254/id-preview-37d38ccd--92e657ba-f4c0-4499-8e0a-b2a7a588562a.lovable.app-1776434184756.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const GOOGLE_TAG_SCRIPT = `
  document.addEventListener('DOMContentLoaded', function() {
    var whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion_whatsapp', {
            'event_category': 'contato',
            'event_label': 'whatsapp_vesicula',
            'value': 1
          });
        }
      });
    });
    var phoneLinks = document.querySelectorAll('a[href*="tel:"]');
    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'conversion_telefone', {
            'event_category': 'contato',
            'event_label': 'telefone_vesicula',
            'value': 1
          });
        }
      });
    });
  });
`;

const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://vesicula.dreronqueiroz.com.br/#physician",
      name: "Dr. Eron Queiroz",
      alternateName: "Eron Queiroz",
      description:
        "Cirurgião do Aparelho Digestivo especializado em cirurgia de vesícula biliar em Brasília/DF. Atendimento na Clínica Lívere, Asa Sul.",
      medicalSpecialty: "Cirurgia do Aparelho Digestivo",
      identifier: "CRM-DF 26024",
      hasCredential: ["CRM-DF 26024", "RQE 17127", "RQE 17279"],
      alumniOf: [
        { "@type": "EducationalOrganization", name: "Universidade Federal de Goiás (UFG)" },
        { "@type": "EducationalOrganization", name: "Fundação Getúlio Vargas (FGV)" },
      ],
      memberOf: [
        { "@type": "MedicalOrganization", name: "Colégio Brasileiro de Cirurgia Digestiva (CBCD)" },
        { "@type": "MedicalOrganization", name: "Associação Brasileira de Câncer Gástrico (ABCG)" },
      ],
      worksFor: { "@id": "https://vesicula.dreronqueiroz.com.br/#clinic" },
      url: "https://vesicula.dreronqueiroz.com.br/",
      telephone: "+55-61-3546-6409",
      email: "clinicalivere@gmail.com",
    },
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://vesicula.dreronqueiroz.com.br/#clinic",
      name: "Clínica Lívere — Dr. Eron Queiroz",
      description:
        "Clínica especializada em cirurgia do aparelho digestivo em Brasília/DF. Referência em cirurgia de vesícula biliar (colecistectomia videolaparoscópica).",
      url: "https://vesicula.dreronqueiroz.com.br/",
      telephone: "+55-61-3546-6409",
      email: "clinicalivere@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SGAS 614, Ed. Vitrium, Sala 31",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "70200-740",
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: -15.8267, longitude: -47.9218 },
      areaServed: { "@type": "City", name: "Brasília" },
      medicalSpecialty: "Cirurgia do Aparelho Digestivo",
      priceRange: "$$$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "81",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Elaine Martins" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Gratidão imensa ao Dr. Eron. Ele foi extremamente atencioso, gentil e cuidadoso comigo antes, durante e após a cirurgia de retirada da vesícula. Tranquilizou meu esposo, prestando informações a todo momento. E a cicatrização dos pontos da cirurgia ficou perfeita.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ivanice Cunha Nunes" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Excelente médico! Com excelente equipe! Foi a pessoa certa na hora certa quando precisei tratar-me com pedras na vesícula. Olhar amplo, acolhedor e simpático!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Laura Isabel Furtado" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody:
            "Ele fez a cirurgia da remoção da minha vesícula. É um dos melhores médicos que conheci. Gostaria que todos fossem como ele. Recomendo muito!",
        },
      ],
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://vesicula.dreronqueiroz.com.br/#procedure",
      name: "Colecistectomia Videolaparoscópica",
      alternateName: "Cirurgia de Vesícula por Vídeo",
      description:
        "Remoção cirúrgica da vesícula biliar por técnica minimamente invasiva com 3 a 4 incisões de 5 a 10mm. Padrão-ouro mundial para tratamento de colelitíase sintomática.",
      procedureType: "Surgical",
      bodyLocation: "Vesícula biliar",
      followup: "Consulta de retorno em 7 a 10 dias após a cirurgia.",
      preparation: "Jejum de 8 horas, revisão de medicações em uso, avaliação pré-anestésica.",
      howPerformed:
        "Videolaparoscopia com anestesia geral. Duração média de 40 a 60 minutos em casos eletivos.",
      performer: { "@id": "https://vesicula.dreronqueiroz.com.br/#physician" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Preciso operar mesmo se não estou sentindo nada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A avaliação é sempre individualizada. Mesmo pacientes sem sintomas são orientados a consultar um cirurgião do aparelho digestivo para entender o caso em profundidade — tamanho e localização das pedras, histórico clínico, idade e fatores de risco influenciam na decisão.",
          },
        },
        {
          "@type": "Question",
          name: "A cirurgia por vídeo é segura para idosos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, desde que haja avaliação pré-operatória adequada. A colecistectomia videolaparoscópica é preferível à cirurgia aberta mesmo em pacientes idosos por causar menos trauma cirúrgico e permitir recuperação mais rápida.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo dura a internação para colecistectomia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A internação dura em média 12 a 24 horas. A maioria dos pacientes recebe alta no mesmo dia da cirurgia ou na manhã seguinte.",
          },
        },
        {
          "@type": "Question",
          name: "Quando posso voltar ao trabalho depois da cirurgia de vesícula?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para trabalhos de escritório ou atividades sedentárias, o retorno ocorre entre 5 e 10 dias após a cirurgia. Para atividades físicas ou trabalhos que exijam esforço, o prazo é de 3 a 4 semanas.",
          },
        },
        {
          "@type": "Question",
          name: "Posso fazer a avaliação sem me comprometer a operar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A consulta de avaliação serve exatamente para entender seu caso com profundidade e discutir opções. Não há nenhum compromisso cirúrgico numa primeira consulta.",
          },
        },
        {
          "@type": "Question",
          name: "Posso comer normalmente depois de retirar a vesícula?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na maioria dos casos, sim, após um período inicial de adaptação. A grande maioria dos pacientes volta a se alimentar normalmente após 1 a 2 meses, sem restrições significativas.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://vesicula.dreronqueiroz.com.br/#webpage",
      url: "https://vesicula.dreronqueiroz.com.br/",
      name: "Cirurgia de Vesícula em Brasília | Dr. Eron Queiroz — Clínica Lívere",
      description:
        "Dr. Eron Queiroz, cirurgião do aparelho digestivo em Brasília/DF, CRM-DF 26024. Avaliação individualizada para cirurgia de vesícula biliar (colecistectomia) por videolaparoscopia na Clínica Lívere, Asa Sul.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": "https://vesicula.dreronqueiroz.com.br/#clinic" },
      about: { "@id": "https://vesicula.dreronqueiroz.com.br/#procedure" },
      author: { "@id": "https://vesicula.dreronqueiroz.com.br/#physician" },
      dateModified: "2026-04-17",
      keywords:
        "cirurgia vesícula Brasília, colecistectomia Brasília, cirurgião vesícula DF, pedra na vesícula Brasília, Dr. Eron Queiroz",
    },
  ],
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-36EEMZ49QS" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-36EEMZ49QS');`,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: GOOGLE_TAG_SCRIPT }} />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
