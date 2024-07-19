import React from 'react'
import "./O2.css";
import Sta1 from "./Sta1.png";
import Sta2 from "./Sta2.png";
import Sta3 from "./Sta3.png";


function O2() {
  return (
<div className="o2">
  <div className="k2">
    <div className="left2">
    <p className='stats-txt'>Przedstawiam tylko kilka 
      <br></br>przykładowych 
      <br></br>statystyk </p>
      <p className='small-txt2'></p>
      </div>
      <div className="right2">
        <img className='foto' src = {Sta1}></img>
        <img className='foto' src = {Sta2}></img>
        <img className='foto' src = {Sta3}></img>
      </div>
  </div>
</div>
  )
}

export default O2