import React, { Component } from 'react';
import './App.css';
import getAllReservations from "../apiCalls";

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: null
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
