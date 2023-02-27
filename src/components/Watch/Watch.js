import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Watch.css';
const Watch = () => {
    const [steps, setSteps]= useState(100);

const increaseSteps = () => {
     const newStepsCount = steps * 2;
     setSteps(newStepsCount);
     //console.log(steps);
}
     useEffect( () =>{
     console.log(steps);
     },[steps])
    return (
        <div style={{border: '2px solid purple', margin: '40px'}}>
            <h2>This is my smart watch</h2>
            <h3>my courent steps:{steps}</h3>
            <button onClick={increaseSteps}>De Dour.......</button>
            <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;