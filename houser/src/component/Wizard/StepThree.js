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

    componentDidMount(){
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.mortgage
        })
    }


    addHouse(){
        var {mortgage, rent} = this.state;
        var {name, address, city, state, zipcode, image} = this.props
        var newHouse = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
            image: image,
            mortgage: mortgage,
            rent: rent
        }
        axios.post('http://localhost:4000/api/house', newHouse).then(res => {
            this.setState({
                mortgage: 0,
                rent: 0
            })
    
            this.props.resetState();
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
                <Link to = '/wizard/step2'><button onClick = {() => this.props.updateStepThree(this.state.mortgage, this.state.rent)}>Previous Step</button></Link>
                <Link to = '/'><button onClick = {() => this.addHouse()}>Complete</button></Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        mortgage: state.mortgage,
        rent: state.rent,
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode,
        image: state.image
    }
}
export default connect(mapStateToProps, {updateStepThree, resetState})(StepThree);