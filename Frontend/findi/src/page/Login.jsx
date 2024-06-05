import React from "react";
import NavbarComponents from "../../src/components/NavbarBefore/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import imgLogo from "../assets/img/login.png";

const Login = () => {
  return (
    <main>
      <NavbarComponents />

      <Container className="d-flex justify-content-between  align-items-center">
        <img src={imgLogo} alt="logo karcis" className="object-fit-contain" />

        <Form
          className="p-5 rounded-2 d-flex flex-column align-content-center justify-content-center"
          style={{
            border: "5px solid #4F4CEE",
            marginTop: "10%",
            width: "40%",
          }}
        >
          <h1 style={{ fontFamily: "Roboto Slab" }}>Login</h1>
          <Form.Group
            className="mb-3 mt-5"
            style={{ border: "1px solid #4F4CEE", borderRadius: "5px" }}
            controlId="formBasicEmail"
          >
            <Form.Control type="name" placeholder="Username" />
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{
              border: "1px solid #4F4CEE",
              borderRadius: "5px",
              fontFamily: "Roboto Slab",
            }}
            controlId="formBasicPassword"
          >
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="primary"
            className="w-100 mt-5 align-self-center"
            type="submit"
            style={{ backgroundColor: "#4F4CEE", fontFamily: "Roboto Slab" }}
          >
            <a
              href="/afterlogin"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Sign In
            </a>
          </Button>

          <p className="text-center mt-3 text-black">
            Doesn’t have account?{" "}
            <a
              href="/signup"
              style={{ color: "#4F4CEE", textDecoration: "none" }}
            >
              Sign Up
            </a>
          </p>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
