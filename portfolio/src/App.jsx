import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Starfield from './components/Starfield'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

function Portfolio() {
  const { theme, toggle } = useTheme()

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Starfield />
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
