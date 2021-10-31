import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const SinglePackage = (props) => {
  const { _id, name, img, location, price } = props.pkg;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/package/${_id}`);
  };
  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", height: "500px", borderRadius: "15px" }}
          className="p-4 text-center"
        >
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{location}</Card.Text>
          </Card.Body>
          <Card.Text>
            <p className="text-dark fw-bold">BDT {price}</p>
          </Card.Text>
          <Button
            onClick={handleClick}
            className="text-center p-2"
            style={{
              border: 0,
              // backgroundColor: "#105bb2",
              backgroundColor: "#2e7d32",
              color: "white",
              fontWeight: 500,
            }}
          >
            Book Now
          </Button>
          {/* <Button
            onClick={() => handleClick(_id)}
            className="text-center p-2"
            style={{
              border: 0,
              backgroundColor: "#105bb2",
              color: "white",
              fontWeight: 500,
            }}
          >
            Package Details
          </Button> */}
        </Card>
      </Col>
    </div>
  );
};

export default SinglePackage;
