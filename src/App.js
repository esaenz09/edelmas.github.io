import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import 'animate.css';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <div class="animate__animated animate__fadeIn animate__delay-2s">
          <Header></Header>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;