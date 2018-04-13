import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Wizard extends Component{
    render(){
        return(
            <div>
                <h1>Add New Listing</h1>
                <Link to = '/'><button>Cancel</button></Link>
                
            </div>
        )
    }
}
export default Wizard;