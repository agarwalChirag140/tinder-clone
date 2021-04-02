import React from 'react'
import { Link } from 'react-router-dom'
import { Chat } from './Chat'

export const Chats = () => {
    return (
        <div>
            <Link to={`/message/:${"Sunder Pichai"}`}><Chat
             name="Sunder Pichai"
             message="Hey! how are you"
             timestamp="35 minutes ago"
             profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwoglABbyDLHOJQ8cw2HMl96cICGGKiqi8A&usqp=CAU" /></Link>
            
            <Link to={`/message/:${"Mark Zukercerg"}`}><Chat
             name="Mark Zuckerberg"
             message="Whats up?"
             timestamp="55 minutes ago"
             profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqBkTXbp2MO3PL5CEJZl3wlACk6wA6X9dMQ&usqp=CAU" /></Link>
            
            <Link to={`/message/:${"Elon Musk"}`}><Chat
             name="Elon Musk"
             message="Ola!"
             timestamp="3 days ago"
             profilePic="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" /></Link>

            <Link to={`/message/:${"Steve Jobs"}`}><Chat
              name="Steve Jobs"
              message="Oops there is he is..."
              timestamp="1 week ago"
              profilePic="https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg" /></Link>
        </div>
    )
}
