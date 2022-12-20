import React from "react";
import { logRoles, prettyDOM, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render(<App />);
  const { container } = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  // 先使用 prettyDOM 後再 console
  console.log(prettyDOM(linkElement));
  logRoles(container);
});
