import React from 'react'
import logo_img from '../assets/IMG.png';
import spImg from '../assets/postImg.png';

const Header = () => {
    return (
        <>
            <header className='h-[13%] md:h-[16%] flex justify-between px-5 items-center gap-5 border-b-[0.5px] border-gray-300 rounded-b-md p-2.5'>
                <div className='w-17 h-18 md:h-30 md:w-40 bg-blue-200'>
                    <img
                        className='w-full h-full object-center'
                        src={logo_img}
                        alt="Govt Of India" />
                </div>

                <div className='w-29 h-22 md:h-30 md:w-40 bg-blue-200'>
                    <img
                        className='w-full h-full object-center'
                        src={spImg}
                        alt="Speed Post" />
                </div>



            </header>
        </>
    )
}

export default Header
