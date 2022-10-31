import React from "react";

import { BsFillPinMapFill } from 'react-icons/bs';


export default function MapButton() {

    return (
        <div className="p-3 h-11 bg-blue-400 border-2 rounded-xl">

            <BsFillPinMapFill className="absolute" style={{ color: 'white', size: '50px' }}></BsFillPinMapFill>

            <div className="text-white text-sm leading-4 font-medium flex justify-center items-center">
                Посмотреть на карте
            </div>
        </div>
    )
}
