import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import App from './App';
// import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
// jest.mock('../apiCalls')

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should be able to fill out and submit the reservation form, and add a reservation to the page', () => {

  const createNewReservation = jest.fn()
  //Setup
  //render the app component and post compnent
  const { getByDisplayValue, getByText, getByRole, getByLabelText } = render(<App createNewReservation={createNewReservation}/>)


  //Execute
  //grab the elements
  const nameInput = getByLabelText("name-input");
  const dateInput = getByLabelText("date-input");
  const timeInput = getByLabelText("time-input");
  const numberInput = getByLabelText("number-input");
  const submitButton = getByRole('button')

  expect(nameInput).toBeInTheDocument()
  expect(dateInput).toBeInTheDocument()
  expect(timeInput).toBeInTheDocument()
  expect(numberInput).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()


  //when submit is clicked a function should be called
  fireEvent.change(nameInput, { target: { value: 'Nichelle Nichols' } });
  fireEvent.change(dateInput, { target: { value: '12/28/2021' } });
  fireEvent.change(timeInput, { target: { value: '12:00'} });
  fireEvent.change(numberInput, { target: { value: "12" } });
  
  fireEvent.click(submitButton)

  expect(getByText('Nichelle Nichols', {exact: false})).toBeInTheDocument()
  expect(getByText('12:00', {exact: false})).toBeInTheDocument()
  expect(getByText('Guests: 12')).toBeInTheDocument()

});
