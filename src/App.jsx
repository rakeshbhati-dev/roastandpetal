import Navbar from "./components/Navbar"
import Atmosphere from "./sections/Atmosphere"
import ContactUs from "./sections/ContactUs"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Menu from "./sections/Menu"
import Review from "./sections/Review"
import Stats from "./sections/Stats"
import WhyChooseUs from "./sections/WhyChooseUs"

function App(){
  return(
    <div className="font-sans">
    <Navbar />
    <Hero />
    <Stats />
    <Menu />
    <WhyChooseUs />
    <Atmosphere />
    <Review />
    <ContactUs />
    <Footer />
    </div>
  )
}

export default App