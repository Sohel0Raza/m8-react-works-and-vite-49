import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue', padding:'5px', margin:'10px'}}>
            <h3>This is dail components</h3>
            <p>Your steps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;