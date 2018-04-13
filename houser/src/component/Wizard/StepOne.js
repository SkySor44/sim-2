import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepOne} from '../../ducks/reducer.js';

class StepOne extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    componentDidMount(){
        //ES6 DESTRUCTURING
        const {name, address, city, state, zipcode} = this.props
        this.setState({
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        })
    }


    updateName(e){
        this.setState({
            name: e
        })
    }

    updateAddress(e){
        this.setState({
            address: e
        })
    }

    updateCity(e){
        this.setState({
            city: e
        })
    }

    updateState(e){
        this.setState({
            state: e
        })
    }

    updateZipcode(e){
        this.setState({
            zipcode: e
        })
    }


    render(){
        return(
            <div>
                <input value = {this.state.name}  type = 'text' placeholder = 'Enter Property Name' onChange = {(e) => this.updateName(e.target.value)}/>
                <input value = {this.state.address}  type = 'text' placeholder = 'Enter Address' onChange = {(e) => this.updateAddress(e.target.value)}/>
                <input value = {this.state.city}  type = 'text' placeholder = 'Enter City' onChange = {(e) => this.updateCity(e.target.value)}/>
                <input value = {this.state.state}  type = 'text' placeholder = 'Enter State' onChange = {(e) => this.updateState(e.target.value)}/>
                <input value = {this.state.zipcode}  type = 'number' placeholder = 'Enter Zip' onChange = {(e) => this.updateZipcode(e.target.value)}/>
                <Link to = '/wizard/step2'><button onClick = {() => this.props.updateStepOne(this.state.name, this.state.address, this.state.city, this.state.state, this.state.zipcode)}>Next Step</button></Link>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}
export default connect(mapStateToProps, {updateStepOne})(StepOne);