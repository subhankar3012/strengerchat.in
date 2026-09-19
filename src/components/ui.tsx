import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  Reveal — IntersectionObserver driven, machined slide-into-detent  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand mark — drawn as real vector geometry (flow / signal glyph)   */
/* ------------------------------------------------------------------ */
export function BrandMark({ className = "h-9 w-9", id = "sg" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-label="StrengerChat logo mark" fill="none">
      <defs>
        <linearGradient id={`${id}-stroke`} x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6B2C" />
          <stop offset="100%" stopColor="#35E0D0" />
        </linearGradient>
      </defs>
      <rect x="1.1" y="1.1" width="29.8" height="29.8" rx="9.4" stroke={`url(#${id}-stroke)`} strokeWidth="1.6" opacity="0.62" />
      <path
        d="M8.4 22.6 L14.6 16 L8.4 9.4"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4 22.6 L23.6 16 L17.4 9.4"
        stroke="#35E0D0"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <circle cx="24.3" cy="22.1" r="1.85" fill="#FF6B2C" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="StrengerChat home">
      <BrandMark className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-extrabold tracking-[-0.022em] text-bright">
          Strenger<span className="text-mute">Chat</span>
        </span>
        <span className="mono-label mt-[3px] text-[8.5px] text-mute/70">Ecosystem</span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Section scaffold — numbered spec-sheet header                      */
/* ------------------------------------------------------------------ */
export function SectionHeader({
  index,
  kicker,
  title,
  description,
  accent = "#FF6B2C",
  align = "left",
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  accent?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal className="flex items-center gap-2.5">
        <span className="font-mono text-xs font-semibold" style={{ color: accent }}>
          {index}
        </span>
        <span className="h-px w-6" style={{ background: accent, opacity: 0.5 }} />
        <span className="font-mono text-xs text-mute uppercase tracking-wider">{kicker}</span>
      </Reveal>

      <Reveal delay={90}>
        <h2 className="mt-4 font-display text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-snug tracking-tight text-bright">
          {title}
        </h2>
      </Reveal>

      <Reveal delay={150} className={align === "center" ? "mx-auto mt-3" : "mt-3"}>
        <div className="rule-draw h-px w-full bg-white/10" />
        {description && (
          <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-mute">{description}</p>
        )}
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status pill                                                        */
/* ------------------------------------------------------------------ */
export function StatusPill({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`glass inline-flex items-center gap-2.5 rounded-full ${
        compact ? "px-3 py-1.5" : "px-4 py-2.5"
      }`}
    >
      <span className="led relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-teal" />
      </span>
      <span className={`font-mono ${compact ? "text-[10px]" : "text-[11px]"} tracking-[0.06em] text-bright/90`}>
        All Services Operational
      </span>
      <span className="h-3 w-px bg-white/12" />
      <span className={`font-mono ${compact ? "text-[10px]" : "text-[11px]"} tracking-[0.06em] text-teal`}>
        100% Free • No Sign-up
      </span>
    </span>
  );
}
