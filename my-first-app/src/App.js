import { Routes, Route } from "react-router-dom"
import './Styles/App.css';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import AboutUs from "./Components/Layout/Footer/about-me";
import Wrapper from "./Pages/Wrapper/Wrapper"

function App() {
  return (
    <div className="App">
      <h1>Header is Here</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="wrapper" element={<Wrapper />} />
      </Routes>

      <div className="App-footer ">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
