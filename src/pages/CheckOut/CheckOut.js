import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { GetContext } from "../../contexts/ContextProvider";

const CheckOut = () => {
  const history = useHistory();
  const { checkoutId } = GetContext();
  const [packageCheckout, setPackageCheckout] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://shrieking-grave-65394.herokuapp.com/packages/${checkoutId}`)
      .then((res) => {
        setPackageCheckout(res.data[0]);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [checkoutId]);

  const checkoutHandler = () => {
    const orderData = {
      // email: loggedInUser.email,

      name: packageCheckout.name,
      location: packageCheckout.location,
      price: packageCheckout.price,
    };
    axios
      .post("https://shrieking-grave-65394.herokuapp.com/order", orderData)
      .then((res) => {
        res.data && history.push("/orders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const headingStyle = {
    color: "#2e7d32",
    fontWeight: 700,
    fontSize: 20,
  };
  const rowStyle = {
    fontWeight: 500,
    fontSize: 20,
  };
  return (
    <div>
      <Container>
        <h2 className="display-5 text-dark py-3">Ordered Package</h2>
        <Table hover>
          <thead className="" style={headingStyle}>
            <tr>
              <th>Package Name</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowStyle}>{packageCheckout?.name}</td>
              <td style={rowStyle}>{packageCheckout?.location}</td>
              <td style={rowStyle}>{packageCheckout?.price}</td>
            </tr>
          </tbody>
        </Table>
        {/* <Button onClick={checkoutHandler} color="primary">
          Checkout
        </Button> */}
        <div style={{ textAlign: "right" }}>
          <Link to="/orders">
            <Button
              onClick={checkoutHandler}
              style={{
                backgroundColor: "#2e7d32",
                color: "#fff",
                fontWeight: 700,
                fontSize: 20,
                border: "none",
              }}
            >
              Book Now
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
