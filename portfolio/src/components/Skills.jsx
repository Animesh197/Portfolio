import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/portfolio'

const categories = ['All', 'AI / ML', 'Data & Backend', 'Languages & Tools']

const categoryColor = {
  'AI / ML':           { bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.35)', dot: '#8b5cf6' },
  'Data & Backend':    { bg: 'rgba(6,182,212,0.10)',  border: 'rgba(6,182,212,0.35)',  dot: '#06b6d4' },
  'Languages & Tools': { bg: 'rgba(34,197,94,0.10)',  border: 'rgba(34,197,94,0.35)',  dot: '#22c55e' },
}

function SkillPill({ skill, visible, index }) {
  const c = categoryColor[skill.category]
  return (
    <div
      className="skill-pill"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '16px 20px',
        borderRadius: '14px',
        background: c.bg,
        border: `1px solid ${c.border}`,
        minWidth: '140px',
        flex: '1 1 140px',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        cursor: 'default',
        animationDelay: `${index * 0.05}s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = `0 8px 28px ${c.border}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Name + dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot, flexShrink: 0, display: 'inline-block' }} />
        <span style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.88rem', whiteSpace: 'nowrap' }}>
          {skill.name}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: '4px', borderRadius: '9999px', background: 'var(--border)', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            borderRadius: '9999px',
            background: `linear-gradient(90deg, ${c.dot}, ${c.dot}88)`,
            width: visible ? `${skill.level}%` : '0%',
            transition: `width 0.9s ease ${index * 0.06}s`,
          }}
        />
      </div>

      {/* Level label */}
      <span style={{ color: c.dot, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.03em' }}>
        {skill.level}%
      </span>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          ref.current?.classList.add('section-visible')
          ref.current?.classList.remove('section-hidden')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = filter === 'All' ? skills : skills.filter(s => s.category === filter)

  // Group by category for "All" view
  const grouped = filter === 'All'
    ? ['AI / ML', 'Data & Backend', 'Languages & Tools'].map(cat => ({
        cat,
        items: skills.filter(s => s.category === cat),
      }))
    : [{ cat: filter, items: filtered }]

  return (
    <section id="skills" className="py-28 px-6 relative z-10" style={{ background: 'var(--bg-secondary)' }}>
      <div ref={ref} className="section-hidden max-w-5xl mx-auto">

        {/* Header */}
        <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Skills
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Technologies I work with
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '40px', maxWidth: '480px', lineHeight: 1.7 }}>
          A snapshot of my current stack — always learning, always shipping.
        </p>
        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '7px 20px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
                borderColor: filter === cat ? 'var(--accent)' : 'var(--border)',
                background: filter === cat
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                  : 'var(--surface)',
                color: filter === cat ? '#fff' : 'var(--text-muted)',
                boxShadow: filter === cat ? '0 4px 16px var(--accent-glow)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {grouped.map(({ cat, items }, gi) => (
            <div key={cat}>
              {filter === 'All' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: categoryColor[cat].dot,
                    display: 'inline-block', flexShrink: 0,
                  }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {cat}
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>
              )}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {items.map((skill, i) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    visible={visible}
                    index={gi * 4 + i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
