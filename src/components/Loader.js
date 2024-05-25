import React from 'react'
import '../App.css'

function Loader() {
  return (
    <div style={{display:"flex", justifyContent:'center', margin:30, alignContent:'center', width:"100%"}}>
      <div className='spinner'>
      </div>
    </div>
  )
}

export default Loader