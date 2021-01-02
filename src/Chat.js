import { Avatar, IconButton } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { AttachFile, MoreVert,  SearchOutlined } from "@material-ui/icons"
import "./Chat.css"

function Chat() {

    const [seed, setSeed] = useState('');

    useEffect(() => {
           
        setSeed(Math.floor(Math.random() * 5000));
    
    }, []);

    return (
        <div className =  'chat'>
            <div className= 'chatHeader'>
                <Avatar src= {'https://avatars.dicebear.com/api/human/' + seed +'.svg'}/>
                <div className='chatHeader_info'>

                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>

                </div>

                <div className='chatHeader_right'>

                    <IconButton>

                        <SearchOutlined/>

                    </IconButton>

                    <IconButton>

                        <AttachFile/>

                    </IconButton>

                    <IconButton>

                        <MoreVert/>

                    </IconButton>

                </div>
            </div>

            <div className= 'chatBody'>

                <p className= {'chatMessage ${true && "chatReciever"}'}>
                <span className= "chatname ">Shahrukh Sadiq</span>
                
                Hey Guys, my name is Shahrukh
                <span className='timestamp'>

                    3.52pm

                </span>
                
                
                </p>

                

            </div>

            <div className= 'chatFooter'>



            </div>
        </div>
    )
}

export default Chat
