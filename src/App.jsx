import Banner from "./Banner/Banner"
import Donation from "./Donation/Donation"
import Feature from "./Feature/Feature"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import UrgentCase from "./UrgentCase/UrgentCase"




function App() {
  

  return (
    <>
    
    <div className="lg:mx-14 mx-6">
    <Navbar/>
    <Banner/>
    <Feature/>
    <UrgentCase/>
    <Donation/>
    <Footer/>

    </div>
    </>
  )
}

export default App
