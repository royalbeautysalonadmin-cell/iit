import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Leadership from './components/Leadership'
import Technology from './components/Technology'
import Principals from './components/Principals'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Solutions from './components/Solutions'
import Excellence from './components/Excellence'
import TrustedBy from './components/TrustedBy'
import Reach from './components/Reach'
import Insights from './components/Insights'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

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
    <div className="relative min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Technology />
        <Principals />
        <WhyChooseUs />
        <Industries />
        <Solutions />
        <Excellence />
        <Leadership />
        <TrustedBy />
        <Reach />
        <Insights />
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
