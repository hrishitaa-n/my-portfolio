import Navbar from "./components/navbar";
import RevealSection from "./components/reveal-section";

const skillGroups = [
  {
    id: "skills",
    title: "Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    items: [
      "NLP",
      "Transformers",
      "HuggingFace",
      "scikit-learn",
      "Deep Learning",
      "Transfer Learning",
      "LLM Integration",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Authentication",
      "Caching",
      "System Design",
      "API Design",
    ],
  },
  {
    id: "data",
    title: "Data & Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Tableau",
      "Power BI",
      "Excel",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jupyter Notebook",
      "Drupal",
      "CMS",
      "Pantheon",
      "AWS (Cloud Foundations)",
    ],
  },
];

const projects = [
  {
    title: "AI Agent Monitoring System",
    badge: "FEATURED",
    badgeClassName: "bg-[var(--accent-soft)] text-[var(--accent)]",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Bearer Token Auth",
      "Caching",
    ],
    description:
      "Built a scalable backend to monitor distributed agents in real time — tracking health, uptime, and SLA breaches with automated alerting and secure token-based APIs.",
  },
  {
    title: "AI-Powered Ticketing Chatbot",
    tech: ["Python", "NLP", "FastAPI", "SQL", "REST APIs", "LLM"],
    description:
      "Engineered a conversational chatbot that automates ticket generation, classification, and routing using LLM-driven intent recognition — cutting manual triage with intelligent SLA escalation logic.",
  },
  {
    title: "Sentiment Analysis with RoBERTa",
    tech: ["Python", "HuggingFace Transformers", "NLP", "Deep Learning"],
    description:
      "Fine-tuned a RoBERTa transformer for sentiment classification using transfer learning — outperforming baseline models through hyperparameter tuning and contextual tokenization.",
  },
  {
    title: "EEG Motor Imagery Classifier",
    badge: "IN PROGRESS",
    badgeClassName: "bg-amber-500/14 text-amber-300",
    tech: ["Python", "scikit-learn", "EEG Signal Processing", "ML"],
    description:
      "Designing ML models to classify brain motor imagery signals from EEG data — applying signal preprocessing, feature extraction, and cross-validation to optimise classification accuracy.",
  },
];

const certifications = [
  "AWS Cloud Foundations",
  "Python for Data Science - IBM",
  "Google AI Essentials",
  "SQL Basic - HackerRank",
  "Tableau - Tableau Learning Partner",
  "Programming Essentials in Python - Cisco",
];

const contactLinks = [
  {
    label: "Email",
    value: "hrishitaan@gmail.com",
    href: "mailto:hrishitaan@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+91-9822882238",
    href: "tel:+919822882238",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hrishitaa-n",
    href: "https://www.linkedin.com/in/hrishitaa-n/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/hrishitaa-n",
    href: "https://github.com/hrishitaa-n",
    icon: "github",
  },
  {
    label: "HackerRank",
    value: "hackerrank.com/profile/hrishitaan",
    href: "https://www.hackerrank.com/profile/hrishitaan",
    icon: "hackerrank",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-24 sm:px-6">
        <RevealSection>
          <section
            aria-label="Hero"
            className="grid min-h-[calc(100vh-5.5rem)] scroll-mt-28 items-center gap-12 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-[var(--border-color)] bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                Pune, Maharashtra, India
              </div>

              <div className="space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Hrishitaa Nalawade
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                  CS Engineer &mdash; AI, ML &amp; Backend Development
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                  I build intelligent systems &mdash; from LLM integrations to
                  real-time backend APIs
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
                >
                  View my work
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-white/3 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/7"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(127,119,221,0.22),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,119,221,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)]" />
              <div className="relative space-y-10">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "LLM Integration",
                      "NLP Systems",
                      "FastAPI",
                      "ML Pipelines",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/76"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/28 p-5">
                    <p className="text-3xl font-semibold text-white">AI</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Building production-minded intelligence with data, models,
                      and backend orchestration.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/28 p-5">
                    <p className="text-3xl font-semibold text-white">APIs</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Designing real-time services that stay fast, reliable, and
                      clear to work with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section
            id="about"
            className="scroll-mt-28 rounded-[2rem] border border-[var(--border-color)] bg-white/[0.03] px-6 py-10 sm:px-8 md:px-10"
          >
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                About
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Building at the intersection of intelligence, systems, and
                design.
              </h2>
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                I&apos;m a Computer Science Engineering student at MIT-ADT
                University, Pune, specialising in AI in Analytics with a minor
                in UI/UX. I work at the intersection of AI, backend systems, and
                data &mdash; building everything from transformer-based NLP
                models to scalable FastAPI backends. I&apos;m open to full-time,
                internship, and collaborative opportunities in AI/ML, backend,
                and data engineering.
              </p>
              <p className="border-t border-white/10 pt-5 text-sm tracking-wide text-white/46">
                CGPA 8.45 &mdash; MIT Art, Design and Technology University,
                Pune | 2023&ndash;2027
              </p>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section
            id="skills"
            className="scroll-mt-28 rounded-[2rem] border border-[var(--border-color)] bg-white/[0.03] px-6 py-10 sm:px-8 md:px-10"
          >
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Skills
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A toolkit shaped around intelligent systems and backend depth.
                </h2>
                <p className="text-base leading-8 text-white/68 sm:text-lg">
                  I work across the full delivery path, from model
                  experimentation and LLM workflows to API architecture, data
                  systems, and developer tooling.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {skillGroups.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/54">
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section id="projects" className="scroll-mt-28">
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Projects
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Selected work across AI, NLP, and backend engineering.
                </h2>
                <p className="text-base leading-8 text-white/68 sm:text-lg">
                  These projects reflect how I approach production systems,
                  applied ML, and intelligent automation with measurable impact.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(127,119,221,0.55)] hover:shadow-[0_24px_80px_rgba(127,119,221,0.16)]"
                  >
                    <div className="flex min-h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="max-w-xs text-2xl font-semibold tracking-tight text-white">
                          {project.title}
                        </h3>
                        {project.badge ? (
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${project.badgeClassName}`}
                          >
                            {project.badge}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="mt-6 flex-1 text-sm leading-7 text-white/64 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-8">
                        <a
                          href="#"
                          className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border-color)] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section
            id="experience"
            className="scroll-mt-28 rounded-[2rem] border border-[var(--border-color)] bg-white/[0.03] px-6 py-10 sm:px-8 md:px-10"
          >
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Experience
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Hands-on experience shipping AI features in real environments.
                </h2>
              </div>

              <article className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                      Acuta Digital Inc.
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      AI Integration Intern
                    </h3>
                  </div>
                  <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/62">
                    Jun 2025 &ndash; Jul 2025
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    "Built an AI chatbot inside Drupal CMS using RAG and LLM integration, enabling context-aware content retrieval from structured website data",
                    "Designed the full backend API layer for LLM communication including prompt engineering and response optimisation",
                    "Deployed and tested chatbot features on Pantheon hosting at production scale",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="text-sm leading-7 text-white/70 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section
            id="certifications"
            className="scroll-mt-28 rounded-[2rem] border border-[var(--border-color)] bg-white/[0.03] px-6 py-10 sm:px-8 md:px-10"
          >
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Certifications
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Credentials that reinforce my AI, data, and cloud foundation.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {certifications.map((item) => (
                  <article
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-5 text-sm leading-7 text-white/78"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <CertificateIcon />
                    </span>
                    <p className="mt-4 text-base font-medium text-white">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-16">
          <section
            id="contact"
            className="scroll-mt-28 rounded-[2rem] border border-[var(--border-color)] bg-white/[0.03] px-6 py-10 sm:px-8 md:px-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                  Contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Open to full-time, internship, and collaborative projects
                </h2>
                <p className="text-base leading-8 text-white/68 sm:text-lg">
                  If you&apos;re building thoughtful AI products or backend
                  systems, I&apos;d love to connect.
                </p>
              </div>

              <div className="grid gap-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 transition-colors duration-200 hover:border-[rgba(127,119,221,0.45)] hover:bg-white/[0.04]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <ContactIcon type={item.icon} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-sm text-white/82 sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>
      </main>

      <RevealSection className="px-4 pb-10 sm:px-6">
        <footer className="mx-auto flex w-full max-w-6xl items-center justify-center border-t border-white/10 pt-6 text-center text-sm text-white/46">
          © 2025 Hrishitaa Nalawade · Built with Next.js
        </footer>
      </RevealSection>
    </div>
  );
}

function CertificateIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4.75h10A2.25 2.25 0 0 1 19.25 7v10A2.25 2.25 0 0 1 17 19.25H7A2.25 2.25 0 0 1 4.75 17V7A2.25 2.25 0 0 1 7 4.75Z" />
      <path d="m9 14 2 2 4-5" />
    </svg>
  );
}

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.75 7.25h14.5A1.75 1.75 0 0 1 21 9v6a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 15V9a1.75 1.75 0 0 1 1.75-1.75Z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.7 4.75h2.12c.35 0 .66.24.74.58l.63 2.69a1 1 0 0 1-.29.95l-1.3 1.28a13 13 0 0 0 5.15 5.15l1.28-1.3a1 1 0 0 1 .95-.29l2.69.63c.34.08.58.39.58.74v2.12A1.75 1.75 0 0 1 18.1 20C10.31 20 4 13.69 4 5.9A1.75 1.75 0 0 1 5.75 4.75Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.75A1.19 1.19 0 1 1 6.93 6.37a1.19 1.19 0 0 1 .01 2.38ZM5.88 9.94h2.11v8.18H5.88Zm3.44 0h2.02v1.12h.03c.28-.53.97-1.31 2-1.31 2.14 0 2.53 1.41 2.53 3.24v5.13h-2.11v-4.55c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.63H9.32Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.76-.24.76-.54v-2.08c-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.64-.72 2.04-1.1.1-.73.4-1.23.73-1.51-2.48-.29-5.08-1.24-5.08-5.53 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.58 10.58 0 0 1 5.61 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.23-5.1 5.52.41.35.77 1.04.77 2.1v3.12c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.75 5.75h10.5A1.75 1.75 0 0 1 19 7.5v9a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 16.5v-9a1.75 1.75 0 0 1 1.75-1.75Z" />
      <path d="M9.25 9.5a2 2 0 0 1 4 0c0 1.5-2 2-2 3.5" />
      <path d="M11.25 16h.01" />
    </svg>
  );
}
