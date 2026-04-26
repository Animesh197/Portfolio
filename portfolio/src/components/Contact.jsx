import { useEffect, useRef, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { Send, CheckCircle, XCircle, Mail, MapPin, Clock } from 'lucide-react'

const info = [
  { icon: <Mail size={18} />,   label: 'Email',    value: 'animesh.rai2024@nst.rishihood.edu.in' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Haryana, India' },
  { icon: <Clock size={18} />,  label: 'Timezone', value: 'IST (UTC+5:30)' },
]

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success'|'error', msg }
  const [toastOpen, setToastOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('section-visible')
          ref.current?.classList.remove('section-hidden')
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate async send
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setToast({ type: 'success', msg: 'Message sent! I\'ll get back to you soon.' })
    setToastOpen(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--text-heading)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <Toast.Provider swipeDirection="right">
      <section id="contact" className="py-24 px-6 relative z-10" style={{ background: 'var(--bg-secondary)' }}>
        <div ref={ref} className="section-hidden max-w-5xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            Contact
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-heading)',
              marginBottom: '48px',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Let's work together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                Have a project in mind, a collaboration idea, or just want to say hi?
                My inbox is always open — I'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col gap-5">
                {info.map(item => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      style={{
                        width: 40, height: 40,
                        borderRadius: '10px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.label}</div>
                      <div style={{ color: 'var(--text-heading)', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="cosmic-button"
                style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast */}
      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={4000}
        className="ToastRoot"
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, minWidth: 280 }}
      >
        {toast?.type === 'success'
          ? <CheckCircle size={20} style={{ color: '#22c55e', flexShrink: 0 }} />
          : <XCircle size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
        }
        <div>
          <Toast.Title style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.9rem' }}>
            {toast?.type === 'success' ? 'Message sent!' : 'Something went wrong'}
          </Toast.Title>
          <Toast.Description style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 2 }}>
            {toast?.msg}
          </Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  )
}
