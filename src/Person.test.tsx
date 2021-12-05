import React from "react";
import { render, screen } from "@testing-library/react";

import { Person } from "./Person";

test("renders a name", () => {
  render(<Person name="Johan" />);
  // const divElement = screen.getByText(/Name is Johan/i);
  const divElement = screen.getByRole("contentinfo");
  // expect(divElement).toBeInTheDocument();
  expect(divElement).toHaveTextContent("Name is Johan");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
