export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-[#05112e]/75 backdrop-blur-md p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/80 hover:bg-[#091b45]/90 hover:shadow-2xl hover:shadow-sky-500/20">
      <div>
        {/* Top Folder Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300 group-hover:bg-sky-400 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-200">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-sky-400/20 bg-sky-950/40 px-2.5 py-1 text-xs font-semibold text-sky-200 shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <div className="mt-8 border-t border-white/10 pt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition-all duration-200 hover:text-white hover:gap-2.5"
        >
          {/* GitHub SVG Icon */}
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          <span>View on GitHub</span>
          <svg
            className="h-3.5 w-3.5"
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
    </article>
  );
}
