import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Component/Header.jsx"
import Footer from "./Component/Footer.jsx"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Product from "./Pages/Product.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
