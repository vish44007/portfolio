export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-24">
      {/* Background radial gradient glow for depth */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-gradient-to-tr from-blue-700/25 via-sky-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status Pill */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-[#0e1d45]/70 px-4 py-2 text-xs sm:text-sm font-medium text-sky-300 shadow-lg shadow-sky-950/50 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
          </span>
          <span>Computer Science &amp; Engineering &bull; BIT</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
            Vishwashree M
          </span>
        </h1>

        {/* One-Line Intro */}
        <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl font-medium text-sky-100/90">
          CS student who loves building web apps
        </p>

        {/* Supporting description */}
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 leading-relaxed">
          Crafting responsive, clean, and intuitive web applications with modern
          frontend frameworks and scalable software design.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-500/40 active:scale-95"
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
            className="group inline-flex items-center gap-2 rounded-xl border border-sky-700/60 bg-[#0e1d45]/60 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-[#13275c]/80 hover:text-sky-200 hover:shadow-lg hover:shadow-sky-500/15 active:scale-95"
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
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
            React &amp; Next.js
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            TypeScript
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
            Tailwind CSS
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            Python
          </span>
        </div>
      </div>
    </section>
  );
}
