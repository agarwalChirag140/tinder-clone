import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { BiMessageRounded } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io"

export const Header = ( { backButton }) => {
    return (
        <div className="flex md:justify-center md:justify-evenly mt-4 justify-between mr-2 ml-2">
            {
                backButton ? <Link to={`${backButton}`}><IoIosArrowBack className="text-4xl text-gray-400" /></Link> : <Link to="/profile"><FaUserAlt className="text-4xl text-gray-400" /></Link>
            }
            <Link to="/"><img src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder_logo" className="w-8 h-8" /></Link>
            <Link to="/message"><BiMessageRounded className="text-4xl text-gray-400" /></Link>
        </div>
    )
}
