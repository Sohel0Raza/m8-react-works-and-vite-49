import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseCount = () =>{
       const newSteps= steps + 1;
       setSteps(newSteps)
    }
    useEffect(() =>{
        console.log(steps)
    },[steps])
    return (
        <div style={{border:'2px solid red', padding:'10px', backgroundColor:'lightblue'}}>
            <h2>This my smart Watch.</h2>
            <h1>Steps: {steps} </h1>
            <button onClick={increaseCount}>De Dour...</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;