import { useState } from "react"

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 8.5c.3-.4.6-.4.9-.2l1 .8c.3.2.3.5.2.8l-.4.7c-.1.2-.1.4 0 .6.5.8 1.2 1.5 2.1 1.9.2.1.4.1.6-.1l.6-.6c.2-.2.5-.2.8-.1l1.1.5c.3.1.4.4.3.7-.2.7-.7 1.2-1.4 1.4-1 .2-2.6-.4-4-1.5-1.2-.9-2.1-2-2.5-3.1-.3-.8-.1-1.5.3-1.9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 3.4A2.2 2.2 0 1 1 5.2 7.8a2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v6.3h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.5V9Z" />
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

function Contact() {
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xgavyvqe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t px-6 py-24 sm:py-28"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background glow */}
      <div
        className="contact-glow pointer-events-none absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--accent-soft)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </span>

            <span
              className="h-px w-10"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          <h2
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Let's build something
            <span style={{ color: "var(--accent)" }}> useful.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-base leading-7 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project idea, collaboration opportunity, or simply
            want to connect? Send me a message and I'll get back to
            you.
          </p>
        </div>

        {/* Main contact area */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div
            className="rounded-3xl border p-7 sm:p-8"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div className="mb-8">
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Get in touch
              </p>

              <p
                className="mt-2 text-sm leading-6"
                style={{ color: "var(--text-muted)" }}
              >
                You can reach me directly through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:ilupejutimy@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border p-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--accent)"
                  e.currentTarget.style.backgroundColor =
                    "var(--accent-soft)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--border)"
                  e.currentTarget.style.backgroundColor =
                    "var(--bg-primary)"
                }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent)",
                  }}
                >
                  <MailIcon />
                </span>

                <span className="min-w-0">
                  <span
                    className="block text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email
                  </span>

                  <span
                    className="mt-1 block truncate text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    ilupejutimy@gmail.com
                  </span>
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349029079470"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border p-4"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--accent)"
                  e.currentTarget.style.backgroundColor =
                    "var(--accent-soft)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--border)"
                  e.currentTarget.style.backgroundColor =
                    "var(--bg-primary)"
                }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--accent-soft)",
                    color: "var(--accent)",
                  }}
                >
                  <WhatsAppIcon />
                </span>

                <span className="min-w-0">
                  <span
                    className="block text-xs font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    WhatsApp
                  </span>

                  <span
                    className="mt-1 block text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    +234 902 907 9470
                  </span>
                </span>
              </a>
            </div>

            {/* Social links */}
            <div
              className="mt-8 border-t pt-7"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--text-muted)" }}
              >
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Timzie2"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-primary)",
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-secondary)",
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div
              className="mt-8 rounded-2xl border p-4"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-primary)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="relative flex h-3 w-3"
                  aria-hidden="true"
                >
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
                    style={{ backgroundColor: "var(--accent)" }}
                  />

                  <span
                    className="relative inline-flex h-3 w-3 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </span>

                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Open to opportunities and collaborations
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-3xl border p-7 sm:p-8"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  autoComplete="off"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell me a little about your project..."
                  required
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold sm:w-auto"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--accent-hover)"
                  e.currentTarget.style.transform =
                    "translateY(-1px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--accent)"
                  e.currentTarget.style.transform =
                    "translateY(0)"
                }}
              >
                {isSubmitting ? "Sending..." : "Send message"}
{!isSubmitting && <ArrowIcon />}
              </button>
            </form>
            {status === "success" && (
  <p
    className="mt-4 text-sm font-medium"
    style={{ color: "var(--accent)" }}
    role="status"
  >
    Message sent successfully. Thanks for reaching out!
  </p>
)}

{status === "error" && (
  <p
    className="mt-4 text-sm font-medium"
    style={{ color: "#dc2626" }}
    role="alert"
  >
    Something went wrong. Please try again or contact me directly.
  </p>
)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact