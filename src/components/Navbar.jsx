import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

  /* =====================================================
     THEME
  ===================================================== */

  useEffect(() => {
    const theme = isDark ? "dark" : "light"

    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [isDark])

  /* =====================================================
   ACTIVE SECTION
===================================================== */

useEffect(() => {
  const sections = [
  document.getElementById("about"),
  document.getElementById("skills"),
  document.getElementById("projects"),
  document.getElementById("experience"),
  document.getElementById("certifications"),
  document.getElementById("contact"),
].filter(Boolean)

  if (!sections.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
  .filter((entry) => entry.isIntersecting)
  .sort(
    (a, b) =>
      Math.abs(a.boundingClientRect.top - 140) -
      Math.abs(b.boundingClientRect.top - 140)
  )

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id)
      }
    },
    {
      /*
        The navbar occupies the top of the screen.
        This creates a comfortable detection area
        below it.
      */
      root: null,
      rootMargin: "-140px 0px -45% 0px",
      threshold: [0.05, 0.2, 0.4, 0.6, 0.8],
    }
  )

  sections.forEach((section) => {
    observer.observe(section)
  })

  return () => {
    observer.disconnect()
  }
}, [])

  /* =====================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ===================================================== */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  /* =====================================================
     CLOSE MOBILE MENU ON DESKTOP RESIZE
  ===================================================== */

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  /* =====================================================
     HELPERS
  ===================================================== */

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border backdrop-blur-2xl"
        style={{
          backgroundColor: "var(--nav-bg)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* Top highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent-glow), transparent)",
          }}
        />

        {/* =================================================
            MAIN NAVIGATION
        ================================================= */}

        <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            aria-label="Timi home"
            className="group flex items-center text-[19px] font-bold tracking-[-0.03em]"
            style={{ color: "var(--text-primary)" }}
          >
            Timi

            <span
              className="ml-0.5 transition-transform duration-300 group-hover:scale-125"
              style={{ color: "var(--accent)" }}
            >
              .
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavigation(sectionId)}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative isolate rounded-lg px-3 py-2 text-[13px] font-medium"
                  style={{
                    color: isActive
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                    backgroundColor: isActive
                      ? "var(--accent-soft)"
                      : "transparent",
                  }}
                >
                  {link.name}

                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-px origin-center transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                  />

                  {/* Active background */}
                  {isActive && (
                    <span
                      className="pointer-events-none absolute inset-0 -z-10 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-soft), transparent)",
                      }}
                    />
                  )}
                </a>
              )
            })}

            {/* Divider */}
            <div
              className="mx-2 h-5 w-px"
              style={{
                backgroundColor: "var(--border)",
              }}
            />

            {/* Theme toggle */}
            <button
              type="button"
              onClick={() =>
                setIsDark((previous) => !previous)
              }
              aria-label={
                isDark
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="group flex h-9 w-9 items-center justify-center rounded-lg border"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-secondary)",
              }}
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />

                  <path
                    strokeLinecap="round"
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z"
                  />
                </svg>
              )}
            </button>

            {/* Let's talk */}
            <a
              href="#contact"
              onClick={() => handleNavigation("contact")}
              className="ml-2 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-semibold"
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
              }}
            >
              Let's talk

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </a>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            ref={buttonRef}
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          id="mobile-navigation"
          ref={menuRef}
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="border-t px-4 pb-5 pt-3"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {links.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavigation(sectionId)}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center justify-between border-b py-4 text-sm font-medium"
                  style={{
                    color: isActive
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span>{link.name}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className={`h-4 w-4 transition-all ${
                      isActive
                        ? "translate-x-1 opacity-100"
                        : "opacity-40"
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </a>
              )
            })}

            {/* Mobile controls */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setIsDark((previous) => !previous)
                }
                className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-secondary)",
                }}
              >
                {isDark ? "Light" : "Dark"}
              </button>

              <a
                href="#contact"
                onClick={() => handleNavigation("contact")}
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--text-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                Let's talk

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
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar