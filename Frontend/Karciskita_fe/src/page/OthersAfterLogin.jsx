import React from "react";
import { Container } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import Navbar2 from "../../src/components/NavbarAfterLogin/Navbar2";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambarA7x from "../assets/img/a7x.png";

import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
import { workshops } from "../constants";
const OthersAfterLogin = () => {
  return (
    <main className="d-flex flex-column">
      <Navbar2 />

      <Container className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="d-grid g-3 gap-3">
          <SearchInput className="mt-0" />

          <ul className="list-unstyled d-flex gap-3 justify-content-between flex-wrap">
            {workshops.map((item) => {
              return (
                <li key={item.id}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "100%",
                      borderColor: "#4f4cee",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#4f4cee",
                        }}
                      >
                        Workshop
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: "3rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p
                          style={{
                            width: "2.5rem",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "border",
                          }}
                        >
                          {item.date}
                        </p>

                        <div>
                          <Card.Title style={{ fontSize: "14px" }}>
                            {item.title}
                          </Card.Title>
                          <p style={{ fontSize: "13px" }}>
                            Rp. {item.minPrice} - {item.maxPrice}
                          </p>

                          <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                            <CiLocationOn />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </li>
              );
            })}
          </ul>
          {/*  */}
        </div>
      </Container>

      <Footer />
    </main>
  );
};

export default OthersAfterLogin;
