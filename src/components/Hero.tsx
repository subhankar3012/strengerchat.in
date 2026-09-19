import { ArrowUpRight, ArrowDown, Menu, X, ShieldCheck, Gauge, Sparkles, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal, StatusPill, Wordmark } from "./ui";

const NAV = [
  { label: "MediaFlow", href: "#mediaflow" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#footer" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/8 bg-[rgba(11,13,16,0.82)] backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1220px] items-center justify-between px-5 sm:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-mute transition-colors duration-200 hover:bg-white/[0.055] hover:text-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="https://download.strengerchat.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4.5 py-2.5 text-[12.5px] font-semibold text-bright transition-all duration-300 hover:border-signal/45 hover:bg-signal/12 sm:inline-flex"
          >
            Open MediaFlow
            <ArrowUpRight className="h-[15px] w-[15px] text-signal transition-transform duration-300 group-hover:translate-x-[2.5px] group-hover:-translate-y-[2.5px]" strokeWidth={2.3} />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-bright lg:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/8 bg-[rgba(11,13,16,0.96)] backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto flex w-full max-w-[1220px] flex-col px-5 py-4 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/8 py-3.5 text-[15px] font-medium text-bright last:border-0"
            >
              {item.label}
              <ArrowUpRight className="h-4 w-4 text-mute" />
            </a>
          ))}
          <a
            href="https://download.strengerchat.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#FF6B2C,#FF8348)] px-5 py-3 text-[13.5px] font-bold text-[#120A05]"
          >
            Open MediaFlow Web <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

const METRICS = [
  { value: "05", label: "Flagship tools live", sub: "MediaFlow network" },
  { value: "0", label: "Ads · Trackers", sub: "No data resale" },
  { value: "320", label: "kbps audio ceiling", sub: "Studio-grade MP3" },
  { value: "4K", label: "60FPS extraction", sub: "Hardware accelerated" },
];

const PRINCIPLES = [
  { icon: ShieldCheck, title: "Privacy-first by default", copy: "No account walls, no behavioural tracking, no third-party ad scripts on any page." },
  { icon: Gauge, title: "Built for raw speed", copy: "Static-first delivery and edge caching keep interactions instant on any connection." },
  { icon: Cpu, title: "Hardware accelerated", copy: "Encoding and conversion lean on modern device silicon rather than slow shared queues." },
  { icon: Sparkles, title: "Free, without the catch", copy: "Every utility in the StrengerChat ecosystem is free to use, unlimited, forever." },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[112px] pb-20 sm:pt-[132px] lg:pb-28">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-[0.85]" />
        <div className="absolute -top-[280px] left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,44,0.16),transparent_72%)] blur-[10px]" />
        <div className="absolute top-[120px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(53,224,208,0.10),transparent_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(11,13,16,0.92))]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- copy ---------------- */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/9 bg-white/[0.038] py-1.5 pr-4 pl-1.5">
                <span className="rounded-full bg-[linear-gradient(100deg,#FF6B2C,#35E0D0)] px-2.5 py-[3px] font-mono text-[9.5px] font-medium tracking-[0.19em] text-[#120A05] uppercase">
                  v2.4
                </span>
                <span className="mono-label text-mute">StrengerChat Ecosystem • Web Utilities</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.42rem,6.4vw,4.32rem)] leading-[0.98] font-extrabold tracking-[-0.038em] text-bright">
                Next-Gen Web Utilities
                <br />
                <span className="gradient-text">&amp; Digital Media Tools</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.72] text-mute">
                A privacy-first suite of free, high-speed online tools designed for creators, developers, and
                everyday media consumers — anchored by{" "}
                <a
                  href="https://download.strengerchat.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tinted-underline font-semibold text-bright"
                >
                  MediaFlow
                </a>
                , our flagship media extraction &amp; converter engine.
              </p>
            </Reveal>

            <Reveal delay={210} className="mt-8">
              <StatusPill />
            </Reveal>

            <Reveal delay={270}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://download.strengerchat.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(100deg,#FF6B2C_0%,#FF8348_52%,#35E0D0_100%)] px-7 py-4 font-display text-[14.5px] font-bold tracking-[-0.008em] text-[#120A05] shadow-[0_18px_44px_-16px_rgba(255,107,44,0.75)] transition-all duration-300 hover:shadow-[0_22px_56px_-14px_rgba(255,107,44,0.88)] hover:brightness-[1.06] active:scale-[0.985]"
                >
                  Open MediaFlow Web
                  <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" strokeWidth={2.4} />
                </a>

                <a
                  href="#ecosystem"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 px-7 py-4 font-display text-[14.5px] font-semibold text-bright transition-colors duration-300 hover:border-teal/40 hover:bg-teal/8"
                >
                  Explore the ecosystem
                  <ArrowDown className="h-[17px] w-[17px] text-teal transition-transform duration-300 group-hover:translate-y-[3px]" strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>

            {/* metric strip */}
            <Reveal delay={330}>
              <dl className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white/9 bg-white/[0.045] sm:grid-cols-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="bg-[rgba(11,13,16,0.72)] px-5 py-5">
                    <dt className="mono-label text-mute/70">{m.sub}</dt>
                    <dd className="tabular mt-2.5 font-display text-[26px] leading-none font-extrabold tracking-[-0.036em] text-bright">
                      {m.value}
                    </dd>
                    <dd className="mt-2 text-[11.5px] leading-[1.5] text-mute">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ---------------- hardware panel ---------------- */}
          <Reveal delay={190} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="noise relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10">
                <img
                  src="/images/faceplate.jpg"
                  alt="Macro detail of an anodised graphite media converter faceplate with amber indicator LEDs"
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-[62%_center]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,16,0.22)_0%,rgba(11,13,16,0.66)_62%,rgba(11,13,16,0.92)_100%)]" />
                <div className="absolute inset-0 tech-grid-fine opacity-30 mix-blend-overlay" />

                {/* floating readouts */}
                <div className="glass absolute top-3 right-3 left-3 sm:top-5 sm:right-5 sm:left-5 rounded-[13px] px-3.5 py-3 sm:px-4 sm:py-3.5">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-mute/85 text-[9.5px] sm:text-[10.5px]">Pipeline status</span>
                    <span className="mono-label text-teal text-[9.5px] sm:text-[10.5px]">Optimal</span>
                  </div>
                  <div className="mt-2.5 sm:mt-3 flex items-end gap-[3px]">
                    {[38, 62, 49, 78, 91, 68, 84, 56, 96, 72, 60, 88, 46, 80, 66].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-[2px] bg-[linear-gradient(180deg,#35E0D0,#FF6B2C)]"
                        style={{ height: `${h * 0.42}px`, opacity: 0.42 + (h / 100) * 0.58 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="glass absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-5 rounded-[13px] px-3.5 py-3 sm:px-4 sm:py-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="led flex h-2 w-2 shrink-0">
                        <span className="h-full w-full rounded-full bg-signal" />
                      </span>
                      <span className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.14em] text-bright/85 uppercase">
                        Encoding engine • active
                      </span>
                    </div>
                    <span className="tabular font-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-mute">
                      H.264 / H.265 / VP9 / OPUS
                    </span>
                  </div>
                </div>
              </div>

              {/* corner ticks */}
              <span className="absolute -top-[7px] -left-[7px] h-3.5 w-3.5 border-t border-l border-signal/55" />
              <span className="absolute -right-[7px] -bottom-[7px] h-3.5 w-3.5 border-r border-b border-teal/55" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------------- principles band ---------------- */}
      <div id="standards" className="relative mx-auto mt-24 w-full max-w-[1220px] px-5 sm:px-8">
        <Reveal>
          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex items-start gap-3.5">
                <span className="mt-[3px] flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/9 bg-white/[0.05]">
                  <p.icon className="h-[17px] w-[17px] text-teal" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-[15px] font-bold tracking-[-0.015em] text-bright">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.72] text-mute">{p.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
