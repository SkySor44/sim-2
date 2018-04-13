import React from 'react';

export default function House(props){
    return(
        <div key = {props.myKey} className= 'house-card'>
            <img src = {props.image} alt = 'house'/>
            <p>Property Name: {props.name}</p>
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