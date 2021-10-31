// import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useAPI from "../../../hooks/useAPI";
import TravelPackage from "../TravelPackage/TravelPackage";

const TravelPackages = () => {
  const { packages } = useAPI();
  //   const [packages, setPackages] = useState([]);

  //   useEffect(() => {
  //     fetch("/travel_packages.json")
  //       .then((res) => res.json())
  //       .then((data) => setPackages(data));
  //   }, []);

  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-dark py-5">
          <h1 className="display-3">Destinations travelers love</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-3">
          {packages.map((pkg) => (
            <TravelPackage key={pkg.id} pkg={pkg}></TravelPackage>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TravelPackages;
