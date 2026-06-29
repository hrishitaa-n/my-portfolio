import Image from "next/image";
import Navbar from "./components/navbar";
import RevealSection from "./components/reveal-section";
import ScrollProgress from "./components/scroll-progress";

const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    style: {
      container: "bg-[#FFFFFF] border border-[#E7DED3]",
      title: "text-[#1F1B18]",
      chip: "bg-[#F4F0EA] text-[#7C5C3B] border border-[#E7DED3]",
    },
    items: ["Python", "Java", "SQL"],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    style: {
      container: "bg-[#FFFFFF] border border-[#E7DED3]",
      title: "text-[#1F1B18]",
      chip: "bg-[#F4F0EA] text-[#7C5C3B] border border-[#E7DED3]",
    },
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
    style: {
      container: "bg-[#FFFFFF] border border-[#E7DED3]",
      title: "text-[#1F1B18]",
      chip: "bg-[#F4F0EA] text-[#7C5C3B] border border-[#E7DED3]",
    },
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
    style: {
      container: "bg-[#FFFFFF] border border-[#E7DED3]",
      title: "text-[#1F1B18]",
      chip: "bg-[#F4F0EA] text-[#7C5C3B] border border-[#E7DED3]",
    },
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
    style: {
      container: "bg-[#FFFFFF] border border-[#E7DED3]",
      title: "text-[#1F1B18]",
      chip: "bg-[#F4F0EA] text-[#7C5C3B] border border-[#E7DED3]",
    },
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
    emoji: "🤖",
    title: "AI Agent Monitoring System",
    accent: "#7C5C3B",
    badge: { label: "FEATURED", className: "rounded-full border border-[#E7DED3] bg-[#F4F0EA] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7C5C3B]" },
    buttonClassName:
      "w-full bg-[#7C5C3B] text-white hover:bg-[#5F452D] shadow-none",
    githubUrl: "https://github.com/hrishitaa-n/Agent-Monitoring_2.0",
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
    emoji: "💬",
    title: "AI-Powered Ticketing Chatbot",
    accent: "#7C5C3B",
    buttonClassName:
      "w-full bg-[#7C5C3B] text-white hover:bg-[#5F452D] shadow-none",
    githubUrl: "https://github.com/hrishitaa-n/Agent-Monitoring",
    tech: ["Python", "NLP", "FastAPI", "SQL", "REST APIs", "LLM"],
    description:
      "Engineered a conversational chatbot that automates ticket generation, classification, and routing using LLM-driven intent recognition — cutting manual triage with intelligent SLA escalation logic.",
  },
  {
    emoji: "🧠",
    title: "Sentiment Analysis with RoBERTa",
    accent: "#7C5C3B",
    buttonClassName:
      "w-full bg-[#7C5C3B] text-white hover:bg-[#5F452D] shadow-none",
    githubUrl: "https://github.com/hrishitaa-n/ai-therapist-roberta",
    tech: ["Python", "HuggingFace Transformers", "NLP", "Deep Learning"],
    description:
      "Fine-tuned a RoBERTa transformer for sentiment classification using transfer learning — outperforming baseline models through hyperparameter tuning and contextual tokenization.",
  },
  {
    emoji: "⚡",
    title: "EEG Motor Imagery Classifier",
    accent: "#7C5C3B",
    badge: { label: "IN PROGRESS", className: "rounded-full border border-[#E7DED3] bg-[#F4F0EA] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6F8A68]" },
    buttonClassName:
      "w-full bg-[#7C5C3B] text-white hover:bg-[#5F452D] shadow-none",
    githubUrl: "https://github.com/hrishitaa-n/BCI",
    tech: ["Python", "scikit-learn", "EEG Signal Processing", "ML"],
    description:
      "Designing ML models to classify brain motor imagery signals from EEG data — applying signal preprocessing, feature extraction, and cross-validation to optimise classification accuracy.",
  },
];

const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
  {
    title: "Tableau",
    issuer: "Tableau Learning Partner",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco",
    iconBg: "bg-[#EEE8D8] text-[#5C4A2A]",
    border: "border-l-[#8B6914]",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "hrishitaan@gmail.com",
    href: "mailto:hrishitaan@gmail.com",
    icon: "email",
    iconClassName: "bg-[#EEE8D8] text-[#5C4A2A]",
  },
  {
    label: "Phone",
    value: "+91-9822882238",
    href: "tel:+919822882238",
    icon: "phone",
    iconClassName: "bg-[#EEE8D8] text-[#5C4A2A]",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hrishitaa-n",
    href: "https://www.linkedin.com/in/hrishitaa-n/",
    icon: "linkedin",
    iconClassName: "bg-[#EEE8D8] text-[#5C4A2A]",
  },
  {
    label: "GitHub",
    value: "github.com/hrishitaa-n",
    href: "https://github.com/hrishitaa-n",
    icon: "github",
    iconClassName: "bg-[#EEE8D8] text-[#5C4A2A]",
  },
  {
    label: "HackerRank",
    value: "hackerrank.com/profile/hrishitaan",
    href: "https://www.hackerrank.com/profile/hrishitaan",
    icon: "spark",
    iconClassName: "bg-[#EEE8D8] text-[#5C4A2A]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="glass-section mx-auto mb-6 w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
          <section
            aria-label="Hero"
            className="flex min-h-[calc(100vh-80px)] flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left"
          >
            {/* Left column — 55% */}
            <div className="flex w-full flex-col lg:w-[55%]">
              <h1 className="hero-name-gradient text-5xl font-bold tracking-tight">
                Hrishitaa Nalawade
              </h1>
              <p className="mt-3 text-xl font-medium text-[#5E5752]">
                CS Engineer — AI, ML &amp; Backend Development
              </p>
              <p className="mt-4 max-w-md text-base text-[#5E5752]">
                I build intelligent systems — from LLM integrations to real-time
                backend APIs
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-[14px] bg-[#7C5C3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5F452D] sm:flex-1 lg:flex-none"
                >
                  View my work
                </a>
                <a
                  href="/resume.pdf"
                  download="Hrishitaa_Nalawade_Resume.pdf"
                  className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-white/45 bg-white/35 px-6 py-3 text-sm font-semibold text-[#5E5752] backdrop-blur-[20px] transition-colors hover:bg-white/45 sm:flex-1 lg:flex-none"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right column — 45% */}
            <div className="order-2 flex w-full items-center justify-center lg:order-none lg:w-[45%]">
              <Image
                src="/profile.jpeg"
                alt="Hrishitaa Nalawade"
                width={320}
                height={320}
                sizes="(max-width: 1024px) 72vw, 320px"
                style={{
                  width: "min(320px, 72vw)",
                  height: "min(320px, 72vw)",
                  borderRadius: "9999px",
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(124,92,59,0.2)",
                  border: "3px solid #EAE0CC",
                }}
              />
            </div>
          </section>
        </div>

        <RevealSection>
          <div className="glass-section mx-auto mb-6 w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
            <section id="about">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#7C5C3B]">
                About me
              </p>
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[#1F1B18]">
                Building at the intersection of intelligence, systems, and design.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5E5752]">
                I&apos;m a Computer Science Engineering student at MIT-ADT
                University, Pune, specialising in AI in Analytics with a minor in
                UI/UX. I work at the intersection of AI, backend systems, and data
                — building everything from transformer-based NLP models to
                scalable FastAPI backends. I&apos;m open to full-time, internship,
                and collaborative opportunities in AI/ML, backend, and data
                engineering.
              </p>
              <p className="mt-6 text-sm text-[#5E5752]">
                MIT-ADT University, Pune · 2023–2027 · CGPA 8.45
              </p>
            </section>
          </div>
        </RevealSection>

        <RevealSection className="mt-20">
          <section className="glass-section px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12" id="skills">
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5C3B]">
                  Skills
                </p>
                <h2 className="section-heading-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  A toolkit shaped around intelligent systems and backend depth.
                </h2>
                <div className="section-accent-line" />
                <p className="text-base leading-8 text-[#5E5752] sm:text-lg">
                  I work across the full delivery path, from model
                  experimentation and LLM workflows to API architecture, data
                  systems, and developer tooling.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div
                    key={group.id}
                    className="glass-card rounded-[24px] p-7"
                  >
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.24em] ${group.style.title}`}
                    >
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full border px-4 py-2 text-sm font-medium shadow-[0_6px_14px_rgba(139,105,20,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(139,105,20,0.18)] ${group.style.chip}`}
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

        <RevealSection className="mt-20">
          <section className="glass-section px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12" id="projects">
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5C3B]">
                  Projects
                </p>
                <h2 className="section-heading-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  Selected work across AI, NLP, and backend engineering.
                </h2>
                <div className="section-accent-line" />
                <p className="text-base leading-8 text-[#5E5752] sm:text-lg">
                  These projects reflect how I approach production systems,
                  applied ML, and intelligent automation with measurable impact.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <article key={project.title} className="glass-card group flex min-h-full flex-col justify-between rounded-[24px] p-6 sm:p-7 lg:p-8">
                    <div className="flex h-full min-h-full flex-1 flex-col">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/35 backdrop-blur-[14px] border border-white/45">
                          <p className="text-2xl leading-none">{project.emoji}</p>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-2xl font-bold tracking-tight text-[#1F1B18]">
                            {project.title}
                          </h3>
                        </div>
                        {project.badge ? (
                          <span
                            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${project.badge.className}`}
                          >
                            {project.badge.label}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-6 text-sm leading-7 text-[#5E5752] sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white/35 px-3 py-1.5 text-xs font-medium text-[#7C5C3B] backdrop-blur-[14px] border border-white/45 shadow-none"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 sm:pt-8">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex h-11 w-full items-center justify-center rounded-[14px] px-5 text-sm font-semibold transition-colors duration-200 ${project.buttonClassName}`}
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

        <RevealSection className="mt-20">
          <section
            className="glass-section px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
            id="experience"
          >
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5C3B]">
                  Experience
                </p>
                <h2 className="section-heading-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  Hands-on experience shipping AI features in real environments.
                </h2>
                <div className="section-accent-line" />
              </div>

              <article className="glass-card rounded-[24px] border-l-[3px] border-l-[#8B6914] p-5 sm:rounded-[28px] sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1F1B18]">
                    Acuta Digital Inc.
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#7C5C3B]">
                    AI Integration Intern | Jun 2025 – Jul 2025
                  </h3>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    "Built an AI chatbot inside Drupal CMS using RAG and LLM integration, enabling context-aware content retrieval",
                    "Designed the full backend API layer for LLM communication including prompt engineering and response optimisation",
                    "Deployed and tested chatbot features on Pantheon hosting at production scale",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-[#FFFFFF] px-4 py-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B6914]" />
                      <p className="text-sm leading-7 text-[#5E5752] sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-20">
          <section
            className="glass-section px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
            id="certifications"
          >
            <div className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5C3B]">
                  Certifications
                </p>
                <h2 className="section-heading-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  Credentials that reinforce my AI, data, and cloud foundation.
                </h2>
                <div className="section-accent-line" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {certifications.map((item) => (
                  <article
                    key={item.title}
                    className={`glass-card rounded-[24px] border-l-4 p-5 sm:p-6 ${item.border}`}
                  >
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconBg}`}
                    >
                      <CertificateIcon />
                    </span>
                    <p className="mt-4 text-base font-bold text-[#1F1B18]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#5E5752]">{item.issuer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        <RevealSection className="mt-20">
          <section
            className="glass-section px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12"
            id="contact"
          >
            <div className="glass-card mx-auto max-w-4xl rounded-[22px] p-6 text-center sm:rounded-[24px] sm:p-8 lg:p-10">
              <div className="inline-flex rounded-full bg-white/35 px-4 py-2 text-sm font-semibold text-[#7C5C3B] backdrop-blur-[14px] border border-white/45">
                Open to full-time, internship, and collaborative projects
              </div>
              <div className="mt-5 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5C3B]">
                  Contact
                </p>
                <h2 className="section-heading-gradient text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s build something thoughtful together.
                </h2>
                <div className="mx-auto section-accent-line" />
              </div>

              <div className="mt-10 grid gap-4 text-left sm:gap-5">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="glass-card flex min-h-[88px] items-start gap-3 rounded-[22px] px-5 py-4 sm:items-center sm:gap-4"
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${item.iconClassName}`}
                    >
                      <ContactIcon type={item.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#5E5752]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[#1F1B18] sm:text-base" style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
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

      <RevealSection className="px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-6">
        <footer className="mx-auto flex w-full max-w-6xl items-center justify-center border-t border-[rgba(139,105,20,0.15)] pt-6 text-center text-sm text-[#5E5752]">
          &copy; 2025 Hrishitaa Nalawade &middot; Built with Next.js
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
      <path d="M12 3.75 14.47 8.75 20 9.55l-4 3.9.94 5.5L12 16.45l-4.94 2.5.94-5.5-4-3.9 5.53-.8Z" />
    </svg>
  );
}








