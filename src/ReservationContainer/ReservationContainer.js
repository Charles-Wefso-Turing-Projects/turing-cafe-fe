import React from 'react'
import Reservation from "../Reservation/Reservation";
import "./ReservationContainer.css"


const ReservationContainer = ({reservations}) => {

  const reservationCards = reservations.map((reservation) => (

        <Reservation
          reservation={reservation}
          key={reservation.id}
          />
    ));

  return (
    <section aria-label="all-reservations" className="allReservations">
      {reservationCards}
    </section>
  )
}

export default ReservationContainer