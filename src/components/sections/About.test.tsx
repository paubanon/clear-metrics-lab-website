import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About Component", () => {
  it("renders the about section heading", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("displays PhD background information", () => {
    render(<About />);
    const phdElements = screen.getAllByText(/PhD/i);
    expect(phdElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/theoretical physics with a deep obsession/i)).toBeInTheDocument();
    expect(screen.getByText(/general relativity based on Clifford algebras/i)).toBeInTheDocument();
  });

  it("displays Enso Movers startup information", () => {
    render(<About />);
    const ensoElements = screen.getAllByText(/Enso Movers/i);
    expect(ensoElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/9 years teaching hundreds of customers/i)).toBeInTheDocument();
  });

  it("displays personal mission and values", () => {
    render(<About />);
    const learningElements = screen.getAllByText(/learning/i);
    expect(learningElements.length).toBeGreaterThan(0);
    const dataElements = screen.getAllByText(/data analysis/i);
    expect(dataElements.length).toBeGreaterThan(0);
  });

  it("includes a professional photo placeholder", () => {
    render(<About />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt");
  });

  it("includes a call-to-action link", () => {
    render(<About />);
    const ctaLink = screen.getByRole("link");
    expect(ctaLink).toBeInTheDocument();
  });

  it("has proper semantic section structure", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "about");
  });
});
