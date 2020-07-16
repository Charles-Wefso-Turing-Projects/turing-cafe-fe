import React, { Component } from 'react';
import './App.css';
import { getAllReservations, postReservation, deleteReservation } from "../apiCalls";
import ReservationContainer from "../ReservationContainer/ReservationContainer";
import ReservationForm from "../ReservationForm/ReservationForm";


class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getAllReservations().then(
      (result) => {
        this.setState({
          reservations: result
        });
      },
      (error) => {
        this.setState({
          error,
        });
      }
    );
  }

  createNewReservation = (reservation) => {
    postReservation(reservation)
    const newReservation = { ...reservation, id : Date.now()}
    const reservations = [...this.state.reservations, newReservation];
    this.setState({ reservations })
  }

  removeReservation = (id) => {
    const reservations= this.state.reservations.filter(reservation => id !== reservation.id);
    this.setState({ reservations });
  }

  cancelReservation = (id) => {
    this.setState({
      timeToUpdate : true
    })
    deleteReservation(id)
    this.removeReservation(id)
    console.log(`Reservation number ${id} has been cancelled.`)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm createNewReservation={this.createNewReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} cancelReservation= {this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
