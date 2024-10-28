import './box.css'
import Image1 from '/img1.jpg'
const Box = () => {
  return (
    <div className='box'>
        <div className='img-wrap'>
            <img src={Image1} alt="" />
        </div>
        <div>
            <h1>Jacob Moses</h1>
            <h3>29 years</h3>
            <p>Boxer</p>
        </div>
    </div>
  )
}

export default Box