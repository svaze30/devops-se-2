// src/LoginPage.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  useNavigate: () => vi.fn(),
}));

describe("LoginPage Component", () => {
  beforeEach(() => {
    // Clear localStorage mock
    localStorage.clear();
  });

  // Test 1: Component Renders
  it("renders login form successfully", () => {
    render(<LoginPage />);
    expect(document.querySelector("form")).toBeInTheDocument();
  });

  // Test 2: Contains Required Fields
  it("contains email and password fields", () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  // Test 3: Has Submit Button
  it("has a submit button", () => {
    render(<LoginPage />);
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  // Test 4: Handles Input Changes
  it("updates input values on change", () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  // // Test 5: Form Submission
  // it("handles form submission", async () => {
  //   const mockNavigate = vi.fn();
  //   vi.mocked(useNavigate).mockReturnValue(mockNavigate);

  //   render(<LoginPage />);
  //   const form = screen.getByRole("form");

  //   fireEvent.submit(form);
  //   expect(true).toBe(true);
  // });
});
