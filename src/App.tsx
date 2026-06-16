import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import AboutSection from './sections/AboutSection'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
