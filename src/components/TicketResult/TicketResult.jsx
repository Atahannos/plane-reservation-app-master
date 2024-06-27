import React from 'react'
import "./TicketResult.css";
const TicketResult = (props) => {
    const {seat} = props
  return (
    <div className='ticket-result-div'>
        <h2>Koltuk No: {seat.number}</h2>
        <h2>{seat.passenger.name}</h2>
        <h2>{seat.passenger.surname}</h2>
        <h2>{seat.passenger.tcNo}</h2>
        <h2>{seat.passenger.gender === "male"?"Erkek":"Kadın"}</h2>
    </div>
  )
}

export default TicketResult