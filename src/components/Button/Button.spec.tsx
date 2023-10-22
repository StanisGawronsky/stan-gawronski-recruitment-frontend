import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders a button with the provided label", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls the provided onClick handler when the button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByText("Click me");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies a custom CSS class when specified", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("custom-class");
  });

  it("has a default type of 'button'", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveAttribute("type", "button");
  });

  it("can have a different type when explicitly specified", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByText("Submit");
    expect(button).toHaveAttribute("type", "submit");
  });
});
