import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>I have a Device</h2>
            <h4>Name-{props.name}</h4>
            <p>Price:{props.price}</p>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;