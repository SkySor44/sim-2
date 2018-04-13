import React from 'react';

export default function House(props){
    return(
        <div key = {props.myKey}>
            <h4>Property Name: {props.name}</h4>
            <img src = {`${props.image}`} alt = 'house'/>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>
            <p>Monthly Mortgage: {props.mortgage}</p>
            <p>Desired Rent: {props.rent}</p>
            <button onClick = {() => props.deleteFn(props.myKey)}>Delete</button>
        </div>
    )
}