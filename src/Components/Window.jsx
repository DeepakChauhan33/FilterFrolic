import React, { useState } from 'react'

import avn1 from "../assets/AVN1.JPG";
import avn2 from "../assets/AVN2.JPG";




const Window = () => {




    return (
        <>

            <section className='font-sans space-y-1.5 '>

                <div className='h-20 text-2xl font-extrabold text-center'>
                    AVINAV BETICHOOD
                </div>

                <div className='h-[100%]' >

                    <div className='h-[30%] w-[100%] '>
                        <img
                            className='h-full w-full object-cover'
                            src={avn1} alt="BKL" />
                    </div>
                    <div className='h-[30%] w-[100%] '>
                        <img
                            lassName='h-full w-full object-cover'
                            src={avn2} alt="GANDU" />
                    </div>

                </div>

                <p className='text-[20px] font-bold'>
                    Created by your father and Chacha
                </p>

            </section>

        </>
    )
}

export default Window
