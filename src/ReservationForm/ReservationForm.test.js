import React from 'react';
import ReservationForm from './ReservationForm';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ReservationForm', () => {

  it('Should render a header, paragraph, and button', () => {
    //Setup
    const { getByLabelText, getByRole } = render(<ReservationForm />)
  

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
  })

  

})