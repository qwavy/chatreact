import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://10.13.6.63:7000')

const Chat = () => {
    const [room, setRoom] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messagesList, setMessagesList] = useState([]);

    const join = () => {
        if (room !== '') {
            socket.emit('join_room', room)
        }
    }

    const sendMessage = () => {
        socket.emit('send_message', { message, room })
        setMessagesList(oldArr => [...oldArr, { message, room }]);
        console.log(username)
    }

    useEffect(() => {
        socket.on('receive_message', data => {
            setMessagesList(oldArr => [...oldArr, data]);
        })
    }, [socket])

    return (
        <div>   <div>
            <input onChange={e => setRoom(e.target.value)} placeholder='room...' />
            <input onChange={e => setUsername(e.target.value)} placeholder='username...' />
            <button onClick={join}>Join</button>
        </div>
            <input
                onChange={e => setMessage(e.target.value)}
                placeholder='message...' />
            <button onClick={sendMessage}>Send</button>
            <div>
                <h2>Messages</h2>
                {messagesList.map(message => (
                    <div style={{ border: '1px solid black', margin: '0.5rem' }}>
                        <p>{message.message}{username}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Chat