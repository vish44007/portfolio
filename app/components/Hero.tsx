export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-24">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status Pill */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-[#06153d]/70 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-200 shadow-lg shadow-black/25 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-400"></span>
          </span>
          <span>Computer Science &amp; Engineering &bull; BIT</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
            Vishwashree M
          </span>
        </h1>

        {/* One-Line Intro */}
        <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl font-bold text-sky-100 drop-shadow-sm">
          CS student who loves building web apps
        </p>

        {/* Supporting description */}
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-200 leading-relaxed font-normal">
          Crafting responsive, clean, and intuitive web applications with modern
          frontend frameworks and scalable software design.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span>View my work</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md shadow-md transition-all duration-200 hover:border-white hover:bg-white/25 hover:scale-105 active:scale-95"
          >
            <span>Contact me</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Tech Highlights */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
          <span className="flex items-center gap-2 rounded-lg bg-black/25 px-3.5 py-1.5 border border-white/15 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sky-400"></span>
            React &amp; Next.js
          </span>
          <span className="flex items-center gap-2 rounded-lg bg-black/25 px-3.5 py-1.5 border border-white/15 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            TypeScript
          </span>
          <span className="flex items-center gap-2 rounded-lg bg-black/25 px-3.5 py-1.5 border border-white/15 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-sky-300"></span>
            Tailwind CSS
          </span>
          <span className="flex items-center gap-2 rounded-lg bg-black/25 px-3.5 py-1.5 border border-white/15 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Python
          </span>
        </div>
      </div>
    </section>
  );
}
