import { Routes, Route } from "react-router-dom"
import './Styles/App.css';
import NavBar from "./Components/Layout/Header/navbar";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import AboutUs from "./Components/Layout/Footer/about-me";
import Wrapper from "./Pages/Wrapper/Wrapper"
import Login from "../src/Components/Form/Login/login"

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="wrapper" element={<Wrapper />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <div className="App-footer ">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
