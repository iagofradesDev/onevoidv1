import { createFileRoute } from "@tanstack/react-router";
import { Film, Mail, Play } from "lucide-react";
import { XLogo } from "@/components/x-logo";
import profileImg from "@/assets/profile.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ØNEVOID - Video Editor" },
      {
        name: "description",
        content: "ØNEVOID Portfolio",
      },
      { property: "og:title", content: "ØNEVOID - Video Editor" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const VIDEOS = ["qVfWi2sQhgk", "SaP2DkSx85c", "Uw12rKQTq94"];
const SHORTS = ["3zfTjYFH-n4", "eQoLE_WvBd4", "rwcKsByEC3g", "_H0Ki58SmX8"];
const VERTICAL_SHORTS = ["wirb4z487SQ", "hEPiNKYWxgA"];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4">
        <nav className="glass flex items-center gap-4 rounded-full px-4 py-1.5 sm:gap-8 sm:px-8 sm:py-3">
          <a
            href="#videos"
            className="text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-[0.25em]"
          >
            VIDEOS
          </a>
          <a
            href="#shorts"
            className="text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-[0.25em]"
          >
            SHORTS
          </a>
          <a
            href="#about"
            className="text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-[0.25em]"
          >
            ABOUT ME
          </a>
          <a
            href="#contact"
            className="text-[10px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-[0.25em]"
          >
            CONTACT
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5">
        {/* HERO */}
        <section className="flex min-h-[85vh] flex-col items-center justify-center py-16 text-center">
          <div className="glass w-full max-w-2xl rounded-3xl px-8 py-16 sm:px-14">
            <img
              src={profileImg}
              alt="ØNEVOID profile"
              className="mx-auto mb-6 h-44 w-44 rounded-full object-cover"
            />
            <h1 className="text-4xl font-bold uppercase tracking-tight text-foreground sm:text-6xl">
              ØNEVOID
            </h1>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hi, I'm ØNEVOID!
            </p>
            <a
              href="#videos"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              <Film size={14} />
              VIDEOS
            </a>
            <a
              href="#shorts"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 text-xs tracking-[0.2em] text-secondary-foreground transition-opacity hover:opacity-85"
            >
              <Play size={14} />
              SHORTS
            </a>
              <div className="mt-10 flex justify-center">
                <a
                  href="https://x.com/OnevoidMP4"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  <XLogo size={16} />
                  @OnevoidMP4
                </a>
              </div>
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="py-16 text-center">
          <h2 className="text-2xl tracking-[0.2em] text-foreground sm:text-3xl">
            VIDEOS
          </h2>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
            {VIDEOS.map((id) => (
              <div key={id} className="glass mx-auto w-full overflow-hidden rounded-2xl p-3">
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Video ${id}`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SHORTS */}
        <section id="shorts" className="pt-8 pb-16 text-center">
          <h2 className="text-2xl tracking-[0.2em] text-foreground sm:text-3xl">
            SHORTS
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SHORTS.map((id) => (
              <div key={id} className="glass mx-auto w-[70%] overflow-hidden rounded-2xl p-3 sm:w-full">
                <div className="aspect-[9/16] w-full overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Short ${id}`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-14 grid max-w-lg gap-8 sm:grid-cols-2">
            {VERTICAL_SHORTS.map((id) => (
              <div key={id} className="glass mx-auto w-[70%] overflow-hidden rounded-2xl p-3 sm:w-full">
                <div className="aspect-[9/16] w-full overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Short ${id}`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="py-16 text-center">
          <h2 className="text-2xl tracking-[0.2em] text-foreground sm:text-3xl">ABOUT ME</h2>
          <div className="glass mx-auto mt-12 max-w-2xl rounded-3xl px-8 py-12 sm:px-14">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hey, I’m ØNEVOID. I’m 19 years old, and I’m a video editor for YouTubers. I’ve been editing videos since 2024.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-2xl tracking-[0.2em] text-foreground sm:text-3xl">CONTACT</h2>
          <div className="glass mx-auto mt-12 flex max-w-md flex-col items-center gap-6 rounded-3xl px-8 py-12">
              <a
                href="https://x.com/OnevoidMP4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <XLogo size={18} />
                @OnevoidMP4
              </a>
            <a
              href="mailto:almeidda.edit@gmail.com"
              className="inline-flex items-center gap-3 text-sm tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={18} />
              almeidda.edit@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-[11px] tracking-[0.2em] text-muted-foreground">
        © 2026 ØNEVOID — VIDEO EDITOR
      </footer>
    </div>
  );
}
