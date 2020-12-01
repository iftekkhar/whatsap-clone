import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../Assets/firebase';
import './SidebarChat.css';
import AddIcon from '@material-ui/icons/Add';

const SidebarChat = ({ id, name, addNewChat }) => {
    const [message, setMessage] = useState('')
    const createChat = () => {
        const roomName = prompt('Please enter name for chat');
        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    };
    useEffect(() => {
        db.collection('rooms').doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setMessage(snapshot.docs.map(doc => doc.data()))
            );
    }, [id]);
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebar-chat">
                <Avatar src={`https://avatars.dicebear.com/api/identicon/${id}.svg`} />
                <div className="sidebar-chat-info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>

            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebar-chat">
                <div className="add-new-user">
                    <h3>Add a New Person</h3>
                    <AddIcon />
                </div>

            </div>
        );
};

export default SidebarChat;