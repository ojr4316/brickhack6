import React, { Component} from 'react';
import logo from '../img/icon.png';
import { Link } from 'react-router-dom';
import CSS from 'csstype';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom';

export default class Landing extends Component {

    render() {
        if (firebase.auth().currentUser !== null) {
            return <Redirect push to="/" />;
        }
        return (
            <div style={page}> 
            
                <div style={{display: "inline-block"}}>
                <RubberBand left>   
                <img src={logo} alt="logo" style={img} className='d-inline-block'/>
                </RubberBand>
                    <h1 style={title} className="d-inline-block align-bottom">Paperclip</h1>    
                <br/>
                        <h3 style={subtitle}>Reducing cash dependencies on a college campus near you</h3>
                        <Fade left>
                    <Link to='/signup'><i className="fas fa-arrow-right fa-5x float-right" style={{color: "#E81C25"}}/></Link>
                    </Fade>
                </div>
                    
                


            </div>
            
        );
    }
}

const img : CSS.Properties = {
    width: "100px",
    height: "100px",
    marginLeft: "16px"
}

const title : CSS.Properties = {
    textAlign: "left",
    fontSize: "96px",
    color: "white",
    marginBottom: "-10px",
    marginLeft: "8px"
}

const subtitle : CSS.Properties = {
    textAlign: "center",
    color: "#808080",
    padding: "16px"
}

const page : CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", 
    width: "100vw", 
    height: "100vh",
    backgroundColor: "#311847"
}