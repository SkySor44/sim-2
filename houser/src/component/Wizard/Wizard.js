import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Route} from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {connect} from 'react-redux';
import {resetState} from '../../ducks/reducer'

 class Wizard extends Component{
     
    render(){
        return(
            <div>
                <h1>Add New Listing</h1>
                <Link to = '/'><button onClick = {(e) => this.props.resetState(e.target.value)}>Cancel</button></Link>
                <Route path = '/wizard/step1' component = {StepOne} exact/>
                <Route path = '/wizard/step2' component = {StepTwo} exact />  
                <Route path = '/wizard/step3' component = {StepThree} exact/>
            </div>
        )
    }
}
export default connect(null, {resetState})(Wizard);