import React, { Component, CSSProperties } from 'react';
import CSS from "csstype";
import axios from 'axios';
import {auth} from 'firebase';

interface Props {}

interface State {
    selectedChat: number,
    message: string,
    chatHistory: string,
    chats: any[]
}

export default class Chat extends Component<Props, State> {

    state = {
        selectedChat: -1,
        message: "",
        chatHistory: "",
        chats: []
    }

    componentDidMount() {

        axios.get('http://redpaperclip.online/getChats.php',{ params: {
            id: (auth().currentUser?.displayName === null ? auth().currentUser?.email : auth().currentUser?.displayName)
          }}).then((response) => {
            let chats: any = [];
              for (let i = 0; i < response.data.length; i++) {
                  chats.push(response.data[i]);
              }
              this.setState({chats: chats});
        });

        setInterval( () => {
            axios.get('http://redpaperclip.online/readChats.php',{ params: {
            chatId: this.state.selectedChat
          }}).then((response) => {
              this.setState({chatHistory: response.data});
            });
        }, 200);


    }

    sendMessage = (e: any) => {
        e.preventDefault();
        if (this.state.selectedChat !== -1) {
        this.setState({message: ""});
        axios.post('http://redpaperclip.online/addChatMessage.php', {
            chatId: this.state.selectedChat,
            sender: (auth().currentUser?.displayName === null ? auth().currentUser?.email : auth().currentUser?.displayName),
            message: this.state.message
          })
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        } 
    }


    setChat = (val) => {
        this.setState({selectedChat: val});
    };

  render() {
      let chats : any = [];
      if (this.state.chats.length > 0) {
        for (let i = 0; i < this.state.chats.length; i++) {
            chats.push(<div style={chatButton} onClick={() => this.setChat((this.state.chats[i] as any).chatId)}> <p> {(this.state.chats[i] as any).partner} </p></div>);
        }
      }
      
    return (
      <div>
          {chats}
        <div style={chatArea} dangerouslySetInnerHTML={{__html: 
        this.state.chatHistory}}/>
        
        <form onSubmit={this.sendMessage} style={chatSubmit}>
            <input type="text" ref="chatInput" placeholder="Message here..." style={{width: "100%"}} value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}/>
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
    backgroundColor: "white",
    overflowY: "scroll",
    overflowX: "hidden",
    overflowWrap: "normal"
};

const chatButton : CSS.Properties = {
    backgroundColor: "blue",
    padding: "8px 16px",
    margin: "8px",
    cursor: "pointer",
    color: "white",
    display: "inline-block"
}