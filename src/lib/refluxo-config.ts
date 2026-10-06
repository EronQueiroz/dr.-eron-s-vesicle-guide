// Configuração central de contato da página de refluxo.
// ATENÇÃO: este é o mesmo número já usado na página de vesícula; confirmar se recebe WhatsApp.
export const REFLUXO_WHATSAPP_NUMBER = "556135466409";

const MSG_AVALIACAO = "Olá, vim pela página de refluxo e gostaria de agendar uma avaliação.";
const MSG_VALORES =
  "Olá, vim pela página de refluxo e gostaria de informações sobre valores e formas de atendimento.";

export const waLink = (msg: string) =>
  `https://wa.me/${REFLUXO_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_AVALIACAO = waLink(MSG_AVALIACAO);
export const WA_VALORES = waLink(MSG_VALORES);

export function trackWhatsApp(origem: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_click", origem, pagina: "refluxo" });
}
