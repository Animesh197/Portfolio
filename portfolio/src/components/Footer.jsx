import { GitBranch, Globe, Mail, Zap, Code, Swords } from 'lucide-react'
import { navLinks } from '../data/portfolio'

const socials = [
  { href: 'https://github.com/animeshkumarrai',                        icon: <GitBranch size={17} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/animesh-rai-8a0688226/',        icon: <Globe size={17} />,    label: 'LinkedIn' },
  { href: 'https://leetcode.com/problemset/',                          icon: <Code size={17} />,     label: 'LeetCode' },
  { href: 'https://codeforces.com/profile/animeshrai197',              icon: <Swords size={17} />,   label: 'Codeforces' },
  { href: 'mailto:animesh.rai2024@nst.rishihood.edu.in',               icon: <Mail size={17} />,     label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={16} style={{ color: 'var(--accent)' }} />
          <span className="text-gradient" style={{ fontWeight: 700 }}>Animesh Kumar Rai</span>
        </div>

        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '34px', height: '34px', borderRadius: '8px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-hover)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Animesh Kumar Rai · B.Tech AI @ Newton School of Technology
      </p>
    </footer>
  )
}
