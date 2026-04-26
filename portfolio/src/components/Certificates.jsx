import { useEffect, useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio'

export default function Certificates() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('section-visible')
          ref.current?.classList.remove('section-hidden')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certificates" className="py-28 px-6 relative z-10" style={{ background: 'var(--bg-secondary)' }}>
      <div ref={ref} className="section-hidden max-w-5xl mx-auto">

        <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Certifications
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Achievements &amp; Certifications
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '48px', maxWidth: '460px', lineHeight: 1.75 }}>
          Recognitions that validate my skills and commitment to continuous learning.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="card-hover gradient-border"
              style={{
                display: 'flex', flexDirection: 'column', gap: '14px',
                padding: '24px', borderRadius: '16px', textDecoration: 'none',
              }}
            >
              {/* Icon + link icon */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '12px',
                  background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', flexShrink: 0,
                }}>
                  <Award size={20} />
                </div>
                <ExternalLink size={14} style={{ color: 'var(--text-muted)', marginTop: '4px' }} />
              </div>

              {/* Title */}
              <div>
                <h3 style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.98rem', marginBottom: '4px', letterSpacing: '-0.01em' }}>
                  {cert.title}
                </h3>
                <span style={{
                  display: 'inline-block', padding: '2px 10px', borderRadius: '9999px',
                  fontSize: '0.72rem', fontWeight: 600,
                  background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)',
                  color: 'var(--accent)',
                }}>
                  {cert.issuer}
                </span>
              </div>

              {/* Detail */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                {cert.detail}
              </p>

              {/* Date */}
              <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', fontWeight: 500, borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                {cert.date}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
