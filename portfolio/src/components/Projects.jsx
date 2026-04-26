import { useEffect, useRef } from 'react'
import { GitBranch, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  return (
    <div className="card-hover gradient-border flex flex-col" style={{ borderRadius: '16px', overflow: 'hidden', gap: 0 }}>

      {/* Preview image */}
      {project.image && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface)' }}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.4s ease',
              display: 'block',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,15,0.7) 100%)',
            pointerEvents: 'none',
          }} />
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px', borderRadius: '6px',
              fontSize: '0.71rem', fontWeight: 600,
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--text-muted)', letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title + description */}
        <div>
          <h3 style={{ color: 'var(--text-heading)', fontWeight: 800, fontSize: '1.1rem', margin: '0 0 10px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.78, margin: 0 }}>
            {project.description}
          </p>
        </div>

        {/* Footer — date + links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-muted)' }}>
            {project.date}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {project.github && (
              <a
                href={project.github}
                aria-label={`${project.title} source code`}
                target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600,
                  color: 'var(--text-muted)', background: 'var(--surface)',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--border-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <GitBranch size={13} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                aria-label={`${project.title} live demo`}
                target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  border: 'none', textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('section-visible')
          ref.current?.classList.remove('section-hidden')
        }
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-28 px-6 relative z-10">
      <div ref={ref} className="section-hidden max-w-5xl mx-auto">

        <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Projects
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          Things I've built
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '48px', maxWidth: '460px', lineHeight: 1.75 }}>
          AI/ML projects built with real-world impact — from LLM pipelines to agentic systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/Animesh197"
            target="_blank" rel="noreferrer"
            className="cosmic-button outline"
            style={{ fontSize: '0.9rem' }}
          >
            <GitBranch size={15} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
