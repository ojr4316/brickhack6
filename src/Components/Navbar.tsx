import React, { Component, CSSProperties } from 'react';
import CSS from 'csstype';

export default class Navbar extends Component {
  render() {
    return (
      <div style={divStyle}>
        <table>
            <td>Paperclip</td>
            <td>
                <select>
                    <option>Profile</option>
                    <option>Settings</option>
                    <option>Logout</option>
                </select>
            </td>
        </table>
      </div>
    );
  }
}

const divStyle: CSSProperties = {
    backgroundColor: "purple",
    textAlign: "center"
}