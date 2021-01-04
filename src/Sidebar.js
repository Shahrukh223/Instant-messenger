import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import {Avatar, Icon, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from '@material-ui/icons';

import SidebarChat from "./SidebarChat";
import db from './firebase';



function Sidebar() {

    const[rooms , setRooms] = useState([]);

    useEffect(() => {

        db.collection('Rooms').onSnapshot((snapshot) => 

            setRooms(snapshot.docs.map(doc => ({

                id: doc.id,
                data: doc.data(),

            }))
        )
    );
    },[]);

    return (
        <div className= "sidebar"> 
            <div className= "sidebar_header">
                <Avatar />
                <div className= "sidebar_headerRight">
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

            <div className= "sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder= "Search or Start a new Chat" type = "text"/>
                </div>
            </div>

            <div className= "sidebar_chats">
                
                <SidebarChat addNewChat/>
                {rooms.map(Rooms => (

                    <SidebarChat key= {Rooms.id} id = {Rooms.id} name={Rooms.data.name}/>

                ))}

            </div>
        </div>
    )
}

export default Sidebar
