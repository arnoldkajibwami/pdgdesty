import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"
import News from "./News";
import Gallery from "./Gallery";
import MoreDetails from "./NewsDetails";

function App() {

  return (
    // <BrowserRouter>
    <Router>
      <Header />
      {/* <Translate/> */}
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsdetails" element={<MoreDetails />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer /> 
    </Router>
    /* </BrowserRouter> */
  )
}

export default App


