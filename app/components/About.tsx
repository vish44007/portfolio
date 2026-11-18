export default function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Node.js",
    "REST APIs",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
            About Me
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Background &amp; Skills
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-400 to-sky-300"></div>
        </div>

        {/* Two Separate 3D White Pop-Up Boxes */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-stretch">
          {/* 3D White Pop-Up Box 1: About Me */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_8px_18px_rgba(0,0,0,0.2)] border-t border-l border-white border-b-4 border-r-2 border-slate-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.55)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    About Me
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Bangalore Institute of Technology (BIT)
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  I am a Computer Science &amp; Engineering (CSE) student at
                  Bangalore Institute of Technology (BIT). Passionate about
                  full-stack web engineering, I love architecting responsive,
                  high-performance web applications.
                </p>
                <p className="font-semibold text-slate-900 bg-blue-50/80 p-3.5 rounded-xl border border-blue-100">
                  ✨ I like designing things in general — whether it&apos;s crafting thoughtful user interfaces, visual layouts, or finding elegant solutions to complex coding challenges.
                </p>
                <p>
                  My technical focus includes modern React architectures, Next.js
                  App Router, component styling with Tailwind CSS, and algorithmic
                  problem solving in Python.
                </p>
              </div>
            </div>

            {/* Quick Details Row */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-sm">
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                <span className="block text-xs uppercase text-slate-500 font-bold">
                  College
                </span>
                <span className="font-bold text-slate-900">BIT Bangalore</span>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                <span className="block text-xs uppercase text-slate-500 font-bold">
                  Discipline
                </span>
                <span className="font-bold text-blue-600">CSE</span>
              </div>
            </div>
          </div>

          {/* 3D White Pop-Up Box 2: Technical Skills */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_8px_18px_rgba(0,0,0,0.2)] border-t border-l border-white border-b-4 border-r-2 border-slate-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.55)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Technical Skills
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Technologies &amp; Tools
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600 leading-relaxed font-normal">
                Core technologies and developer tools I actively use to build web
                applications and software solutions:
              </p>

              {/* Skills Chips */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md cursor-default"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Status indicator */}
            <div className="mt-8 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-500 flex items-center justify-between">
              <span>Continuously learning &amp; exploring</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Active coder
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
