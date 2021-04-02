import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom'

export const Chat = ( {name, message, timestamp, profilePic}) => {
    return (
        <Link to={`/message/${name}`}>
            <div className="flex justify-between items-center p-3 h-20 border-b-2 border-gray-300 md:w-2/4 md:m-auto md:mt-5">
                <Avatar src={profilePic} alt={name} className="mr-5" />
                <div className="flex-1">
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-gray-400">{message}</p>
                </div>
                <p className="text-gray-400">{timestamp}</p>
            </div>
        </Link>
    )
}
