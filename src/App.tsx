import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Leadership from './components/Leadership'
import Companies from './components/Companies'
import Industries from './components/Industries'
import WhyChooseUs from './components/WhyChooseUs'
import ManufacturingProcess from './components/ManufacturingProcess'
import FeaturedProducts from './components/FeaturedProducts'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import GlobalPresence from './components/GlobalPresence'
import News from './components/News'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ParticleBackground from './components/ParticleBackground'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-bg">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Companies />
        <Industries />
        <WhyChooseUs />
        <ManufacturingProcess />
        <FeaturedProducts />
        <Technology />
        <Testimonials />
        <GlobalPresence />
        <News />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
