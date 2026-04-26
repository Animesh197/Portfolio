import { ArrowLeft, Telescope } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: 'var(--bg)' }}
    >
      <Telescope size={64} style={{ color: 'var(--accent)', marginBottom: '24px' }} />
      <h1
        className="text-gradient"
        style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 800, lineHeight: 1, margin: '0 0 16px' }}
      >
        404
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '32px' }}>
        Lost in space. This page doesn't exist.
      </p>
      <a href="/" className="cosmic-button">
        <ArrowLeft size={16} />
        Back to Earth
      </a>
    </div>
  )
}
