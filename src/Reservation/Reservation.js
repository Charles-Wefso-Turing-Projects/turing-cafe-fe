import React from 'react'
import "./Reservation.css"

const Reservation = ({id, name, number, time}) => {


  return (
    <section className="reservation">
      <h3>Name: {name}</h3>
      <p>Guests: {number}</p>
      <p>Time: {time}</p>
      <p>ID: {id}</p>
    </section> 
  )

}

export default Reservation;