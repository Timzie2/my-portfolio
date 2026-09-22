function GithubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17A10.9 10.9 0 0 1 12 6.14c.97 0 1.94.13 2.85.37 2.18-1.48 3.13-1.17 3.13-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 3.4A2.2 2.2 0 1 1 5.2 7.8a2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.5V9Z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 19V5M6 11l6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t px-6 py-10"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Main footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              style={{ color: "var(--text-primary)" }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                }}
              >
                T
              </span>

              <span className="text-sm font-semibold">
                Timi
              </span>
            </a>

            <p
              className="mt-3 max-w-xs text-sm leading-6"
              style={{ color: "var(--text-muted)" }}
            >
              Computer Science graduate building practical software
              across web development, AI, and cybersecurity.
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            aria-label="Footer navigation"
          >
            <a
              href="#about"
              style={{ color: "var(--text-muted)" }}
            >
              About
            </a>

            <a
              href="#skills"
              style={{ color: "var(--text-muted)" }}
            >
              Skills
            </a>

            <a
              href="#projects"
              style={{ color: "var(--text-muted)" }}
            >
              Projects
            </a>

            <a
              href="#experience"
              style={{ color: "var(--text-muted)" }}
            >
              Experience
            </a>

            <a
              href="#certifications"
              style={{ color: "var(--text-muted)" }}
            >
              Certifications
            </a>

            <a
              href="#contact"
              style={{ color: "var(--text-muted)" }}
            >
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Timzie2"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/ilupeju-george-gmcpn-187939276"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="#home"
              className="ml-2 flex h-10 items-center gap-2 rounded-xl border px-3 text-xs font-semibold"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              Back to top
              <ArrowUpIcon />
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="mt-9 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--text-subtle)" }}
          >
            © {currentYear} Timi. All rights reserved.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Let's connect
            <ArrowIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer