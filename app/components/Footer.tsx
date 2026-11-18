export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#020614]/80 py-10 px-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Brand & Requested Copyright */}
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-sky-400 text-xs font-bold text-white shadow-sm">
              VM
            </span>
            <span className="font-bold text-white">Vishwashree M</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-semibold">
            © 2026 Vishwashree
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-bold text-slate-300">
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
          className="group inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-slate-200 shadow-xs hover:border-white hover:text-white hover:bg-white/20 transition-all active:scale-95"
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
