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
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            About Me
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Background &amp; Skills
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Bio Card */}
          <div className="lg:col-span-7 rounded-2xl border border-sky-950/80 bg-[#0b1636]/70 p-7 sm:p-9 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-800/80">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </span>
              Bangalore Institute of Technology (BIT)
            </h3>
            <p className="mt-2 text-sm font-medium text-sky-300">
              Computer Science and Engineering (CSE)
            </p>

            <div className="mt-5 space-y-4 text-base text-slate-300 leading-relaxed">
              <p>
                I am a Computer Science &amp; Engineering student at Bangalore
                Institute of Technology (BIT). Passionate about full-stack web
                development, I love designing clean interfaces and architecting
                responsive web applications.
              </p>
              <p>
                My technical interests include modern React architectures, Next.js
                App Router, component design with Tailwind CSS, and algorithmic
                problem solving in Python.
              </p>
            </div>

            {/* Highlights row */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-sky-950/80 pt-6 text-sm">
              <div>
                <span className="block text-xs uppercase text-slate-400 font-medium">
                  College
                </span>
                <span className="font-semibold text-white">BIT Bangalore</span>
              </div>
              <div>
                <span className="block text-xs uppercase text-slate-400 font-medium">
                  Discipline
                </span>
                <span className="font-semibold text-sky-300">CSE</span>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div className="lg:col-span-5 rounded-2xl border border-sky-950/80 bg-[#0b1636]/70 p-7 sm:p-9 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-800/80">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                <svg
                  className="h-4 w-4"
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
              Technical Skills
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Technologies and developer tools I work with:
            </p>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-sky-900/60 bg-[#0e1d45]/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-[#13275c] hover:text-sky-200 hover:shadow-md hover:shadow-sky-500/10 cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
