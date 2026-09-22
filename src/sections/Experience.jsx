const timeline = [
  {
    year: "2025",
    type: "Education",
    title: "Bachelor of Technology in Computer Science",
    organization: "Bells University of Technology",
    description:
      "Completed a Bachelor of Technology degree in Computer Science, graduating with Second Class Honours (Lower Division).",
  },
  {
    year: "2025",
    type: "Project",
    title: "AI Note Generator",
    organization: "Final Year Project",
    description:
      "Developed an AI-powered application that converts educational speech into text and generates structured notes, combining speech recognition with natural language processing.",
  },
  {
    year: "2026",
    type: "Development",
    title: "Web Application Projects",
    organization: "Personal & Collaborative Projects",
    description:
      "Built and contributed to practical web applications including WorkConnectr, a SIWES Management System, and a cloud storage portal using modern frontend, backend, and database technologies.",
  },
  {
    year: "2026",
    type: "Training",
    title: "Python Beginners",
    organization: "NITDA / NCAIR",
    description:
      "Completed Python Beginners training focused on developing practical Python programming skills and strengthening my foundation for software development and AI-related work.",
  },
]

function EducationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 12v4.5c2.8 2.2 7.2 2.2 10 0V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M21 10v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="4"
        width="17"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 8h8M8 12h5M8 16h7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TrainingIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3 4 7l8 4 8-4-8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.5V15c2.8 2.2 7.2 2.2 10 0V9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20 8v6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TimelineIcon({ type }) {
  if (type === "Education") {
    return <EducationIcon />
  }

  if (type === "Project") {
    return <ProjectIcon />
  }

  if (type === "Training") {
    return <TrainingIcon />
  }

  return <CodeIcon />
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 sm:py-28"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-48 top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              Experience & journey
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Learning, building,
            <span style={{ color: "var(--accent)" }}> progressing.</span>
          </h2>

          <p
            className="mt-5 max-w-xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            A timeline of the academic, project, development, and
            training experiences that have shaped my technical journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop vertical line */}
          <div
            className="absolute bottom-8 left-6 top-8 hidden w-px md:block"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className="group relative md:pl-20"
              >
                {/* Timeline marker */}
                <div
                  className="absolute left-0 top-1 hidden h-12 w-12 items-center justify-center rounded-2xl border md:flex"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--accent)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <TimelineIcon type={item.type} />
                </div>

                {/* Mobile marker */}
                <div className="mb-4 flex items-center gap-3 md:hidden">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    <TimelineIcon type={item.type} />
                  </div>

                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 group-hover:-translate-y-1 sm:p-7"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--border-strong)"
                    e.currentTarget.style.boxShadow =
                      "var(--shadow-md)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--border)"
                    e.currentTarget.style.boxShadow =
                      "var(--shadow-sm)"
                  }}
                >
                  {/* Accent edge */}
                  <div
                    className="absolute bottom-0 left-0 top-0 w-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: "var(--accent)" }}
                  />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="mb-3 hidden items-center gap-3 md:flex">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.18em]"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.type}
                        </span>

                        <span
                          className="h-1 w-1 rounded-full"
                          style={{
                            backgroundColor: "var(--border-strong)",
                          }}
                        />

                        <span
                          className="text-xs font-medium"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.organization}
                        </span>
                      </div>

                      <h3
                        className="text-xl font-semibold tracking-tight sm:text-2xl"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-6 sm:text-[15px]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Year */}
                    <div
                      className="hidden shrink-0 rounded-full border px-4 py-2 text-sm font-semibold sm:block"
                      style={{
                        backgroundColor: "var(--accent-soft)",
                        borderColor: "transparent",
                        color: "var(--accent)",
                      }}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Organization on mobile */}
                  <div className="mt-5 flex items-center gap-2 md:hidden">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.type}
                    </span>

                    <span
                      className="h-1 w-1 rounded-full"
                      style={{
                        backgroundColor: "var(--border-strong)",
                      }}
                    />

                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.organization}
                    </span>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < timeline.length - 1 && (
                  <div
                    className="absolute -bottom-6 left-[13px] hidden md:block"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    <ArrowIcon />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="mt-14 rounded-3xl border p-6 sm:p-7"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              <CodeIcon />
            </div>

            <div>
              <p
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                The journey continues.
              </p>

              <p
                className="mt-1 text-sm leading-6"
                style={{ color: "var(--text-muted)" }}
              >
                I'm continuing to build practical projects, strengthen
                my technical skills, and explore new areas of software
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience