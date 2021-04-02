import React from 'react'
import { MdReplay } from "react-icons/md"
import { AiOutlineClose} from "react-icons/ai"
import { GrFavorite } from "react-icons/gr"
import { TiFlashOutline } from "react-icons/ti"
import { AiOutlineStar } from "react-icons/ai"

export const SwipeButton = () => {
    return (
        <div className="flex md:justify-center md:mt-100">
            <div className="p-3 text-2xl rounded-full bg-red-700"><MdReplay className="shadow-2xl" /></div>
            <div className="ml-10 p-3 text-2xl rounded-full bg-yellow-500 shadow-2xl"><AiOutlineStar  /></div>
            <div className="ml-10 p-3 text-2xl rounded-full bg-blue-500"><AiOutlineClose /></div>
            <div className="ml-10 p-3 text-2xl rounded-full bg-green-600"><GrFavorite /></div>
            <div className="ml-10 p-3 text-2xl rounded-full bg-purple-700"><TiFlashOutline /></div>
        </div>
    )
}
