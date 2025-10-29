import Navbar from "../components/Navbar.jsx"
import HeroSection from "../components/HeroSection.jsx"
import SurveySection from "../components/SurveySection.jsx"

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <SurveySection />
      </div>
    </>
  )
}

export default Home