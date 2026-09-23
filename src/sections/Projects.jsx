

const projects = [
  {
    number: "01",
    category: "Artificial Intelligence",
    title: "AI Note Generator",
    description:
  "An AI-powered application that converts educational speech into text and generates structured notes using speech recognition and natural language processing.",
    tags: [
      "Python",
      "Whisper",
      "BERT",
      "Streamlit",
    ],
    visual: "ai",
    github: null,
  },
  {
    number: "02",
    category: "Web Application",
    title: "WorkConnectr",
    description:
  "A web platform that connects contractors and workers, with features for job posting, hiring, profiles, messaging, and application management.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
    ],
    visual: "work",
    github: "https://github.com/Timzie2/workconnectr",
  },
  {
    number: "03",
    category: "Management System",
    title: "SIWES Management System",
    description:
  "A collaborative web application designed to manage SIWES activities, helping students and administrators organize industrial training information and processes.",
    tags: [
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
    ],
    visual: "siwes",
    github: null,
  },
  {
    number: "04",
    category: "Cloud Application",
    title: "Cloud Storage Portal",
    description:
  "A cloud-based storage application for authenticated users to upload, organize, and access files such as images, videos, and documents.",
    tags: [
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
    ],
    visual: "cloud",
    github: null,
  },
]

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

function ExternalIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17A10.9 10.9 0 0 1 12 6.14c.97 0 1.94.13 2.85.37 2.18-1.48 3.13-1.17 3.13-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CodeVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, var(--accent-soft), transparent 48%)",
        }}
      />

      <div className="absolute left-[12%] top-[20%] h-24 w-24 rounded-full border border-[var(--accent)] opacity-20" />

      <div className="absolute right-[12%] top-[15%] h-16 w-16 rounded-full border border-[var(--accent)] opacity-15" />

      <div
        className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-5 shadow-[var(--shadow-md)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-subtle)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-subtle)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--text-subtle)]" />
        </div>

        <div className="space-y-2 font-mono text-xs">
          <p
  className="project-code-line"
  style={{ color: "var(--text-muted)" }}
>
  <span style={{ color: "var(--accent)" }}>const</span>{" "}
  transcript = audio
</p>
          <p
  className="project-code-line"
  style={{ color: "var(--text-muted)" }}
>
  <span style={{ color: "var(--accent)" }}>const</span>{" "}
  summary = model(transcript)
</p>
          <p
  className="project-code-line"
  style={{ color: "var(--text-muted)" }}
>
  <span style={{ color: "var(--accent)" }}>return</span>{" "}
  summary
</p>
        </div>
      </div>
    </div>
  )
}

function WorkVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 35%, var(--accent-soft), transparent 42%)",
        }}
      />

      <div
        className="project-float absolute left-[12%] top-[22%] w-[76%] rounded-2xl border p-5 shadow-[var(--shadow-md)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div
              className="mb-2 h-2 w-20 rounded-full"
              style={{ backgroundColor: "var(--border-strong)" }}
            />
            <div
              className="h-2 w-12 rounded-full"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>

          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <ArrowIcon />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div
            className="rounded-xl border p-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="mb-2 h-2 w-12 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <div
              className="h-2 w-20 rounded-full"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>

          <div
            className="rounded-xl border p-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="mb-2 h-2 w-16 rounded-full"
              style={{ backgroundColor: "var(--border-strong)" }}
            />
            <div
              className="h-2 w-14 rounded-full"
              style={{ backgroundColor: "var(--border)" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SystemVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, var(--accent-soft), transparent 45%)",
        }}
      />

      <div
        className="absolute left-[10%] top-[18%] h-[64%] w-[80%] rounded-2xl border shadow-[var(--shadow-md)]"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex h-10 items-center border-b px-4"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="h-2 w-20 rounded-full bg-[var(--border-strong)]" />
        </div>

        <div className="flex h-[calc(100%-40px)]">
          <div
            className="w-[26%] border-r p-3"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="project-pulse mb-3 h-7 rounded-lg"
              style={{ backgroundColor: "var(--accent-soft)" }}
            />
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-[var(--border)]" />
              <div className="h-2 w-3/4 rounded-full bg-[var(--border)]" />
              <div className="h-2 w-4/5 rounded-full bg-[var(--border)]" />
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="mb-4 flex gap-3">
              <div
                className="h-16 flex-1 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              />
              <div
                className="h-16 flex-1 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <div
              className="h-20 rounded-xl border"
              style={{ borderColor: "var(--border)" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CloudVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, var(--accent-soft), transparent 48%)",
        }}
      />

      <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative flex h-28 w-40 items-center justify-center rounded-[45%] border shadow-[var(--shadow-md)]"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="absolute -left-7 bottom-0 h-16 w-16 rounded-full border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          />

          <div
            className="absolute -right-7 bottom-0 h-20 w-20 rounded-full border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          />

          <div
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 18a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18.2 12H19a3 3 0 1 1 0 6H7Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11v7M9.5 15.5 12 18l2.5-2.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
  className="project-pulse absolute left-[16%] top-[24%] h-2 w-2 rounded-full"
  style={{ backgroundColor: "var(--accent)" }}
/>

      <div
  className="project-pulse absolute right-[18%] top-[30%] h-2 w-2 rounded-full"
  style={{ backgroundColor: "var(--accent)" }}
/>

      <div
        className="absolute bottom-[22%] left-[28%] h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === "ai") return <CodeVisual />
  if (type === "work") return <WorkVisual />
  if (type === "siwes") return <SystemVisual />
  return <CloudVisual />
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y px-6 py-24 sm:py-28"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              Selected work
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Projects built to
            <span style={{ color: "var(--accent)" }}> solve problems.</span>
          </h2>

          <p
            className="mt-5 max-w-xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            A collection of applications and technical projects I've
            worked on while developing my skills across software
            development, artificial intelligence, and modern web
            technologies.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
  key={project.title}
  className="group overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Visual */}
              <div
                className="relative h-64 overflow-hidden border-b"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border)",
                }}
              >
                <ProjectVisual type={project.visual} />

                <div
                  className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {project.number}
                </div>

                <div
                  className="absolute right-5 top-5 rounded-full border px-3 py-1.5 text-[11px] font-medium"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3
                      className="text-xl font-semibold tracking-tight sm:text-2xl"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-6 sm:text-[15px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:flex"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <ArrowIcon />
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div
                  className="mt-7 flex items-center justify-between border-t pt-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    Technical project
                  </span>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                      aria-label={`View ${project.title} on GitHub`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--accent)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "var(--text-primary)"
                      }}
                    >
                      <GithubIcon />
                      GitHub
                      <ExternalIcon />
                    </a>
                  ) : (
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      In development
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-14 flex flex-col gap-5 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              <SparkIcon />
            </div>

            <div>
              <p
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Building through practice.
              </p>

              <p
                className="mt-1 text-sm leading-6"
                style={{ color: "var(--text-muted)" }}
              >
                Each project is an opportunity to learn, experiment,
                and turn ideas into working software.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold sm:self-auto"
            style={{ color: "var(--accent)" }}
          >
            Start a conversation
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects