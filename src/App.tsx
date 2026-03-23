import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Nosotros from "./pages/Nosotros/Nosotros";
import Servicios from "./pages/Servicios/Servicios"; 
import Informacion from "./pages/Informacion/Informacion"
import Novedades from "./pages/Novedades/Novedades";
import Contactos from "./pages/Contactos/Contactos";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return(

 <BrowserRouter>
 <ScrollToTop />
  <Navbar />
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/nosotros" element={<Nosotros/>} />
  <Route path="/servicios" element={<Servicios/>}/>
  <Route path="/informacion" element={<Informacion/>}/>
  <Route path="/novedades" element={<Novedades/>}/>
  <Route path="/contactos" element={<Contactos/>}/>

 </Routes>

 </BrowserRouter>
 )
};

export default App