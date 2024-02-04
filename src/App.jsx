import './App.css';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (

    <BrowserRouter>

      <div className='bg-black h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto flex flex-col justify-between items-center'>

        <Navigation />


        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/education" element={<Education />} />

        </Routes>


        <Footer />

      </div>

    </BrowserRouter>
  )
}
