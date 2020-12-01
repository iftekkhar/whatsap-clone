import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../Assets/firebase';
import './SidebarChat.css';
import AddIcon from '@material-ui/icons/Add';

const SidebarChat = ({ id, name, addNewChat }) => {

    return (
        
            <div className="sidebar-chat">
                <Avatar src={`https://avatars.dicebear.com/api/identicon/${id}.svg`} />
                <div className="sidebar-chat-info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>

            </div>
        
    ) 
          
};

export default SidebarChat;
