import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
};

/**
 * Scroll-reveal sutil via IntersectionObserver nativo.
 * Sem bibliotecas externas. Aplica .is-visible quando entra na viewport.
 */
export function Reveal({ children, as: Tag = "div", className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delayMs) {
              const t = window.setTimeout(() => setVisible(true), delayMs);
              io.disconnect();
              return () => window.clearTimeout(t);
            }
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);

  return (
    <Tag ref={ref as never} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}