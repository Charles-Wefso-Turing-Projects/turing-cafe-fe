import React, { Component } from 'react';
import './App.css';
import { getAllReservations, postReservation } from "../apiCalls";
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

  // Add idea
  createNewReservation = (reservation) => {
    postReservation(reservation)
    const newReservation = { ...reservation, id : Date.now()}
    const reservations = [...this.state.reservations, newReservation];
    this.setState({ reservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm createNewReservation={this.createNewReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
