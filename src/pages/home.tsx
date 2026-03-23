import Navbar from "../components/Navbar";
import Heros from "../components/Hero"
import React from "react"
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import InfoCards from "../components/InfoCards";
import UpdateSection from "../components/UpdateSection";
import ContactFooter from "../components/ContactFooter";


function Home() {
    return (

        <>
       
        <Heros/>
        <Stats/>
        <AboutSection/>
        <InfoCards/>
        <UpdateSection/>
        <ContactFooter/>
      </>
     
    )
  }
  
  export default Home;