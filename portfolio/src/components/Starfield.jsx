import { useMemo } from 'react'

const STAR_COUNT = 120
const METEOR_COUNT = 4

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function Starfield() {
  const stars = useMemo(() =>
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      top: `${randomBetween(0, 100)}%`,
      left: `${randomBetween(0, 100)}%`,
      size: randomBetween(1, 3),
      duration: `${randomBetween(2, 6)}s`,
      delay: `${randomBetween(0, 5)}s`,
    })), [])

  const meteors = useMemo(() =>
    Array.from({ length: METEOR_COUNT }, (_, i) => ({
      id: i,
      top: `${randomBetween(5, 40)}%`,
      left: `${randomBetween(20, 90)}%`,
      duration: `${randomBetween(3, 6)}s`,
      delay: `${i * 2.5}s`,
    })), [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {stars.map(s => (
        <span
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--duration': s.duration,
            '--delay': s.delay,
          }}
        />
      ))}
      {meteors.map(m => (
        <span
          key={m.id}
          className="meteor"
          style={{
            top: m.top,
            left: m.left,
            '--meteor-duration': m.duration,
            '--meteor-delay': m.delay,
          }}
        />
      ))}
    </div>
  )
}
