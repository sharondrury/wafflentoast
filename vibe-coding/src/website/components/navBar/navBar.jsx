import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouchModal from '../getInTouchModal/getInTouchModal'
import { SECTION_LINKS } from './sectionLinks'
import { BreadSliceIcon, BarsIcon, MobileButtonIcon, XmarkIcon } from '../icons/icons'
import './navBar.scss'

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link for whichever section sits in the upper-middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTION_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSectionClick = (e, id) => {
    e.preventDefault()
    closeMenu()
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderSectionLinks = () =>
    SECTION_LINKS.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        className={activeSection === id ? 'active' : undefined}
        onClick={(e) => handleSectionClick(e, id)}
      >
        {label}
      </a>
    ))

  return (
    <>
      <div className={`nav-wrapper${scrolled ? ' nav-wrapper--scrolled' : ''}`}>
        <nav className="nav">
          <NavLink to="/" className="nav__logo" aria-label="Home">
            <BreadSliceIcon />
          </NavLink>

          <div className="nav__links">
            {renderSectionLinks()}
          </div>

          <div className="nav__right">
            <button
              className="nav__hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <BarsIcon />
            </button>

            <button className="nav__phone" onClick={() => setModalOpen(true)} aria-label="Get in touch">
              <div className="nav__phone-icon">
                <MobileButtonIcon />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile slide panel */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
      <div className={`nav__panel${menuOpen ? ' nav__panel--open' : ''}`}>
        <button className="nav__panel-close" onClick={closeMenu} aria-label="Close menu">
          <XmarkIcon />
        </button>
        {renderSectionLinks()}
      </div>

      <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default NavBar
