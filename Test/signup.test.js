import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Signup from "../client/login/signup";

describe("handleSubmit function", () => {
  test("Email format Check", async () => {
    render(<Signup />);
    // get fields needed for test
    var email = screen.getElementById("email");
    var password = screen.getElementById("password");
    var passwordAgain = screen.getElementById("passwordAgain");
    var submitButton = screen.getElementById("submit");
    var errorTxt = screen.getElementById("error");
    // invalid email
    email.value = "johny@apple";
    // enter two matching valid passwords
    password.value = "pass123";
    passwordAgain.value = "pass123";

    fireEvent.click(submitButton);

    expect(errorTxt.toHaveTextContext("Enter valid Email!"));
  });

  test("make sure non matching passwords throws an error", async () => {
    render(<signup />);
    // get fields needed for test
    var email = screen.getElementById("email");
    var password = screen.getElementById("password");
    var passwordAgain = screen.getElementById("passwordAgain");
    var submitButton = screen.getElementById("submit");
    var errorTxt = screen.getElementById("error");
    // invalid email
    email.value = "johny@apple.com";
    // enter two matching valid passwords
    password.value = "pas123";
    passwordAgain.value = "pass123";

    fireEvent.click(submitButton);

    expect(errorTxt.toHaveTextContext("Passwords must match"));
  });

  test("make sure empty password does not submit", async () => {
    render(<signup />);
    // get fields needed for test
    var email = screen.getElementById("email");
    var password = screen.getElementById("password");
    var passwordAgain = screen.getElementById("passwordAgain");
    var submitButton = screen.getElementById("submit");
    var errorTxt = screen.getElementById("error");
    // invalid email
    email.value = "johny@apple.com";
    // enter two matching valid passwords
    password.value = "pas123";
    passwordAgain.value = "pass123";

    fireEvent.click(submitButton);

    expect(errorTxt.toHaveTextContext("Please enter a password twice"));
  });
});
