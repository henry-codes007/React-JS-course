import { useState } from 'react';
import './counter.css';
import { useEffect } from 'react';

const Counter = () => {
    // let count = 0;
    let [count, setCount] = useState(0);
    const possibleBgColors = ['green', 'yellow', "blue", "orange", "purple"]
    const [bgColor, setBgColor] = useState(possibleBgColors[0]);
    
    const handleClick = () => {
        // setCount(count++);
        // setCount(() => count++);
        setCount((prev) => prev + 1);
        const randomIndex = Math.floor(Math.random() * possibleBgColors.length)
        setBgColor(possibleBgColors[randomIndex])
        // console.log({count});
    }

    
    useEffect(() => {
        console.log({count});
    }, [count])

    const myStyle = {
        backgroundColor: bgColor,
        // color: "yellow"
    }

  return (
    <div className="Counter">
        <div className="count-box" onClick={handleClick} style={myStyle}>
            {count}
        </div>
    </div>
  )
}

export default Counter