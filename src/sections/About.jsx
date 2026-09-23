const focusAreas = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building practical applications with modern web technologies, backend systems, APIs, and databases.",
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Exploring AI-powered applications, automation, speech processing, and machine learning through hands-on projects.",
  },
  {
  number: "03",
  title: "Backend Engineering",
  description:
    "Building backend systems, APIs, databases, and server-side functionality for practical applications.",
},
]

function ArrowIcon() {
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
        d="M7 17L17 7M17 7H9M17 7v8"
      />
    </svg>
  )
}

function CodeIcon() {
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
        d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
      />
    </svg>
  )
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t px-6 py-24 sm:py-32"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background detail */}
      <div
        className="pointer-events-none absolute -right-48 top-16 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--accent-glow)",
          opacity: 0.35,
        }}
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--accent-glow)",
          opacity: 0.18,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* =================================================
            SECTION INTRO
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
                About me
              </p>
            </div>

            <h2
              className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              Curious about technology.
              <br />
              <span style={{ color: "var(--accent)" }}>
                Focused on building.
              </span>
            </h2>
          </div>

          <p
            className="max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            I enjoy understanding how technology works and turning that
            knowledge into practical software that solves real problems.
          </p>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Story */}
          <div>
            <div
              className="relative border-l-2 pl-6 sm:pl-8"
              style={{ borderColor: "var(--accent)" }}
            >
              {/* Quote mark */}
              <span
                className="absolute -left-[9px] -top-5 text-5xl font-bold leading-none"
                style={{
                  color: "var(--accent)",
                  opacity: 0.15,
                }}
              >
                “
              </span>

              <p
                className="text-xl font-medium leading-9 sm:text-2xl sm:leading-10"
                style={{ color: "var(--text-primary)" }}
              >
                I'm a Computer Science graduate who enjoys turning ideas
                into useful digital experiences.
              </p>
            </div>

            <p
              className="mt-8 text-base leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              My interests span web development, artificial intelligence,
              and backend engineering. I've worked on projects ranging from
              AI-powered educational tools to collaborative web applications
              and cloud-based systems.
            </p>

            <p
              className="mt-6 text-base leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm constantly learning, experimenting, and improving through
              hands-on projects. I enjoy taking something I don't fully
              understand yet, breaking it down, and eventually turning it
              into something people can use.
            </p>

            {/* Stats */}
            <div
              className="mt-10 grid grid-cols-3 border-y py-6"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  4+
                </p>

                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.16em] sm:text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Projects
                </p>
              </div>

              <div>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  3
                </p>

                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.16em] sm:text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Focus areas
                </p>
              </div>

              <div>
                <p
                  className="text-2xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  B.Tech
                </p>

                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.16em] sm:text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Computer Science
                </p>
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CodeIcon />

                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  What I focus on
                </p>
              </div>

              <span
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                03 areas
              </span>
            </div>

            <div className="space-y-3">
              {focusAreas.map((area) => (
                <article
                  key={area.number}
                  className="group relative overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div className="flex items-start gap-5 p-6 sm:p-7">
                    {/* Number */}
                    <span
                      className="pt-1 text-xs font-bold tracking-[0.15em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {area.number}
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-lg font-bold transition duration-300 group-hover:text-green-500 sm:text-xl"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {area.title}
                      </h3>

                      <p
                        className="mt-2 max-w-xl text-sm leading-7"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {area.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="hidden shrink-0 pt-1 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <ArrowIcon />
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div
          className="mt-20 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-primary)",
                color: "var(--accent)",
              }}
            >
              <CodeIcon />
            </span>

            <p
              className="max-w-xl text-sm leading-7"
              style={{ color: "var(--text-muted)" }}
            >
              Always learning. Always experimenting. Always looking for
              better ways to build.
            </p>
          </div>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{ color: "var(--accent)" }}
          >
            Explore my projects

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About