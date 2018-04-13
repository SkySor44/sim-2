import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepThree, resetState} from '../../ducks/reducer';

class StepThree extends Component{
    constructor(){
        super()
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }


    // addHouse(){
    //     var {mortgage, rent} = this.state;
    //     // var {name, address, city, state, zipcode, image} 
    //     var newHouse = {
    //         name: name,
    //         address: address,
    //         city: city,
    //         state: state,
    //         zipcode: zipcode,
    //         image: image,
    //         monthlymortgageamount: mortgage,
    //         desiredrent: rent
    //     }
    //     axios.post('http://localhost:4000/api/house', newHouse).then(res => {
    //         null
    //     })
    //     this.setState({
    //         mortgage: 0,
    //         rent: 0
    //     })

    //     this.props.resetState();
    // }

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
                <Link to = '/wizard/step2'><button onClick = {(e) => this.props.updateStepThree(e.target.value)}>Previous Step</button></Link>
                <Link to = '/'><button onClick = {() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        mortgage: state.mortgage,
        rent: state.rent
    }
}
export default connect(mapStateToProps, {updateStepThree, resetState})(StepThree);