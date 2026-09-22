const certifications = [
  {
    number: "01",
    category: "Professional Certificate",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    year: "2025",
    description:
      "Professional training covering cybersecurity foundations, security risks, network security, Linux and SQL, vulnerabilities, detection and response, Python automation, and cybersecurity career preparation.",
    link: "https://coursera.org/verify/professional-cert/Y9NWB4LG1328",
    linkLabel: "Verify certificate",
  },
  {
    number: "02",
    category: "Professional Registration",
    title:
      "Graduate — Computer Professionals Registration Council of Nigeria",
    issuer: "CPN",
    year: "2025",
    description:
      "Registered with the Computer Professionals (Registration Council of Nigeria) in the Graduate category with the designation GMCPN.",
    link: null,
    linkLabel: null,
  },
  {
    number: "03",
    category: "Technical Training",
    title: "Python Beginners",
    issuer: "NITDA / NCAIR",
    year: "2026",
    description:
      "Completed Python Beginners training from August 3, 2026 to September 6, 2026 through the National Information Technology Development Agency and the National Centre for Artificial Intelligence and Robotics.",
    link: null,
    linkLabel: null,
  },
  {
    number: "04",
    category: "Technical Training",
    title: "IT & Software Technology Training",
    issuer: "New Horizons",
    year: "2025",
    description:
      "Completed training covering Microsoft Office Word, Excel and PowerPoint, Windows Server 2012, Java Programming, Python Programming for Machine Learning 2 (Deep Learning), CCNA, and Android Mobile Application Development.",
    link: null,
    linkLabel: null,
  },
]

function CertificateIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 7h8M8 11h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="m10 15 2 1.2 2-1.2v3l-2-1-2 1v-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-y px-6 py-24 sm:py-28"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-48 top-20 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div
        className="pointer-events-none absolute -left-48 bottom-10 h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
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
              Credentials
            </span>
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Certifications &
            <span style={{ color: "var(--accent)" }}> training.</span>
          </h2>

          <p
            className="mt-5 max-w-xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Professional certifications, registrations, and technical
            training that support my development across software,
            cybersecurity, and emerging technologies.
          </p>
        </div>

        {/* Credentials */}
        <div className="grid gap-5">
          {certifications.map((certificate) => (
            <article
              key={certificate.title}
              className="group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
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
              {/* Accent line */}
              <div
                className="absolute bottom-0 left-0 top-0 w-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: "var(--accent)" }}
              />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Main information */}
                <div className="flex gap-5">
                  {/* Number */}
                  <div
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border sm:flex"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span className="text-xs font-semibold">
                      {certificate.number}
                    </span>
                  </div>

                  <div className="min-w-0">
                    {/* Category */}
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]"
                        style={{ color: "var(--accent)" }}
                      >
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: "var(--accent-soft)",
                          }}
                        >
                          <CertificateIcon />
                        </span>

                        {certificate.category}
                      </span>

                      <span
                        className="hidden h-1 w-1 rounded-full sm:block"
                        style={{
                          backgroundColor: "var(--border-strong)",
                        }}
                      />

                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {certificate.year}
                      </span>
                    </div>

                    <h3
                      className="max-w-3xl text-xl font-semibold tracking-tight sm:text-2xl"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {certificate.title}
                    </h3>

                    <p
                      className="mt-2 text-sm font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {certificate.issuer}
                    </p>

                    <p
                      className="mt-4 max-w-3xl text-sm leading-6"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {certificate.description}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="shrink-0 lg:pl-6">
                  {certificate.link ? (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--accent-soft)"
                        e.currentTarget.style.borderColor =
                          "var(--accent)"
                        e.currentTarget.style.color =
                          "var(--accent)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--bg-primary)"
                        e.currentTarget.style.borderColor =
                          "var(--border)"
                        e.currentTarget.style.color =
                          "var(--text-primary)"
                      }}
                    >
                      {certificate.linkLabel}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <div
                      className="inline-flex items-center gap-2 text-xs font-medium"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: "var(--accent)",
                        }}
                      />
                      Credential
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom credential summary */}
        <div
          className="mt-10 flex flex-col gap-5 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              <CertificateIcon />
            </div>

            <div>
              <p
                className="font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Continuous learning.
              </p>

              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Building knowledge through structured training and
                practical application.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Get in touch
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications