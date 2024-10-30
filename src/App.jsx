import './App.css'
import Counter from './components/counter/Counter'
import Header from './components/header/header'
// import Hero from './components/hero/Hero'


function App() {
  

  return (
    <section className='home'>
     <Header/>
     <Counter/>
     {/* <Hero/>      */}
    </section>
  )
}

export default App
