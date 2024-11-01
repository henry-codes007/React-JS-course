import { useEffect, useState } from 'react';
import './App.css'
// import Counter from './components/counter/Counter'
import Header from './components/header/header'
// import Hero from './components/hero/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF8333', 'green', 'yellow', 'white']; 
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <section className='home' style={{ backgroundColor: bgColor }}>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
       
       {/* <Counter/> */}
       {/* <Hero/>      */}
      </section>
    </BrowserRouter>
  )
}

export default App
