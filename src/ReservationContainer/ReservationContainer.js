import React from 'react'
import Reservation from "../Reservation/Reservation";
import "./ReservationContainer.css"


const ReservationContainer = ({reservations}) => {

  const reservationCards = reservations.map((reservation) => (

        <Reservation
          id={reservation.id}
          key={reservation.id}
          name={reservation.name}
          number={reservation.number}
          time={reservation.time}
          />
    ));

  return (
    <section aria-label="all-reservations" className="allReservations">
      {reservationCards}
    </section>
  )
}

export default ReservationContainer