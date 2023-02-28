import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Home from "./view/Home"
import Contact from "./view/Contact"
import NotFound from "./view/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
