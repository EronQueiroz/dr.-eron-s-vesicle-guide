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

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
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
