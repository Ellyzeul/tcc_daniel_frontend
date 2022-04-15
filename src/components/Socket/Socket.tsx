import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';


export const Socket = () => {
    const socketUrl = 'ws://localhost:5000/ws/';
    const [messageHistory, setMessageHistory] = useState([] as MessageEvent<any>[]);
    const message = 'Hello'

    const {
        sendMessage,
        lastMessage,
    } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory(prev => prev.concat(lastMessage))
        }
    }, [lastMessage, setMessageHistory]);

    console.log(messageHistory)

    return (
        <>
            <p>{message}</p>
            {sendMessage(message)}
        </>
    )
}