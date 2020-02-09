import React, { Component, CSSProperties } from 'react';
import CSS from "csstype";
import axios from 'axios';
import {auth} from 'firebase';

interface Props {}

interface State {
    selectedChat: number,
    message: string
}

export default class Chat extends Component<Props, State> {

    state = {
        selectedChat: 0,
        message: ""
    }

    sendMessage = (e: any) => {
        e.preventDefault();
        axios.post('http://redpaperclip.online/addChatMessage.php', {
            chatId: this.state.selectedChat,
            sender: auth().currentUser?.displayName,
            message: this.state.message
          })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  render() {
    return (
      <div>
        
        <div style={chatArea}> 

        </div>
        <form onSubmit={this.sendMessage} style={chatSubmit}>
            <input type="text" placeholder="Message here..." style={{width: "100%"}} onChange={(e) => this.setState({message: e.target.value})}/>
            <input type="submit" placeholder="Send" style={{width: "100%"}}/>
        </form>

      </div>
    );
  }
}

const chatSubmit : CSS.Properties = {
    width: "25vw"
}

const chatArea : CSS.Properties = {
    height: "50vh",
    width: "25vw",
    backgroundColor: "white"
};
