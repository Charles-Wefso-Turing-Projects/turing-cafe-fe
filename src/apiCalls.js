const url = "http://localhost:3001/api/v1/reservations"

export const getAllReservations = async () => {
  const response = await fetch(`${url}`)
  if (response.ok) {
    return await response.json();
  }
  console.log(response.statusText)
  throw response.statusText;
}

export const postReservation = async (reservation) => { 
  console.log(reservation)
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: reservation.name, date: reservation.date, time: reservation.time, number: reservation.number}),
  })
    if (response.ok) {
      return await response.json();
    }
    console.log(response.statusText)
      throw response.statusText;
}

export const deleteReservation = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE" })
    const data = await response;
    return data
}