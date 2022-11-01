import React from "react";

import { AiOutlineMessage } from 'react-icons/ai';
import { IoIosCall } from 'react-icons/io';



export default function ButtonsPanel() {

    return (

        <div className="flex space-x-2 mt-2">
            

            <div className="p-3 h-11 ripple-bg-sky-400 border rounded-xl flex basis-1/2 relative">

                <AiOutlineMessage className="absolute" style={{ color: 'white', size: '50px' }}></AiOutlineMessage>

                <div className="text-white text-sm leading-4 font-medium grow flex justify-center items-center">
                    Сообщение
                </div>

            </div>


            <div className="p-3 h-11 ripple-bg-blue-800 border rounded-xl flex basis-1/2 relative">

                <IoIosCall className="absolute" style={{ color: 'white', size: '50px' }}></IoIosCall>

                <div className="text-white text-sm leading-4 font-medium grow flex justify-center items-center">
                    Звонок
                </div>

            </div>


        </div>
    )
}
