import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Component/Header.jsx"
import Footer from "./Component/Footer.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Product from "./Pages/Doctors.jsx"
import Book from "./Pages/Book.jsx"
import TreatmentCards from "./Pages/Treatment.jsx"
import Doctors from "./Pages/Doctors.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/appointment" element={<Book />}></Route>
          <Route path="/treatments" element={<TreatmentCards />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
