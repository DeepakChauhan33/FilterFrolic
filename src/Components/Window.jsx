import React, { useState } from 'react'




const Window = () => {

    const [showDetails, setShowDetails] = useState(false);


    return (
        <>

            <section className='font-sans'>

                {/* DELIVERY STATUS CARD */}

                <div className='p-3 shadow-md rounded-lg mt-5 border-[0.5px] border-gray-300'>
                    <div className=' w-full flex justify-center items-center '>

                        <div className='flex p-4 gap-4 items-center border-b-1'>


                            <div className='flex flex-col gap-1'>
                                <span className='text-sm'>
                                    🔍︎ Tracking Number
                                </span>

                                <p className='text-gray-500 pl-5'>
                                    ED756361018IN
                                </p>
                            </div>

                            <div>
                                <button className='bg-red-700 p-1 w-30 rounded-md text-white text-sm'>
                                    Delivery Failed
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col md:flex-row justify-between mt-5 gap-5'>
                        <div className='flex flex-col gap-1 rounded-lg'>
                            <p className='text-gray-600'>
                                Article Booked
                            </p>

                            <span>
                                09-10-2025,  10:35
                            </span>
                        </div>

                        <div className='flex flex-col gap-1 rounded-lg'>
                            <p className='text-gray-600'>
                                Expected Delivery
                            </p>

                            <span>
                                14-10-2025
                            </span>
                        </div>

                        <div className='flex flex-col gap-1 rounded-lg'>
                            <p className='text-gray-600'>
                                Current Status
                            </p>

                            <span className='text-red-700 '>
                                Return to Sender
                            </span>
                        </div>
                    </div>

                </div>


                {/* ALERT MESSAGE */}


                <div className='flex border-red-500 mt-5 border-[0.5px] p-3 rounded-lg bg-red-100 shadow-md'>

                    <div className='mr-1'>
                        ⚠️
                    </div>
                    <p className='text-[14px] text-red-700'>
                        Delivery Declined - Parcel Cannot Be Delivered
                        We were unable to deliver your parcel to the destination address. The delivery attempt has been declined due to address inaccessibility.
                    </p>
                </div>


                {/* RETURN TO SENDER DETAILS */}

                <div className=' flex p-3 shadow-md rounded-lg mt-5 border-[0.5px] border-yellow-200 gap-2 bg-yellow-50 font-sans text-sm'>
                    <span className=' text-2xl '>
                        ⟲
                    </span>

                    <div className='flex flex-col gap-1 text-[13px] p-1.5'>
                        <span className='font-normal'>
                            Returning to Sender
                        </span>

                        <p>
                            Your parcel is now being returned to the sender address. The sender will receive the package within 5-7 days.
                        </p>

                        <div className=' bg-gray-50 p-5 rounded-sm mt-2 border-[0.5px] border-gray-300 cursor-copy'>
                            <span className='text-[13px]'>
                                Return Address:
                            </span>

                            <p className='ml-3 mt-1'>
                                State : DELHI <br />
                                District : SOUTH WEST DELHI <br />
                                POST : Lorem ipsum dolor sit amet.

                            </p>
                        </div>

                    </div>

                </div>



                <div className='h-50 bg-amber-200'>

                    <p>
                        see Article Deteils 
                    </p>
                    <button
                        className='mt-4 bg-red-600 text-white px-4 py-2 rounded'
                        onClick={() => setShowDetails(true)}
                    >
                        Close
                    </button>
                    

                </div>

                {showDetails && (
                    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
                        <div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md'>
                            <h2 className='text-lg font-semibold mb-2'>Delivery Details</h2>
                            <p className='text-sm text-gray-700'>
                                Your parcel could not be delivered. Please verify the address or contact support.
                            </p>
                            <button
                                className='mt-4 bg-red-600 text-white px-4 py-2 rounded'
                                onClick={() => setShowDetails(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </section>

        </>
    )
}

export default Window
