import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Zap } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`glass-nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}
      style={{ transition: 'all 0.3s' }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <Zap size={20} style={{ color: 'var(--accent)' }} />
          <span className="text-gradient font-bold text-lg tracking-tight">Animesh</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text-heading)'}
                onMouseLeave={e => e.target.style.color = active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-muted)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-hover)'; e.currentTarget.style.color = 'var(--text-heading)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--navbar-bg)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--border)',
            padding: '16px 24px',
          }}
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'var(--text)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
