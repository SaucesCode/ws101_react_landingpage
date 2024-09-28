import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import KeyPoints from "./components/Key/KeyPoints";
import More from "./components/More/More";
import Conclusion from "./components/Conclusion/Conclusion";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar logo="SAUCE" />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/key" element={<KeyPoints />} />
        <Route path="/more" element={<More />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
