import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'10px', padding:'10px'}}>
            <h4>This is knob components</h4>
            <p>Steps here is: {props.steps}</p>
        </div>
    );
};

export default Knob;