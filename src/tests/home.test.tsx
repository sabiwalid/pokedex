import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/home";
import "@testing-library/jest-dom";

// Mocking useNavigate hook
jest.mock("react-router", () => ({
  useNavigate: jest.fn(),
}));

describe("Home Component", () => {
  it("renders the Home page correctly", () => {
    render(<Home />);

    // Check if the form elements and buttons are present
    expect(screen.getByAltText("pokeball")).toBeInTheDocument();
    expect(screen.getByText("Pokemon Name or id")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Random")).toBeInTheDocument();
  });

  it("handles the input change", () => {
    render(<Home />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "pikachu" } });

    expect(input).toHaveValue("pikachu");
  });
});
