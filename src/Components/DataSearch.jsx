import React from 'react'

const DataSearch = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("bshbh");
    }
  return (
    <>
      
        <div className='h-10 w-80 border-2 flex items-center'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search data' />

                <button>
                    icon
                </button>
            </form>
        </div>

    </>
  )
}

export default DataSearch
