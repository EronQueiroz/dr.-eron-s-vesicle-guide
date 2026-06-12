import { useState, useRef, useEffect } from "react";
import eronVideoAsset from "@/assets/eron-video-v2.webp.asset.json";

interface Props {
  videoId: string;
  title: string;
  signature: string;
  ariaLabel: string;
}

export function YouTubeFacade({ videoId, title, signature, ariaLabel }: Props) {
  const [activated, setActivated] = useState(false);
  const iframeWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activated && iframeWrapRef.current) {
      const iframe = iframeWrapRef.current.querySelector("iframe");
      iframe?.focus();
    }
  }, [activated]);

  const activate = () => {
    if (activated) return;
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "video_play" });
    }
    setActivated(true);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {activated ? (
          <div ref={iframeWrapRef} className="absolute inset-0">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0&autoplay=1`}
              title="Vídeo do Dr. Eron Queiroz sobre cirurgia de vesícula biliar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={activate}
            aria-label={ariaLabel}
            className="group hero-navy absolute inset-0 flex items-stretch overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2"
          >
            {/* textura sutil de linhas orgânicas */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 450"
            >
              <defs>
                <pattern id="yt-lines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0 60 Q 40 30 80 60" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-[color:var(--color-gold)]" />
                  <path d="M0 30 Q 40 0 80 30" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-[color:var(--color-gold)]" />
                </pattern>
              </defs>
              <rect width="800" height="450" fill="url(#yt-lines)" />
            </svg>

            {/* Foto à direita (~40%), fundida ao fundo via gradiente */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[44%] sm:w-[42%] md:w-[40%]">
              <img
                src={eronVideoAsset.url}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width={800}
                height={1200}
                className="h-full w-full object-cover object-top"
              />
              {/* fusão mínima na borda esquerda — o fundo da foto já é navy */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in oklab, var(--color-primary) 80%, black) 0%, transparent 18%)",
                }}
              />
            </div>

            {/* Bloco de texto à esquerda, centralizado verticalmente */}
            <div className="relative z-10 flex w-[62%] flex-col justify-center gap-3 px-5 py-6 sm:w-[60%] sm:gap-4 sm:px-8 md:gap-5 md:px-12 lg:px-16">
              <h3 className="font-serif-display text-xl font-semibold leading-tight text-[color:var(--color-warm)] sm:text-2xl md:text-3xl lg:text-4xl">
                {title}
              </h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)] sm:text-xs md:text-sm">
                {signature}
              </p>
              <div className="mt-2 flex items-center gap-3 sm:gap-4 md:mt-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110 sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    boxShadow:
                      "0 12px 30px -10px color-mix(in oklab, black 60%, transparent), 0 4px 12px -4px color-mix(in oklab, var(--color-gold) 60%, transparent)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 h-5 w-5 text-[color:var(--color-primary)] sm:h-6 sm:w-6 md:ml-1 md:h-8 md:w-8"
                  >
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.55.83l10.5-6.86a1 1 0 0 0 0-1.66L9.55 4.31A1 1 0 0 0 8 5.14z" />
                  </svg>
                </span>
                <span className="text-xs font-medium tracking-wide text-[color:var(--color-warm)]/80 sm:text-sm">
                  Assistir · 4 min
                </span>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
