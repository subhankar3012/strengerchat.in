import { Hero, Header } from "./components/Hero";
import MediaFlow from "./components/MediaFlow";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";

/** Fixed "rack rail" — the offset measure that keeps the page off dead-center. */
function RackRail() {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-30 hidden h-screen w-12 flex-col items-center justify-between border-r border-white/[0.07] bg-[rgba(11,13,16,0.55)] py-7 backdrop-blur-[2px] xl:flex"
    >
      <span className="h-8 w-px bg-[linear-gradient(180deg,rgba(255,107,44,0.7),transparent)]" />

      <div className="flex flex-1 flex-col items-center justify-center gap-[9px]">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="block h-px bg-white/12"
            style={{ width: i % 4 === 0 ? "17px" : "8px", opacity: i % 4 === 0 ? 0.62 : 0.32 }}
          />
        ))}
      </div>

      <span className="mono-label whitespace-nowrap text-mute/45 [writing-mode:vertical-rl]">
        StrengerChat · Web Utilities Ecosystem · Est. 2026
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-bright antialiased">
      <a
        href="#mediaflow"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-signal focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-[#120A05]"
      >
        Skip to content
      </a>

      <RackRail />
      <Header />

      <main className="relative xl:pl-12">
        <Hero />
        <MediaFlow />
        <Ecosystem />
        <Footer />
      </main>
    </div>
  );
}
