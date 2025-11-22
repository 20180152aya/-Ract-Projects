import React, { useState } from "react";
import Users from "../../users.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Data() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setREsult] = useState("");
  const [isSEarch, setReset] = useState(false);

  const handelSearch = () => {
    setREsult(searchTerm);
    setReset(true);

  };
  const handelREset = () => {
    setSearchTerm("");
    setREsult("");
    setReset(false)
  };
  const filteredUsers = Users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(result.toLowerCase()) ||
      user.lastName.toLowerCase().includes(result.toLowerCase()) ||
      user.email.toLowerCase().includes(result.toLowerCase())
  );
  return (
    <div className="py-4">
      <h1 className="text-center mb-4">Users Data</h1>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Enter Email or username"
          className="form-control w-50 me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      { !isSEarch ? (
         <Button variant="primary" onClick={handelSearch}>
          SEarch
        </Button>
      ): (
        <Button variant="secondary" onClick={handelREset}>
          REset
        </Button>)}
       

      </div>

      <Container>
        <Row>
          {filteredUsers.map((user, i) => (
            <Col key={i} xs={12} md={4} className="mb-3">
              <Card
                className="shadow-sm"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "2px solid #007bff",
                }}
              >
                <Card.Img
                  variant="top"
                  src={user.image}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "200px",
                    margin: "10px auto",
                    border: "2px solid #007bff",
                  }}
                  alt={user.firstName}
                />
                <Card.Body>
                  {user.role === "admin" ? (
                    <Card.Title className="text-white p-2 bg-danger mb-3 text-center">
                      {user.role.toUpperCase()}
                    </Card.Title>
                  ) : user.role === "user" ? (
                    <Card.Title className="text-white text-center p-2 bg-success mb-3">
                      {user.role.toUpperCase()}
                    </Card.Title>
                  ) : (
                    <Card.Title className="text-white text-center p-2 bg-warning mb-3">
                      {user.role.toUpperCase()}
                    </Card.Title>
                  )}
                  <Card.Text className="mb-1">
                    <strong>Username:</strong> {user.firstName} {user.lastName}
                  </Card.Text>
                  <Card.Text className="mb-1">
                    <strong>Email:</strong> {user.email}
                  </Card.Text>
                  <Card.Text className="mb-1">
                    <strong>Phone:</strong> {user.phone}
                  </Card.Text>
                  <Card.Text className="mb-1">
                    <strong>Birth Date:</strong> {user.birthDate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Data;
