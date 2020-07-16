import React from "react";
import Reservation from "./Reservation";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Reservation", () => {

  it("should display a name, time and number of guests", () => {
    const reservation = {
      id : "475430",
      name  : "Leonard Nimoy",
      number : 42,
      time : "5:30"
    }

    const { getByText } = render(
      <Reservation reservation = {reservation}/>
    )
      
    const name = getByText("Leonard Nimoy", {exact: false})
    const number = getByText("42", {exact: false});
    const time = getByText("5:30", {exact: false});

    expect(name).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(time).toBeInTheDocument(); 
  })

})