type Variant = "sage" | "gold" | "blue";

const COLORS: Record<Variant, string> = {
  sage: "var(--color-sage-strong)",
  gold: "var(--color-gold)",
  blue: "var(--color-primary-soft)",
};

/**
 * Forma orgânica decorativa de fundo (SVG inline, leve).
 * Opacidade 3–6%. Usar com posicionamento via className (absolute, top/right/…)
 * dentro de uma .section-organic.
 */
export function OrganicBg({
  variant = "sage",
  opacity = 0.05,
  className = "",
  shape = "blob",
}: {
  variant?: Variant;
  opacity?: number;
  className?: string;
  shape?: "blob" | "wave" | "ring";
}) {
  const stroke = COLORS[variant];
  const fill = COLORS[variant];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={`organic-shape ${className}`}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid meet"
    >
      {shape === "blob" ? (
        <path
          fill={fill}
          d="M421 92c52 33 99 79 116 138 18 60 7 134-31 188-37 53-101 87-167 96-66 8-135-9-179-50-44-42-64-108-58-170 5-62 36-119 84-159 49-40 115-62 173-54 22 3 43 6 62 11z"
        />
      ) : shape === "wave" ? (
        <g fill="none" stroke={stroke} strokeWidth="1.4">
          <path d="M-20 220 C 150 140, 320 320, 480 240 S 760 120, 940 220" />
          <path d="M-20 320 C 160 240, 340 420, 500 340 S 760 220, 940 320" />
          <path d="M-20 420 C 150 340, 320 520, 480 440 S 760 320, 940 420" />
        </g>
      ) : (
        <g fill="none" stroke={stroke} strokeWidth="1.2">
          <circle cx="300" cy="300" r="240" />
          <circle cx="300" cy="300" r="180" />
          <circle cx="300" cy="300" r="120" />
        </g>
      )}
    </svg>
  );
}