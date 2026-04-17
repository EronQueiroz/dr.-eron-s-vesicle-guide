import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/556135466409?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20cirurgia%20de%20ves%C3%ADcula%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp com a equipe do Dr. Eron Queiroz"
      className={`gtag-whatsapp fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-whatsapp)] focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.484-1.32.13-.302.244-.917.244-1.234 0-.43-2.04-1.31-2.434-1.41zm-2.92 7.45a8.39 8.39 0 0 1-4.27-1.17l-3.06.97 1-3a8.45 8.45 0 1 1 6.33 3.2zm0-18.55a10.13 10.13 0 0 0-8.61 15.46L6 27.06l5.55-1.76A10.13 10.13 0 1 0 16.19 6.1z" />
      </svg>
    </a>
  );
}
