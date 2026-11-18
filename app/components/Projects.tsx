import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "DevConnect",
      description:
        "A modern developer platform enabling coders to showcase projects, share tech insights, and collaborate with peers.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/vishwashreem/devconnect",
    },
    {
      title: "TaskFlow Kanban",
      description:
        "A streamlined workflow organizer featuring interactive drag-and-drop task boards, priority filtering, and state persistence.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/vishwashreem/taskflow",
    },
    {
      title: "Algoverse Visualizer",
      description:
        "An educational web tool illustrating sorting, pathfinding, and tree traversal algorithms with step-by-step playback controls.",
      tags: ["JavaScript", "React", "Tailwind CSS", "Python"],
      githubUrl: "https://github.com/vishwashreem/algoverse",
    },
  ];

  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
            Featured Work
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-400 to-sky-300"></div>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-300">
            A showcase of web applications and software tools built with modern
            frontend and backend architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
