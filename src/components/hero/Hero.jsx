import Box from '../box/Box'
import './hero.css'
import Image1 from '/img1.jpg'
import Image2 from '/img2.jpg'
import Image3 from '/img3.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <Box 
            name="Mansa Musa" 
            age={57} 
            occupation="Palm wine tapper"
            image={Image1}
        />
        <Box 
            name="Sampson Delilah" 
            age={21} 
            occupation="Yahoo Boy"
            image={Image2}
        />
        <Box 
            name="Young Pablo" 
            age={19} 
            occupation="Forex Trader"
            image={Image3}
        />
        
    </section>
  )
}

export default Hero