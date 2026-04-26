import { useEffect, useRef } from 'react'
import { Trophy, Swords, Award, Brain, Code, Cpu } from 'lucide-react'
import { activities } from '../data/portfolio'

const featureCards = [
  {
    icon: <Brain size={20} />,
    title: 'AI / ML Engineering',
    desc: 'Building end-to-end intelligent systems with LLMs, LangGraph, FAISS, and HuggingFace — from agentic pipelines to RAG-powered applications.',
    color: '#8b5cf6',
  },
  {
    icon: <Cpu size={20} />,
    title: 'AI Integration',
    desc: 'Integrating Groq LLM, Sentence-Transformers, and modern AI APIs into real-world automation pipelines and data-driven products.',
    color: '#06b6d4',
  },
  {
    icon: <Code size={20} />,
    title: 'Problem Solving',
    desc: 'Strong algorithmic thinking with 250+ problems solved on LeetCode & Codeforces. Peak rating: 1554. Participated in ICPC 2025.',
    color: '#22c55e',
  },
]

const statBadges = [
  { icon: <Trophy size={14} />, text: '250+ problems solved',  color: '#8b5cf6' },
  { icon: <Swords size={14} />, text: 'CF peak rating: 1554',  color: '#06b6d4' },
  { icon: <Award size={14} />,  text: 'Top 0.07% Young Turks', color: '#f59e0b' },
]

export default function About() {
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
    <section id="about" className="py-28 px-6 relative z-10">
      <div ref={ref} className="section-hidden max-w-5xl mx-auto">

        {/* Section label */}
        <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
          About Me
        </p>

        {/* Two-col top: heading + bio left, stats + activities right */}
        <div className="grid md:grid-cols-2 gap-14 items-start" style={{ marginBottom: '56px' }}>

          {/* Left */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '24px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              AI / ML Engineer &amp;<br />
              <span className="text-gradient">Problem Solver</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '16px' }}>
              Currently pursuing B.Tech in Artificial Intelligence at Newton School of Technology,
              Rishihood University. I build intelligent systems, automation pipelines, and
              data-driven applications that solve real-world problems.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '16px' }}>
              Skilled in scalable AI solutions using LLMs, LangGraph, FAISS, and HuggingFace.
              Strong foundation in machine learning, deep learning, and algorithms.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '32px' }}>
              I believe in shipping fast, learning faster, and building things that actually matter.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#contact" className="cosmic-button" style={{ fontSize: '0.88rem', padding: '11px 24px' }}>
                Get In Touch
              </a>
              <a href="#" className="cosmic-button outline" style={{ fontSize: '0.88rem', padding: '11px 24px' }}>
                Download CV
              </a>
            </div>
          </div>

          {/* Right — stat badges + activities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Stat badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {statBadges.map(s => (
                <div key={s.text} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 18px', borderRadius: '12px',
                  background: `${s.color}0e`, border: `1px solid ${s.color}28`,
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '9px', flexShrink: 0,
                    background: `${s.color}18`, border: `1px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color,
                  }}>
                    {s.icon}
                  </div>
                  <span style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.92rem' }}>
                    {s.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div style={{
              padding: '18px 20px', borderRadius: '12px',
              background: 'var(--surface)', border: '1px solid var(--border)',
            }}>
              <p style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Extra-Curricular
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {activities.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards — full width below */}
        <div className="grid sm:grid-cols-3 gap-5">
          {featureCards.map(card => (
            <div
              key={card.title}
              className="card-hover"
              style={{ padding: '24px', borderRadius: '16px' }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '12px',
                background: `${card.color}15`, border: `1px solid ${card.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: card.color, marginBottom: '16px',
              }}>
                {card.icon}
              </div>
              <h3 style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.75, margin: 0 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
