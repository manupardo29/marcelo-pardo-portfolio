import Header from './components/Header'
import Footer from './components/Footer'
import MobileContactBar from './components/MobileContactBar'
import Hero from './sections/Hero'
import Metrics from './sections/Metrics'
import Profile from './sections/Profile'
import Projects from './sections/Projects'
import Specializations from './sections/Specializations'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <Metrics />
        <Profile />
        <Projects />
        <Specializations />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  )
}
