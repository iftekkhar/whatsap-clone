import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from '../Assets/firebase'
import { UserContext } from '../App';

const Sidebar = () => {

    useEffect(() => {
       
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={loggedInUser.image} />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchIcon />
                    <input placeholder="search or start a new chat" type="text" />
                </div>

            </div>

            <div className="sidebar-chats">
                <SidebarChat addNewChat />
              
            </div>
        </div>
    );
};

export default Sidebar;
