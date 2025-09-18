import React from 'react'

const Condition = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("bshbh");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <option value=""></option>

          <button>
            icon
          </button>
        </form>
      </div>
    </>
  )
}

export default Condition
