import React, { useEffect } from "react";
import { useState } from "react";

const SignUp = () => {
  const [passwordInput, setPasswordInput] = useState("password");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledTest, setIsDisabledTest] = useState(true);
  const [data, setData] = useState({
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (
      data?.fullName?.length !== 0 &&
      data.confirmPassword.length &&
      data.password.length !== 0 &&
      data.confirmPassword === data.password
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

    if (data?.fullName?.trim().length > 0) {
      setIsDisabledTest(false);
    } else {
      setIsDisabledTest(true);
    }

    return () => {};
  }, [data]);

  return (
    <div className="sign-up">
      <h1>Register</h1>
      <form>
        <input
          name="fullName"
          value={data.fullName}
          placeholder="full name"
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />
        <input
          data-testid="data-password"
          name="password"
          type={passwordInput}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          data-testid="data-confirm"
          name="confirmPassword"
          type={passwordInput}
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />
        <label htmlFor="showPassword">
          <input
            type="checkbox"
            id="showPassword"
            onChange={(e) =>
              e.target.checked
                ? setPasswordInput("text")
                : setPasswordInput("password")
            }
          />
          Show Password
        </label>
        <button type="submit" disabled={isDisabled} name="sign-up">
          Sign Up
        </button>
        <button type="button" disabled={isDisabledTest}>
          test
        </button>
      </form>
    </div>
  );
};

export default SignUp;
