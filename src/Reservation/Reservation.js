import React from 'react'
import "./Reservation.css"

const Reservation = ({reservation, cancelReservation}) => {


  return (
    <section className="reservation">
      <h3>Name: {reservation.name}</h3>
      <p>Guests: {reservation.number}</p>
      <p>Time: {reservation.time}</p>
      <p>ID: {reservation.id}</p>
      <button onClick= {() => cancelReservation(reservation.id)}>Cancel</button>
    </section> 
  )

}

export default Reservation;