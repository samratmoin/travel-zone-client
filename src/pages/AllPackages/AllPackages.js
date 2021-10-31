import { Container, Row } from "react-bootstrap";
import useAPI from "../../hooks/useAPI";
import SinglePackage from "../SinglePackages/SinglePackage";

const AllPackages = () => {
  const { packages } = useAPI();

  return (
    <div>
      <Container className="py-5 top-courses">
        <div className="text-center text-dark py-5">
          <h1 className="display-3">Destinations travelers love</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-3">
          {packages.map((pkg) => (
            <SinglePackage key={pkg.id} pkg={pkg}></SinglePackage>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllPackages;
