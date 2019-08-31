import React from 'react'
import spinner from './spinner.gif'
import loader from './loader.gif'
function Spinner() {
  return (
    <div>
      <img
        src={loader}
        style={{ width: '400px',height:'300px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner