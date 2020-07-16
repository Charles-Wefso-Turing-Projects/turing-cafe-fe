const url = "http://localhost:3001/api/v1/reservations"

const getAllReservations = () => {
  return fetch(`${url}`)
  .then((res) => res.json())
}

export default getAllReservations