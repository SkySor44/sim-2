import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStepTwo} from '../../ducks/reducer';

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
                <Link to = '/wizard/step1'><button onClick = {(e) => this.props.updateStepTwo(e.target.value)}>Previous Step</button></Link>
                <Link to = '/wizard/step3'><button onClick = {(e) => this.props.updateStepTwo(e.target.value)}>Next Step</button></Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        image: state.image
    }
}
export default connect(mapStateToProps, {updateStepTwo})(StepTwo);