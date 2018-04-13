import React, {Component} from 'react';

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
                <input value = {this.state.name} type = 'text' placeholder = 'Enter Property Name' onChange = {(e) => this.updateName(e.target.value)}/>
                <input value = {this.state.address} type = 'text' placeholder = 'Enter Address' onChange = {(e) => this.updateAddress(e.target.value)}/>
                <input value = {this.state.city} type = 'text' placeholder = 'Enter City' onChange = {(e) => this.updateCity(e.target.value)}/>
                <input value = {this.state.state} type = 'text' placeholder = 'Enter State' onChange = {(e) => this.updateState(e.target.value)}/>
                <input value = {this.state.zipcode} type = 'number' placeholder = 'Enter Zip' onChange = {(e) => this.updateZipcode(e.target.value)}/>
                <button>Next Step</button>
            </div>
        )
    }
}

export default StepOne;