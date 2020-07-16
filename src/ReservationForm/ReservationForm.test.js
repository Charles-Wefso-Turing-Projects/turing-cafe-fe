import React from 'react';
import ReservationForm from './ReservationForm';
import { render, fireEvent } from '@testing-library/react';
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

  it('Should be able to edit imput fields', () => {
    const { getByLabelText } = render(
      <ReservationForm />
    )
    const testValueName = 'William Shatner';
    const inputName = getByLabelText('name-input');

    const testValueDate = '07/17/2021';
    const inputDate = getByLabelText('date-input');

    const testValueTime = '10:00';
    const inputTime = getByLabelText('time-input');

    const testValueNumber = "10";
    const inputNumber = getByLabelText('number-input');
  
    fireEvent.change(inputName, { target: { value: testValueName } });
    fireEvent.change(inputDate, { target: { value: testValueDate } });
    fireEvent.change(inputTime, { target: { value: testValueTime } });
    fireEvent.select(inputNumber, { target: { value: testValueNumber } });
  
    expect(inputName.value).toEqual(testValueName);
    expect(inputDate.value).toEqual(testValueDate);
    expect(inputTime.value).toEqual(testValueTime);
    expect(inputNumber.value).toEqual(testValueNumber);
  });

})