import { ArrowUpRight, MessagesSquare, Timer, Link2, ImageDown, ScanSearch, Radio, Workflow } from "lucide-react";
import { Reveal, SectionHeader } from "./ui";

const CATEGORIES = [
  {
    index: "02",
    kicker: "Ecosystem Expansion",
    title: "Privacy & Communication",
    blurb:
      "The next pillar of StrengerChat: peer-first messaging infrastructure where the message outlives nothing and the metadata stays yours.",
    status: "In Development • Q3 2026",
    icon: Radio,
    span: "lg:col-span-7",
    tint: "from-[rgba(255,107,44,0.11)] to-[rgba(255,107,44,0.02)]",
    items: [
      {
        icon: MessagesSquare,
        name: "Anonymous Peer Messaging",
        copy: "Device-to-device encrypted conversations with no phone number, email or identity graph attached.",
      },
      {
        icon: Timer,
        name: "Ephemeral Chat Rooms",
        copy: "Time-boxed rooms that dissolve completely — messages, attachments and keys expire on schedule.",
      },
    ],
  },
  {
    index: "03",
    kicker: "Ecosystem Expansion",
    title: "Developer & Web Tools",
    blurb:
      "A compact toolbox of utilities we build for ourselves first — precise, scriptable and free of telemetry.",
    status: "In Development • Q4 2026",
    icon: Workflow,
    span: "lg:col-span-5",
    tint: "from-[rgba(53,224,208,0.10)] to-[rgba(53,224,208,0.015)]",
    items: [
      {
        icon: Link2,
        name: "Link Shortener",
        copy: "Clean, trackable-by-you short links with expiring redirects and no injected interstitial ads.",
      },
      {
        icon: ImageDown,
        name: "Image Compressor",
        copy: "Lossless and perceptual compression for WebP, AVIF and JPEG with side-by-side preview.",
      },
      {
        icon: ScanSearch,
        name: "Metadata Inspector",
        copy: "Read EXIF, IPTC, XMP and file headers locally in the browser — nothing ever gets uploaded.",
      },
    ],
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative mx-auto w-full max-w-[1220px] px-5 pt-28 sm:px-8 lg:pt-36">
      <SectionHeader
        index="02 / 03"
        kicker="Beyond MediaFlow"
        accent="#35E0D0"
        title={
          <>
            A real ecosystem, <span className="gradient-text">built one utility at a time</span>
          </>
        }
        description="MediaFlow is the flagship — not the whole story. Two additional product categories are already in active development across the StrengerChat network."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
        {CATEGORIES.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 110} className={cat.span}>
            <article
              className={`tile noise relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#12161B] p-8 sm:p-10`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.tint}`} />
              <div className="absolute inset-0 tech-grid-fine opacity-25" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.055]">
                      <cat.icon className="h-[19px] w-[19px] text-teal" strokeWidth={1.8} />
                    </span>
                    <div>
                      <div className="mono-label text-mute/70">{cat.index}</div>
                      <div className="mt-1 text-[11px] font-medium tracking-[0.115em] text-mute uppercase">
                        {cat.kicker}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-teal/22 bg-teal/9 px-3.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                    <span className="font-mono text-[9.5px] tracking-[0.175em] text-teal uppercase">{cat.status}</span>
                  </span>
                </div>

                <h3 className="mt-8 font-display text-[clamp(1.52rem,3vw,2.02rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-bright">
                  {cat.title}
                </h3>
                <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.75] text-mute">{cat.blurb}</p>

                <ul className="mt-9">
                  {cat.items.map((item, i) => (
                    <li
                      key={item.name}
                      className={`group flex items-start gap-4 border-t border-white/9 py-6 ${
                        i === cat.items.length - 1 ? "border-b border-white/9" : ""
                      }`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/9 bg-white/[0.045] transition-colors duration-300 group-hover:border-signal/38 group-hover:bg-signal/11">
                        <item.icon className="h-[16px] w-[16px] text-signal-soft" strokeWidth={1.85} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <h4 className="font-display text-[15.5px] font-bold tracking-[-0.017em] text-bright">
                            {item.name}
                          </h4>
                          <span className="rounded-full border border-white/9 px-2.5 py-[3px] font-mono text-[8.5px] tracking-[0.19em] text-mute/80 uppercase">
                            Planned
                          </span>
                        </div>
                        <p className="mt-2 max-w-[48ch] text-[13px] leading-[1.72] text-mute">{item.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA band */}
      <Reveal delay={120}>
        <div className="tile relative mt-4 overflow-hidden rounded-[22px] border border-signal/22 bg-[linear-gradient(112deg,rgba(255,107,44,0.16)_0%,rgba(255,107,44,0.05)_42%,rgba(53,224,208,0.11)_100%)] px-8 py-11 sm:px-12">
          <div className="absolute inset-0 tech-grid opacity-40" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mono-label text-signal-soft">Ready when you are</div>
              <h3 className="mt-4 max-w-[22ch] font-display text-[clamp(1.58rem,3.3vw,2.28rem)] font-extrabold leading-[1.1] tracking-[-0.031em] text-bright">
                Start with MediaFlow. It&rsquo;s free, and it always will be.
              </h3>
              <p className="mt-4 max-w-[54ch] text-[14.5px] leading-[1.72] text-mute">
                No sign-up, no usage caps, no ads. Just the fastest route between a link and the file you wanted.
              </p>
            </div>

            <a
              href="https://download.strengerchat.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[linear-gradient(100deg,#FF6B2C_0%,#FF8348_52%,#35E0D0_100%)] px-8 py-4.5 font-display text-[15px] font-bold tracking-[-0.008em] text-[#120A05] shadow-[0_18px_46px_-16px_rgba(255,107,44,0.78)] transition-all duration-300 hover:brightness-[1.07] active:scale-[0.985]"
            >
              Launch MediaFlow Now
              <ArrowUpRight className="h-[19px] w-[19px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
