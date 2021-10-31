// import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { GetContext } from "../../../contexts/ContextProvider";

const TravelPackage = (props) => {
  // const { setPackageId } = useContext(AuthContext);
  // const { setCheckoutId } = useContext(AuthContext);
  const { setCheckoutId } = GetContext();
  const { _id, name, img, location, price } = props.pkg;
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push(`/package/${id}`);
  // };
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

          <Link to="/checkout">
            <Button
              onClick={() => setCheckoutId(_id)}
              style={{
                backgroundColor: "#2e7d32",
                color: "#fff",
                fontWeight: 500,
                fontSize: 20,
                border: "none",
              }}
            >
              Book Now
            </Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default TravelPackage;
