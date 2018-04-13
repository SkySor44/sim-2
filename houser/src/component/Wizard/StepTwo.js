import React, {Component} from 'react';

class StepTwo extends Component{
    constructor(){
        super()
        this.state = {
            image: ''
        }
    }

    updateImage(e){
        this.setState({
            image: e
        })
    }

    render(){
        return(
            <div>
                <input type = 'text' placeholder = 'Enter Image URL' value = {this.state.image} onChange = {(e) => this.updateImage(e.target.value)}/> 
                <button>Previous Step</button>
                <button>Next Step</button>
            </div>
        )
    }
}

export default StepTwo;