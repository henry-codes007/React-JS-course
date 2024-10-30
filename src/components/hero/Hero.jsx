import Box from '../box/Box'
import './hero.css'
import Image1 from '/img1.jpg'
import Image2 from '/img2.jpg'
import Image3 from '/img3.jpg'
import { users } from '../../utils/utils'

const Hero = () => {
  console.log(users);
  return (
    <section className="hero">
      {
        users.map((user) => (
          <Box
            key={user.id}
            name={user.name}
            age={user.age}
            occupation={user.occupation}
            image={user.image}
          />
        ))        
      }
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