import React, {Component} from 'react';
import House from '../House/House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houseList: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
       return axios.get('http://localhost:4000/api/houses').then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }

    deleteHouse(id){
        axios.delete(`http://localhost:4000/api/house/${id}`).then(res => {
            this.componentDidMount();
        })
    }

    render(){
        var mappedList = this.state.houseList.map((house, i) => {
            console.log(house)
            return(
            <House myKey = {house.id} name = {house.name} address = {house.address} city = {house.city} state = {house.state} zipcode = {house.zipcode} deleteFn = {this.deleteHouse} mortgage ={house.monthlymortgageamount} rent = {house.desiredrent}/>
           )
            
            
        })
        return(
            <div className = 'dash'>
                <div className = 'dash-head'>
                <h1>Dashboard</h1>
                <Link to = '/wizard/step1'><button className = 'add-prop'>Add New Property</button></Link>
                
                </div>
                <h4>Home Listings</h4>
                {mappedList}
            </div>
        )
    }
}
export default Dashboard