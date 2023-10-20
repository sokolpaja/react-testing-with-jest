import { render, screen } from "@testing-library/react";
import SignUp from ".";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// test("sign up button is initially disabled", () => {
//   render(<SignUp />);
//   const signUpBtn = screen.getByRole("button", {
//     name: /sign up/i,
//   });
//   expect(signUpBtn).toBeDisabled();
// });

// test with test function

it("when full name input is entered the test btn is enabled", async () => {
  render(<SignUp />);
  const input = screen.getByRole("textbox");

  // key important to test an user event user to await the state changes
  await act(async () => await userEvent.type(input, "kol paja"));

  const testBtn = await screen.findByRole("button", { name: /test/i });
  expect(testBtn).toBeEnabled();
});

it("when name and same password was entered the btn is enabled", async () => {
  render(<SignUp />);

  const fullName = "kol paja";
  const password = "Test@123";
  const confirmPassword = "Test@123";

  const input = screen.getByRole("textbox");

  const passwordInput = screen.getByTestId("data-password");
  const confirmPasswordInput = screen.getByTestId("data-confirm");

  await act(async () => await userEvent.type(input, fullName));
  await act(async () => await userEvent.type(passwordInput, password));
  await act(
    async () => await userEvent.type(confirmPasswordInput, confirmPassword)
  );
  //   screen.getByRole("");
  const signUpBtn = screen.getByRole("button", {
    name: /sign up/i,
  });

  expect(signUpBtn).toBeEnabled();
});
