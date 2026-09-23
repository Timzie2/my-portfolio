function ExternalArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
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

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
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

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.27c1.02 0 2.04.14 3 .41 2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5.04 3.5A2.5 2.5 0 1 1 5.04 8a2.5 2.5 0 0 1 0-4.5ZM3 9.5h4v11H3v-11ZM9.5 9.5h3.83v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
    </svg>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-32 sm:pb-28 sm:pt-36 lg:flex lg:items-center"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main green glow */}
        <div
          className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--accent-glow)",
            opacity: 0.65,
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute -right-48 top-[35%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--accent-glow)",
            opacity: 0.35,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Center divider */}
        <div
          className="absolute left-1/2 top-0 hidden h-full w-px lg:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--border), transparent)",
          }}
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="animate-fade-in">
            {/* Status */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border px-3.5 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>

              <span
                className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Computer Science • Software Development
              </span>
            </div>

            {/* Heading */}
            <h1
              className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              style={{ color: "var(--text-primary)" }}
            >
              Building ideas into{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--accent)" }}
              >
                digital experiences.
                <span
                  className="absolute -bottom-2 left-0 h-1 rounded-full sm:-bottom-3"
                  style={{
                    width: "clamp(4rem, 9vw, 7rem)",
                    backgroundColor: "var(--accent-glow)",
                  }}
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="mt-8 max-w-2xl text-base leading-8 sm:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm Ilupeju Timlehin, a Computer Science graduate focused on building
              practical software solutions across web development,
              artificial intelligence, and cybersecurity.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--text-primary)",
                  color: "var(--bg-primary)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                View my work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "var(--border-strong)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-primary)",
                }}
              >
                Let's connect

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/Timzie2"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                <GithubIcon />
                GitHub
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalArrow />
                </span>
              </a>

              <span
                className="h-4 w-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              <a
                href="https://www.linkedin.com/in/ilupeju-george-gmcpn-187939276"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                <LinkedinIcon />
                LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalArrow />
                </span>
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT — DEVELOPER CARD
          ================================================= */}

          <div className="relative hidden lg:block">
            {/* Glow */}
            <div
              className="absolute -inset-10 rounded-[3rem] blur-3xl"
              style={{
                backgroundColor: "var(--accent-glow)",
                opacity: 0.55,
              }}
            />

            <div
              className="relative overflow-hidden rounded-3xl border p-5"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Window header */}
              <div
                className="flex items-center justify-between border-b pb-4"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>

                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <CodeIcon />
                  developer.js
                </div>
              </div>

              {/* Code */}
              <div className="mt-6 font-mono text-sm leading-8">
                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">01</span>
                  <span className="ml-5">
                    <span className="text-green-500">const</span>{" "}
                    developer
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">02</span>
                  <span className="ml-5">
                    <span className="text-green-500">=</span>{" "}
                    {"{"}
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">03</span>
                  <span className="ml-10">
                    name:{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      "Timi"
                    </span>
                    ,
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">04</span>
                  <span className="ml-10">
                    role:{" "}
                    <span style={{ color: "var(--text-primary)" }}>
                      "Software Developer"
                    </span>
                    ,
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">05</span>
                  <span className="ml-10">
                    focus: [
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">06</span>
                  <span className="ml-14 text-green-500">
                    "Web",
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">07</span>
                  <span className="ml-14 text-green-500">
                    "AI",
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">08</span>
                  <span className="ml-14 text-green-500">
                    "Cybersecurity"
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">09</span>
                  <span className="ml-10">
                    ],
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">10</span>
                  <span className="ml-10">
                    status:{" "}
                    <span className="text-green-500">
                      "building"
                    </span>
                  </span>
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  <span className="text-green-500">11</span>
                  <span className="ml-5">
                    {"}"}
                  </span>
                </p>
              </div>

              {/* Focus cards */}
              <div className="mt-7 grid grid-cols-3 gap-2">
                {["Web", "AI", "Security"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border px-3 py-3 text-center text-xs font-medium transition duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div
                className="mt-4 flex items-center justify-between rounded-xl border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--accent-soft)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                  />

                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    Available for opportunities
                  </span>
                </div>

                <span
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  2025+
                </span>
              </div>
            </div>

            {/* Current focus */}
            <div
              className="absolute -bottom-7 left-8 rounded-xl border px-4 py-3 shadow-xl"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                Current focus
              </p>

              <p
                className="mt-1 text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Building useful software
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <a
          href="#about"
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5 animate-bounce"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M6 13l6 6 6-6"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero