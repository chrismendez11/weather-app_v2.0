import React from 'react'
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className='loading-container'>
      <div className="loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
      <h2 className='loading__access-loc'>Make sure to accept the required permissions</h2>
    </div>
  )
}

export default Loading