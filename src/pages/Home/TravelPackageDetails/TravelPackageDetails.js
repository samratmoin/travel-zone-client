import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAPI from "../../../hooks/useAPI";

const TravelPackageDetails = () => {
  const { packageId } = useParams();
  const { packages } = useAPI();
  const [singlePackage, setSinglePackage] = useState({});

  useEffect(() => {
    const foundPackage = packages?.find((pkg) => pkg._id == packageId);
    setSinglePackage(foundPackage);
  }, [packages, packageId]);

  const checkoutHandler = () => {
    const orderData = {
      // email: loggedInUser.email,

      name: singlePackage?.name,
      location: singlePackage?.location,
      price: singlePackage?.price,
    };
    axios
      .post("https://shrieking-grave-65394.herokuapp.com/order", orderData)
      .then((res) => {
        res.data();
        // && history.push("/orders")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <div className="col-lg-6">
            <div>
              <img src={singlePackage?.img} alt="" />
              <h2 className="mt-3">{singlePackage?.name}</h2>
              <p>
                <i class="fas fa-map-marker-alt text-success pe-2"></i>
                {singlePackage?.location}
              </p>
              <h5>
                <i class="fas fa-money-check-alt text-primary pe-2"></i>
                BDT {singlePackage?.price}
              </h5>

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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TravelPackageDetails;
