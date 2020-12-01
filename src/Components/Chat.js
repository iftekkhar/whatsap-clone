import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import db, { serverTime } from '../Assets/firebase';
import { UserContext } from '../App';
import firebase from 'firebase';



function Chat() {
    //LoggedIn User State
    const [loggedInUser] = useContext(UserContext);
    const [input, setInput] = useState('');
    const { roomID } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (roomID) {
            db.collection('rooms')
                .doc(roomID)
                .onSnapshot(snapshot => (
                    setRoomName(snapshot.data().name)
                ));
            db.collection('rooms').doc(roomID)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data()))
                );
        }
    }, [roomID]);

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms')
            .doc(roomID)
            .collection('messages')
            .add({
                message: input,
                name: loggedInUser.name,
                email: loggedInUser.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            });
        setInput('');
    };
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/identicon/${roomID}.svg`} />
                <div className="chat-header-info">
                    <h3>{roomName}</h3>
                    <p>Last Seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
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
                    <p className={`chat-message ${message.email === loggedInUser.email && "chat-reciever"}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}

            </div>
            <div className="chat-footer">
                <InsertEmoticonIcon />
                <form onSubmit={sendMessage}>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;