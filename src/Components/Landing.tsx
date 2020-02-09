import React, { Component, CSSProperties } from 'react';
import logo from '../img/icon.png';
import { Link, Router } from 'react-router-dom';

export default class Landing extends Component {

    render() {
        return (
            <div className="bg-dark">
                <div className="text-center">
                    <img src={logo} style={img} className='d-inline-block'/>
                    <h1 style={h1} className="d-inline-block align-bottom">Paperclip</h1>
                </div>
                <h3 style={h2}>Reducing cash dependencies on a college campus near you</h3>
                <form>
                    <button style={button} type="submit" className="align-bottom"><Link to='/signup'>Continue</Link></button>
                </form>
            </div>
        );
    }
}

const img : CSSProperties = {
    width: "100px",
    height: "100px"
}

const button : CSSProperties = {
    margin: "0 0 10px 93%"
}

const h1 : CSSProperties = {
    textAlign: "left",
    fontSize: "100px",
    color: "white"
}

const h2 : CSSProperties = {
    textAlign: "center",
    color: "gray",
    padding: "10px"
}