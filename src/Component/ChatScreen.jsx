import { Avatar } from '@material-ui/core'
import React from 'react'

export const ChatScreen = () => {
    const [messages, setMessages] = React.useState([
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwoglABbyDLHOJQ8cw2HMl96cICGGKiqi8A&usqp=CAU",
            message: "Whats up"
        },
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwoglABbyDLHOJQ8cw2HMl96cICGGKiqi8A&usqp=CAU",
            message: "Hows it going"
        },
        {
            message: "Hows it going "
        }
    ])

    const [input, setInput] = React.useState("")

    const handleSend = e => {
        e.preventDefault()

        setMessages([...messages, {message: input}])
        setInput("")
    }
    return (
        <div className="md:w-2/4 md:m-auto border-2 border-gray-200 shadow-2xl text-center md:mt-12 mr-2 ml-2">
            <p className="text-gray-400">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {
                messages.map((message) => {
                    return message.name ? (
                        <div className="flex items-center p-4">
                            <Avatar alt={message.name} src={message.image} />
                            <p className="ml-2 bg-gray-300 p-3 rounded-2xl">{message.message}</p>
                        </div>
                    ) : (
                        <div className="flex items-center p-4">
                            <p className="ml-auto bg-blue-600 p-3 rounded-2xl text-white">{message.message}</p>
                        </div>
                    )
                })
            }

            <div>
                <form className="flex h-10 border-t-2 border-gray-200">
                    <input placeholder="Type a message..." className="w-full pl-4" value={input} onChange={e => setInput(e.target.value)} />
                    <button type="submit" onClick={handleSend} className="p-2 font-bold text-red-400">SEND</button>
                </form>
            </div>
        </div>
    )
}
