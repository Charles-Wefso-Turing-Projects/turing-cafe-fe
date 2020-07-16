import React, { Component} from 'react';
import ReservationContainer from '../ReservationContainer/ReservationContainer';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  // Handle input change
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name] : value})
  }

  // Reset State
  resetState = () => {
    this.setState({
      name : "",
      date : "",
      time: "",
      number: ""
    })
  }

  // Handle submit
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.createNewReservation(this.state);
      this.resetState();
    }

  render (){
    const {name, date, time, number} = this.state;
    return(
      <form onSubmit = {this.handleSubmit}>
        <input
          aria-label="name-input"
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange = {this.handleChange}
        />
        <input 
          aria-label="date-input"
          type="text"
          name="date"
          value={date}
          placeholder="date"
          onChange= {this.handleChange}
        />
        <input 
          aria-label="time-input"
          type="text"
          name="time"
          value={time}
          placeholder="time"
          onChange= {this.handleChange}
        />
        <input 
          aria-label="number-input"
          type="number"
          name="number"
          value={number}
          placeholder="number"
          onChange= {this.handleChange}
        />
        <button>Make Reservation</button>
    </form>
    )
  }

}

export default ReservationForm;