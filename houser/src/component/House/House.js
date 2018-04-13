import React from 'react';

export default function House(props){
    return(
        <div key = {props.myKey}>
            <h4>Property Name: {props.name}</h4>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>
            <button onClick = {() => props.deleteFn(props.myKey)}>Delete</button>
        </div>
    )
}