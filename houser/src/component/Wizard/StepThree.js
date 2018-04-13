import React, {Component} from 'react';
import axios from 'axios';

class StepThree extends Component{
    constructor(){
        super()
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }


    addHouse(){
        var {name, address, city, state, zipcode} = this.state;
        var newHouse = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
        axios.post('http://localhost:4000/api/house', newHouse).then(res => {
            null
        })
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        })
    }

    updateMortgage(e){
        this.setState({
            mortgage: e
        })
    }

    updateRent(e){
        this.setState({
            rent: e
        })
    }

    render(){
        return(
            <div>
                <input type = 'text' placeholder = 'Enter Monthly Mortgage Amount' value = {this.state.mortgage} onChange = {(e) => this.updateMortgage(e.target.value)}/>
                <input type = 'text' placeholder = 'Enter Desired Rent Amount' value = {this.state.rent} onChange = {(e) => this.updateRent(e.target.value)}/>
                <Link to = '/'><button onClick = {() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}

export default StepThree;