import React from "react";
import { Container } from "react-bootstrap";
import SearchInput from "../components/SearchInput";
import NavbarComponents from "../../src/components/NavbarAfterLogin/Navbar2";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import gambarA7x from "../assets/img/a7x.png";

import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ResultAfterLogin = () => {
  return (
    <main className="d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
      <NavbarComponents login />

      <Container className="d-flex justify-content-center align-items-center gap-5 mt-5">
        <div className="d-grid g-3 gap-3">
          <SearchInput className="mt-0" />

          <Row>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/*  */}

          <Row>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  width: "18rem",
                  height: "100%",
                  borderColor: "#4f4cee",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Card.Img variant="top" src={gambarA7x} />
                <Card.Body>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#4f4cee",
                    }}
                  >
                    Concert Music
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
                      May 25
                    </p>

                    <div>
                      <Card.Title style={{ fontSize: "14px" }}>
                        Avenged Sevenfold
                      </Card.Title>
                      <p style={{ fontSize: "13px" }}>
                        Rp. 1.600.000 - 2.600.000
                      </p>

                      <p style={{ fontSize: "13px", marginTop: "-7%" }}>
                        <CiLocationOn />
                        Stadion Madya GBK
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </main>
  );
};

export default ResultAfterLogin;
