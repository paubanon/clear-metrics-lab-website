import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

describe("ContactForm Component", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it("renders all required form fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/app interest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("includes all app interest dropdown options", () => {
    render(<ContactForm />);

    const select = screen.getByLabelText(/app interest/i);
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    const optionTexts = options.map(opt => opt.textContent);

    expect(optionTexts).toContain("General Inquiry");
    expect(optionTexts).toContain("Workout Lab");
    expect(optionTexts).toContain("Vitamin D Tracker");
    expect(optionTexts).toContain("Other");
  });

  it("validates required fields before submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    // HTML5 validation should prevent submission
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("submits form data to webhook with all fields", async () => {
    const user = userEvent.setup();
    const mockWebhookUrl = "https://test.webhook.url";

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );

    render(<ContactForm webhookUrl={mockWebhookUrl} />);

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.selectOptions(screen.getByLabelText(/app interest/i), "Workout Lab");
    await user.type(screen.getByLabelText(/message/i), "I love your app!");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        mockWebhookUrl,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            email: "john@example.com",
            appInterest: "Workout Lab",
            message: "I love your app!",
          }),
        })
      );
    });
  });

  it("displays success message after successful submission", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Smith");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/sent!/i)).toBeInTheDocument();
    });
  });

  it("displays error message on failed submission", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Test User");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Test message");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it("clears form after successful submission", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    );

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

    await user.type(nameInput, "Clear Test");
    await user.type(emailInput, "clear@example.com");
    await user.type(messageInput, "Clear me!");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(messageInput.value).toBe("");
    });
  });

  it("prevents duplicate submissions", async () => {
    const user = userEvent.setup();

    global.fetch = vi.fn(() =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ ok: true } as Response), 100)
      )
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Dupe Test");
    await user.type(screen.getByLabelText(/email/i), "dupe@example.com");
    await user.type(screen.getByLabelText(/message/i), "Duplicate test");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);
    await user.click(submitButton); // Try to click again

    // Should only be called once despite two clicks
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
