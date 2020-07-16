import React from 'react'
import Reservation from "../Reservation/Reservation";
import "./ReservationContainer.css"


const ReservationContainer = ({reservations, cancelReservation}) => {

  const reservationCards = reservations.map((reservation) => (

        <Reservation
          reservation={reservation}
          key={reservation.id}
          cancelReservation={cancelReservation}
          />
    ));

  return (
    <section aria-label="all-reservations" className="allReservations">
      {reservationCards}
    </section>
  )
}

export default ReservationContainer