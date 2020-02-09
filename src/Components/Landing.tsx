import React, { Component} from 'react';
import logo from '../img/icon.png';
import { Link } from 'react-router-dom';
import CSS from 'csstype';

export default class Landing extends Component {

    render() {
        return (
            <div style={page}> 
            <div className="bg-dark" style={{overflow: "hidden", width: "100vw", height: "100vh"}}>
                <div className="text-center">
                    <img src={logo} style={img} className='d-inline-block'/>
                    <h1 style={h1} className="d-inline-block align-bottom">Paperclip</h1>
                </div>
                <h3 style={h2}>Reducing cash dependencies on a college campus near you</h3>
                <button style={button}><Link to='/signup'>Continue</Link></button>

            </div>
            </div>
            
        );
    }
}

const img : CSS.Properties = {
    width: "100px",
    height: "100px"
}

const button : CSS.Properties = {

}

const h1 : CSS.Properties = {
    textAlign: "left",
    fontSize: "100px",
    color: "white"
}

const h2 : CSS.Properties = {
    textAlign: "center",
    color: "gray",
    padding: "10px"
}

const page : CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw", 
    height: "100vh"
}