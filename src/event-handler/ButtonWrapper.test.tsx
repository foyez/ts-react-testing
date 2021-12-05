import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { ButtonWrapper } from "./ButtonWrapper";

test("renders a name", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);

  const buttonElement = screen.getByText(/Add Item/i);

  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
