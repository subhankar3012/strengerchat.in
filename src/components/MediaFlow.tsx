import {
  ArrowUpRight,
  ArrowRight,
  Video,
  Camera,
  Music2,
  FileVideo,
  Clapperboard,
  Smartphone,
  Download,
  Zap,
  ShieldCheck,
  Cpu,
  Boxes,
  Activity,
} from "lucide-react";
import { Reveal, SectionHeader, StatusPill } from "./ui";

const FLAGSHIP_URL = "https://download.strengerchat.in";

const SPEC_CHIPS = [
  { label: "4K 60FPS Support", icon: Activity },
  { label: "320kbps MP3", icon: Music2 },
  { label: "Instagram Carousel Batch ZIP", icon: Boxes },
  { label: "Hardware Accelerated Android App", icon: Cpu },
];

const TOOLS = [
  {
    n: "01",
    title: "YouTube Video Downloader",
    href: "https://download.strengerchat.in/youtube-video-downloader",
    desc: "Extract 1080p, 2K & 4K streams with guaranteed audio sync.",
    icon: Video,
    tag: "youtube-video-downloader",
  },
  {
    n: "02",
    title: "YouTube to MP3 Converter",
    href: "https://download.strengerchat.in/youtube-to-mp3",
    desc: "Convert videos directly to studio-quality 320kbps MP3 audio.",
    icon: Music2,
    tag: "youtube-to-mp3",
  },
  {
    n: "03",
    title: "YouTube to MP4 Fast Downloader",
    href: "https://download.strengerchat.in/youtube-to-mp4",
    desc: "Lightweight, mobile-optimized MP4 video downloads with zero lag.",
    icon: FileVideo,
    tag: "youtube-to-mp4",
  },
  {
    n: "04",
    title: "Instagram Video Downloader",
    href: "https://download.strengerchat.in/instagram-downloader",
    desc: "Direct CDN download for public videos and posts.",
    icon: Camera,
    tag: "instagram-downloader",
  },
  {
    n: "05",
    title: "Instagram Reels Downloader",
    href: "https://download.strengerchat.in/instagram-reels-downloader",
    desc: "High-speed vertical reel & story extraction without login.",
    icon: Clapperboard,
    tag: "instagram-reels-downloader",
  },
];

export default function MediaFlow() {
  return (
    <section id="mediaflow" className="relative mx-auto w-full max-w-[1220px] px-5 pt-24 sm:px-8 lg:pt-32">
      <SectionHeader
        index="01"
        kicker="Featured Tool Suite"
        accent="#FF6B2C"
        title={
          <>
            MediaFlow — Ultimate Media{" "}
            <span className="gradient-text">Extraction &amp; Converter Engine</span>
          </>
        }
        description="The flagship product of the StrengerChat ecosystem. A zero-ad, hardware-accelerated pipeline that resolves, converts and delivers media at the highest quality the source allows — straight from your browser, no account required."
      />

      {/* ---------------- flagship bento ---------------- */}
      <div className="mt-8 sm:mt-11 grid grid-cols-1 gap-4 lg:grid-cols-6">
        {/* hero tile */}
        <Reveal className="lg:col-span-4">
          <article className="tile edge-glow noise relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-panel">
            <div className="absolute inset-0">
              <img
                src="/images/faceplate.jpg"
                alt="Brushed graphite MediaFlow converter hardware"
                loading="lazy"
                decoding="async"
                width={1536}
                height={1024}
                className="h-full w-full object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,13,16,0.98)_0%,rgba(11,13,16,0.90)_45%,rgba(11,13,16,0.55)_100%)]" />
              <div className="absolute inset-0 tech-grid-fine opacity-30" />
            </div>

            {/* scanning sweep */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 overflow-hidden">
              <div className="sweep h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,107,44,0.10),transparent)]" />
            </div>

            <div className="relative z-10 p-5 sm:p-8 lg:p-9">
              <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-mono text-signal-soft">
                <Zap className="h-3.5 w-3.5 text-signal shrink-0" strokeWidth={2} />
                <span>Flagship Media Engine</span>
                <span className="h-2 w-px bg-signal/30" />
                <span>Zero Ads</span>
              </div>

              <h3 className="mt-4 sm:mt-5 max-w-[22ch] font-display text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug tracking-tight text-bright">
                Zero-Compression Video &amp; Audio Extraction
              </h3>

              <p className="mt-2.5 sm:mt-3 max-w-[50ch] text-xs sm:text-sm sm:leading-relaxed text-mute">
                Extract pristine 4K 60FPS video and studio-grade 320kbps MP3 audio directly in your browser. No registration, no queues, no watermark.
              </p>

              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={FLAGSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(100deg,#FF6B2C_0%,#FF8348_50%,#35E0D0_100%)] px-5 py-2.5 sm:px-6 sm:py-3 font-display text-xs sm:text-sm font-bold text-[#120A05] shadow-[0_12px_28px_-10px_rgba(255,107,44,0.7)] transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                >
                  <span>Open MediaFlow Web</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.4} />
                </a>
                <span className="font-mono text-xs text-mute/70">download.strengerchat.in</span>
              </div>
            </div>

            {/* spec strip */}
            <div className="relative z-10 border-t border-white/10 bg-[rgba(11,13,16,0.65)] px-5 py-3.5 backdrop-blur-md sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                {SPEC_CHIPS.map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] sm:text-xs text-bright/85"
                  >
                    <chip.icon className="h-3.5 w-3.5 text-teal shrink-0" strokeWidth={1.8} />
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* android companion */}
        <Reveal delay={110} className="lg:col-span-2">
          <article className="tile edge-glow noise relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-raised">
            <div className="relative h-[130px] sm:h-[160px] w-full overflow-hidden">
              <img
                src="/images/android.jpg"
                alt="MediaFlow Android application"
                loading="lazy"
                decoding="async"
                width={1536}
                height={1024}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,13,16,0.3)_0%,rgba(26,32,39,0.95)_100%)]" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 backdrop-blur-md">
                <Smartphone className="h-3 w-3 text-teal" strokeWidth={2} />
                <span className="font-mono text-[10px] tracking-wider text-bright uppercase">Android APK</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-bright">
                MediaFlow for Android (APK)
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mute">
                Download 4K 60FPS locally using your phone's hardware with 1-Tap Share Sheet support.
              </p>

              <ul className="my-4 space-y-2">
                {[
                  "On-device hardware decoding",
                  "1-Tap Share Sheet capture",
                  "Offline background queue",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-medium text-bright/85">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={FLAGSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-xs sm:text-sm font-semibold text-bright transition-all duration-200 hover:border-signal/50 hover:bg-signal/15"
              >
                <span className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-signal shrink-0" strokeWidth={2} />
                  <span>Download Android App</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-mute transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-signal" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>

      {/* ---------------- deep link tool grid ---------------- */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool, i) => (
          <Reveal key={tool.href} delay={i * 70}>
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tile group flex h-full flex-col rounded-xl border border-white/10 bg-[#12161B] p-5 sm:p-6 hover:bg-[#161B22]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] transition-colors duration-300 group-hover:border-signal/40 group-hover:bg-signal/12">
                  <tool.icon className="h-4 w-4 text-signal" strokeWidth={2} />
                </span>
                <span className="font-mono text-xs text-mute/60">{tool.n}</span>
              </div>

              <h3 className="mt-4 font-display text-base sm:text-lg font-bold leading-snug text-bright">
                {tool.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mute">{tool.desc}</p>

              <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-3.5">
                <span className="truncate font-mono text-xs text-signal lowercase">
                  /{tool.tag}
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-signal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.2}
                />
              </div>
            </a>
          </Reveal>
        ))}

        {/* closing slot */}
        <Reveal delay={360}>
          <div className="tile flex h-full flex-col justify-between rounded-xl border border-dashed border-white/15 bg-[linear-gradient(150deg,rgba(255,107,44,0.09),rgba(53,224,208,0.05))] p-5 sm:p-6">
            <div>
              <div className="flex items-center gap-2.5">
                <StatusPill compact />
              </div>
              <h3 className="mt-4 font-display text-base sm:text-lg font-bold leading-snug text-bright">
                One engine. Every format.
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mute">
                New extractors, audio presets and batch pipelines ship continuously across the MediaFlow network.
              </p>
            </div>
            <a
              href={FLAGSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-4 py-2.5 font-display text-xs sm:text-sm font-bold text-signal transition-all duration-200 hover:bg-signal/20"
            >
              <span>Explore full suite</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.3} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
