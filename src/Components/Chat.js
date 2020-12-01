import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile } from '@material-ui/icons';
import React from 'react';
import './Chat.css';



function Chat() {


    const sendMessage = (e) => {

    };
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/identicon/123.svg`} />
                <div className="chat-header-info">
                    <h3>{roomName}</h3>
                    <p>Last Seen ...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {messages.map(message => (
                    <p className={`chat-message "chat-reciever"}>
                        <span className="chat-name">name</span>
                        message
                        <span className="chat-timestamp">time</span>
                    </p>
                ))}

            </div>
            <div className="chat-footer">
                <InsertEmoticonIcon />
                <form onSubmit={sendMessage}>
                    <input value={} onChange={'do somthing;} type="text" />
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;
