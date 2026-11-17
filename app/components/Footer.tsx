export default function Footer() {
  return (
    <footer className="border-t border-sky-950/80 bg-[#050a1a] py-10 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Brand & Requested Copyright */}
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-sky-400 text-xs font-bold text-white shadow-sm">
              VM
            </span>
            <span className="font-semibold text-white">Vishwashree M</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            © 2026 Vishwashree
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
          <a href="#about" className="hover:text-sky-300 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-sky-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">
            Contact
          </a>
          <a
            href="https://github.com/vishwashreem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vishwashreem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to top button */}
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 rounded-lg border border-sky-950 bg-[#0e1d45]/60 px-3 py-1.5 text-xs text-slate-300 hover:border-sky-700 hover:text-white transition-all"
        >
          <span>Back to top</span>
          <svg
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
