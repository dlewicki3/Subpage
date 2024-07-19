import React from 'react'
import "./O3.css";
import Sta4 from "./Sta4.png";
import Sta5 from "./Sta5.png";
import Sta6 from "./Sta6.png";

function O3() {
  return (
    <div className="o3">
        <div className="k3">
<div className="left3">
    <img className='foto3' src={Sta4}></img>
    <img className='foto3' src={Sta5}></img>
    <img className='foto3' src={Sta6}></img>
</div>
<div className="right3">
    <div className="top3">
    <p className='big-txt3'>Przykładowa liczba odbiorców</p>
    <br></br>
    </div>
    <div className="bottom3">
    <p className='small-txt3'>Przykładowa liczba odbiorców to tylko część sukcesu. Prawdziwą sztuką jest wyjście poza grono swoich stałych obserwujących i dotarcie do osób, które jeszcze nie śledzą konta.</p>
    </div>
</div>
        </div>
    </div>
  )
}

export default O3