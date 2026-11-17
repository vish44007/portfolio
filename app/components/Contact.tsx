"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "vishwa4484@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
            Let&apos;s Connect
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"></div>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
            Have a question, opportunity, or want to collaborate on a project?
            Drop me a line below!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
          {/* Left: Contact Info & Socials */}
          <div className="md:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="rounded-2xl border border-sky-950/80 bg-[#0b1636]/70 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-800/80">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                Direct Email
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Click to copy or reach me directly:
              </p>

              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={`mailto:${emailAddress}`}
                  className="truncate text-sm font-semibold text-sky-300 hover:text-white transition-colors"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-sky-900/60 bg-[#0e1d45]/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-sky-400 hover:bg-[#13275c] hover:text-sky-200 active:scale-95"
                >
                  {copiedEmail ? (
                    <>
                      <svg
                        className="h-3.5 w-3.5 text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-emerald-400">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
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
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Socials Card */}
            <div className="rounded-2xl border border-sky-950/80 bg-[#0b1636]/70 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-800/80">
              <h3 className="text-base font-bold text-white">Social Profiles</h3>
              <p className="mt-1 text-xs text-slate-400">
                Explore my repositories and professional profile:
              </p>

              <div className="mt-4 space-y-2.5">
                {/* GitHub */}
                <a
                  href="https://github.com/vishwashreem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-sky-900/60 bg-[#0e1d45]/60 p-3 transition-all duration-200 hover:border-sky-400 hover:bg-[#13275c]/80"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#070f26] text-slate-300 group-hover:text-white">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-white group-hover:text-sky-300">
                        GitHub
                      </span>
                      <span className="block text-xs text-slate-400">
                        @vishwashreem
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-sky-300 transition-colors">
                    ↗
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/vishwashreem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-sky-900/60 bg-[#0e1d45]/60 p-3 transition-all duration-200 hover:border-sky-400 hover:bg-[#13275c]/80"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#070f26] text-sky-400 group-hover:text-white">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-white group-hover:text-sky-300">
                        LinkedIn
                      </span>
                      <span className="block text-xs text-slate-400">
                        Vishwashree M
                      </span>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-sky-300 transition-colors">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-sky-950/80 bg-[#0b1636]/70 p-7 sm:p-8 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="mt-1 text-sm text-slate-400">
                Leave your information and message below:
              </p>

              {isSubmitted && (
                <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/50 p-4 text-emerald-300 text-sm flex items-center gap-3">
                  <svg
                    className="h-5 w-5 text-emerald-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Thank you! Your message has been sent successfully. I will get back to you soon!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full rounded-xl border border-sky-950 bg-[#070f26]/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl border border-sky-950 bg-[#070f26]/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full rounded-xl border border-sky-950 bg-[#070f26]/80 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-sky-500/40 active:scale-95"
                >
                  <span>Send Message</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
