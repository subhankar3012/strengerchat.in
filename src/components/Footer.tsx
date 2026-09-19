import { ArrowUpRight, Lock, Mail, Globe, ShieldCheck } from "lucide-react";
import { Reveal, BrandMark } from "./ui";

const TOOL_LINKS = [
  { label: "MediaFlow Web Suite", href: "https://download.strengerchat.in" },
  { label: "YouTube Video Downloader", href: "https://download.strengerchat.in/youtube-video-downloader" },
  { label: "YouTube to MP3 Converter", href: "https://download.strengerchat.in/youtube-to-mp3" },
  { label: "YouTube to MP4 Downloader", href: "https://download.strengerchat.in/youtube-to-mp4" },
  { label: "Instagram Video Downloader", href: "https://download.strengerchat.in/instagram-downloader" },
  { label: "Instagram Reels Downloader", href: "https://download.strengerchat.in/instagram-reels-downloader" },
];

const ECOSYSTEM_LINKS = [
  { label: "MediaFlow for Android (APK)", href: "https://download.strengerchat.in" },
  { label: "Privacy & Communication", href: "#ecosystem" },
  { label: "Developer & Web Tools", href: "#ecosystem" },
  { label: "Engineering Standards", href: "#standards" },
  { label: "Why StrengerChat", href: "#top" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "https://download.strengerchat.in/privacy-policy" },
  { label: "Terms of Service", href: "https://download.strengerchat.in/terms" },
  { label: "FAQ & Guide", href: "https://download.strengerchat.in/faq" },
  { label: "About MediaFlow", href: "https://download.strengerchat.in/about" },
  { label: "Contact Support", href: "https://download.strengerchat.in/contact" },
];

function LinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mono-label text-mute/70">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="tinted-underline inline-flex items-baseline gap-1.5 text-[13px] leading-[1.55] text-mute transition-colors duration-200 hover:text-bright"
            >
              {link.label}
              {link.href.startsWith("http") && (
                <ArrowUpRight className="h-[11px] w-[11px] translate-y-[1px] text-teal/70" strokeWidth={2.3} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="relative mt-28 border-t border-white/8 pt-20 pb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,107,44,0.55),rgba(53,224,208,0.5),transparent)]" />
      <div className="absolute inset-0 tech-grid-fine opacity-[0.4]" />

      <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <BrandMark className="h-11 w-11" id="footer" />
              <div>
                <div className="font-display text-[19px] font-extrabold tracking-[-0.024em] text-bright">
                  Strenger<span className="text-mute">Chat</span>
                </div>
                <div className="mono-label mt-1 text-mute/70">strengerchat.in</div>
              </div>
            </div>

            <p className="mt-6 max-w-[42ch] text-[13.5px] leading-[1.78] text-mute">
              The official portal for the StrengerChat web utilities ecosystem — a privacy-first network of free,
              high-speed digital media and developer tools, anchored by the flagship{" "}
              <a
                href="https://download.strengerchat.in"
                target="_blank"
                rel="noopener noreferrer"
                className="tinted-underline font-semibold text-bright"
              >
                MediaFlow
              </a>{" "}
              extraction &amp; converter engine.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href="https://download.strengerchat.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.125em] text-teal"
              >
                <Globe className="h-3.5 w-3.5" strokeWidth={1.9} />
                download.strengerchat.in
                <ArrowUpRight className="h-[11px] w-[11px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </a>
              <a
                href="mailto:hello@strengerchat.in"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.125em] text-mute transition-colors duration-200 hover:text-bright"
              >
                <Mail className="h-3.5 w-3.5" strokeWidth={1.9} />
                hello@strengerchat.in
              </a>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-3">
            <LinkList title="MediaFlow Tools" links={TOOL_LINKS} />
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <LinkList title="Ecosystem" links={ECOSYSTEM_LINKS} />
          </Reveal>

          <Reveal delay={210} className="lg:col-span-3">
            <LinkList title="Legal & Support" links={LEGAL_LINKS} />

            <div className="mt-8 rounded-[13px] border border-white/9 bg-white/[0.038] p-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="mt-[1px] h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={1.9} />
                <p className="text-[11px] leading-[1.72] text-mute">
                  <span className="font-semibold text-bright/85">Privacy notice:</span> StrengerChat does not sell
                  personal data, does not run third-party advertising trackers, and does not require an account to
                  use any tool in the ecosystem.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-white/8 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10.5px] leading-[1.9] tracking-[0.105em] text-mute/72 uppercase">
              © {new Date().getFullYear()} StrengerChat. All rights reserved. Built for speed, privacy &amp; the open web.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.155em] text-mute/70 uppercase">
                <Lock className="h-3 w-3 text-teal/80" strokeWidth={2} />
                TLS Secured
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.155em] text-mute/70 uppercase">
                <span className="led h-1.5 w-1.5 rounded-full bg-teal" />
                All systems operational
              </span>
              <a
                href="https://download.strengerchat.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.155em] text-signal uppercase transition-opacity duration-200 hover:opacity-80"
              >
                MediaFlow ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
