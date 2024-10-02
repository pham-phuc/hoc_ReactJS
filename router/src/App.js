import { Routes, Route, Link } from "react-router-dom";

import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/product" element={< Product />}/>
        <Route path="/about" element={< About />}/>
        <Route path="/contact" element={< Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
