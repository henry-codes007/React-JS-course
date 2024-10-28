/* eslint-disable react/prop-types */
import './box.css'


const Box = (fufu) => {
    // console.log(fufu);
    const {image, name, age, occupation} = fufu
  return (
    <div className='box'>
        <div className='img-wrap'>
            <img src={image} alt={name} />
        </div>
        <div>
            <h1>{name}</h1>
            <h3>{age}</h3>
            <p>{occupation}</p>
        </div>
    </div>
  )
}

export default Box