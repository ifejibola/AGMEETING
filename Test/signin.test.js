const Signin = require("../client/login/signin");
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Signin from "../client/login/signin";

describe("handleSubmit function", () => {
  test("Email format Check", async () => {
    render(<Signin />);
    // get fields needed for test
    var email = screen.getElementById("email");
    var password = screen.getElementById("password");
    var submitButton = screen.getElementById("submit");
    var errorTxt = screen.getElementById("error");
    // invalid email
    email.value = "johny@apple";
    // enter two matching valid passwords
    password.value = "pass123";

    fireEvent.click(submitButton);

    expect(errorTxt.toHaveTextContext("Incorrect user or password try again"));
  });
});
