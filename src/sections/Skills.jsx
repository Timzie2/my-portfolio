const skillGroups = [
  {
    number: "01",
    title: "Development",
    description:
      "Technologies I use to build interfaces, applications, and backend systems.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend & Data",
    description:
      "Tools I use for APIs, databases, authentication, version control, and application data.",
    skills: [
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    number: "03",
    title: "AI & Security",
    description:
      "Areas I'm exploring through projects, training, and hands-on experimentation.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Speech-to-Text",
      "Cybersecurity",
      "Prompt Engineering",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Tools that support my development workflow, prototyping, and everyday productivity.",
    skills: [
      "VS Code",
      "Streamlit",
      "Microsoft Office",
      "Canva",
    ],
  },
]

function CategoryIcon({ number }) {
  if (number === "01") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 9 3-3 3 3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 15 3 3 3-3"
        />
        <path
          strokeLinecap="round"
          d="M5 12h14"
        />
      </svg>
    )
  }

  if (number === "02") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="9" ry="4" />
        <ellipse
          cx="12"
          cy="12"
          rx="4"
          ry="9"
          transform="rotate(45 12 12)"
        />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  }

  if (number === "03") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
        />
        <path
          strokeLinecap="round"
          d="M8 12h8M12 8v8"
        />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
      />
      <path
        strokeLinecap="round"
        d="M8 21h8M12 18v3"
      />
    </svg>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t px-6 py-24 sm:py-32"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-48 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--accent-glow)",
            opacity: 0.35,
          }}
        />

        <div
          className="absolute -right-40 bottom-0 h-80 w-80 rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--accent-glow)",
            opacity: 0.18,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: "var(--accent)" }}
              />

              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Skills
              </p>
            </div>

            <h2
              className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              Tools I use
              <br />
              <span style={{ color: "var(--accent)" }}>
                to build.
              </span>
            </h2>
          </div>

          <p
            className="max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            A growing toolkit shaped by projects, experimentation, and
            continuous learning across software development, artificial
            intelligence, cybersecurity, and productivity.
          </p>
        </div>

        {/* =================================================
            SKILL GRID
        ================================================= */}

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative overflow-hidden rounded-3xl border p-6 transition duration-500 hover:-translate-y-1 sm:p-8"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span
                    className="text-xs font-bold tracking-[0.25em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {group.number}
                  </span>

                  <h3
                    className="mt-3 text-2xl font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {group.title}
                  </h3>
                </div>

                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition duration-300 group-hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-muted)",
                  }}
                >
                  <CategoryIcon number={group.number} />
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-5 max-w-lg text-sm leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
                {group.description}
              </p>

              {/* Divider */}
              <div
                className="my-7 h-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border px-3 py-2 text-xs font-medium transition duration-200 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.borderColor =
                        "var(--accent)"
                      event.currentTarget.style.color =
                        "var(--accent)"
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.borderColor =
                        "var(--border)"
                      event.currentTarget.style.color =
                        "var(--text-secondary)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </article>
          ))}
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div
          className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <p
              className="text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Learning new technologies through real projects.
            </p>
          </div>

          <span
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: "var(--text-muted)" }}
          >
            Always learning
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills