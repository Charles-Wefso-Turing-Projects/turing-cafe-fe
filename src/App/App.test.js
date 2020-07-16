import React from 'react';
import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('ReservationForm', () => {

  it('should be able to fill out and submit the reservation form, and add a reservation to the page', () => {

    const createNewReservation = jest.fn();

    const { getByText, getByRole, getByLabelText } = render(<App createNewReservation={createNewReservation}/>)

    const nameInput = getByLabelText("name-input");
    const dateInput = getByLabelText("date-input");
    const timeInput = getByLabelText("time-input");
    const numberInput = getByLabelText("number-input");
    const submitButton = getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'Nichelle Nichols' } });
    fireEvent.change(dateInput, { target: { value: '12/28/2021' } });
    fireEvent.change(timeInput, { target: { value: '12:00'} });
    fireEvent.change(numberInput, { target: { value: "12" } });
    
    fireEvent.click(submitButton);

    expect(getByText('Nichelle Nichols', {exact: false})).toBeInTheDocument();
    expect(getByText('12:00', {exact: false})).toBeInTheDocument();
    expect(getByText('Guests: 12')).toBeInTheDocument();

  });
  
})
