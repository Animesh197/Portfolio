import { GitBranch, Globe, Mail, ArrowDown, Download, Code, Swords } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/animeshkumarrai',                        icon: <GitBranch size={18} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/animesh-rai-8a0688226/',        icon: <Globe size={18} />,    label: 'LinkedIn' },
  { href: 'https://leetcode.com/problemset/',                          icon: <Code size={18} />,     label: 'LeetCode' },
  { href: 'https://codeforces.com/profile/animeshrai197',              icon: <Swords size={18} />,   label: 'Codeforces' },
  { href: 'mailto:animesh.rai2024@nst.rishihood.edu.in',               icon: <Mail size={18} />,     label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Background glow orbs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '280px', height: '280px',
        background: 'radial-gradient(circle, var(--accent-2-glow) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Status badge */}
        <div className="animate-fade-in delay-100" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginBottom: '28px', padding: '7px 16px',
          borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 600,
          background: 'var(--surface)', border: '1px solid var(--border)',
          color: 'var(--accent)', letterSpacing: '0.04em',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
            display: 'inline-block', boxShadow: '0 0 6px #22c55e',
            animation: 'twinkle 2s ease-in-out infinite',
          }} />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-200" style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
          fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--text-heading)', margin: '0 0 18px',
        }}>
          Hi, I'm{' '}
          <span className="text-gradient text-glow">Animesh Kumar Rai</span>
        </h1>

        {/* Role */}
        <p className="animate-fade-in-up delay-300" style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)',
          color: 'var(--text-muted)', marginBottom: '14px',
          fontWeight: 500, letterSpacing: '-0.01em',
        }}>
          AI / ML Engineer &amp; Full-Stack Developer
        </p>

        {/* Bio */}
        <p className="animate-fade-in-up delay-400" style={{
          fontSize: 'clamp(0.92rem, 1.5vw, 1rem)',
          color: 'var(--text-muted)', maxWidth: '520px',
          margin: '0 auto 44px', lineHeight: 1.85,
        }}>
          Building intelligent systems and automation pipelines that solve real-world problems.
          250+ problems solved on LeetCode &amp; Codeforces (peak rating: 1554).
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500" style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center', gap: '12px',
        }}>
          <a href="#projects" className="cosmic-button" style={{ fontSize: '0.9rem', padding: '12px 28px' }}>
            View Projects <ArrowDown size={15} />
          </a>
          <a href="#contact" className="cosmic-button outline" style={{ fontSize: '0.9rem', padding: '12px 28px' }}>
            <Mail size={15} /> Get in Touch
          </a>
          <a href="#" className="cosmic-button outline" style={{ fontSize: '0.9rem', padding: '12px 28px' }}>
            <Download size={15} /> Resume
          </a>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '36px', background: 'var(--border)', margin: '32px auto 0' }} />

        {/* Social icons */}
        <div className="animate-fade-in delay-700" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '8px', marginTop: '14px',
        }}>
          {socialLinks.map(s => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '42px', height: '42px', borderRadius: '10px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                transition: 'color 0.2s, transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'var(--border-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-fade-in delay-800" style={{
        position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        color: 'var(--text-muted)',
      }}>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>scroll</span>
        <ArrowDown size={15} style={{ animation: 'fadeInUp 1.5s ease-in-out infinite alternate' }} />
      </div>
    </section>
  )
}
