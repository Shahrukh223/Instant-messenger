import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
 
function SidebarChat( { addNewChat } ) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
           
        setSeed(Math.floor(Math.random() * 5000));
    
    }, []);

    const createChat = () => {

        const roomName = prompt("Please enter name for chat");

        if(roomName) {

            //TODO: add data base stuff

        }
 
    };

    return !addNewChat ? (
        <div className= 'sidebarChat'>
            <Avatar src= {'https://avatars.dicebear.com/api/human/' + seed +'.svg'}/> 

            <div className="sidebarChat_Info">

            <h2>Room name</h2>
            <p>Last Message...</p>

            </div>


        </div>

    ):(

        <div onClick= {createChat} className="sidebarChat">

            <h2>Add a New Chat</h2>

        </div>

    )

    
}

export default SidebarChat
