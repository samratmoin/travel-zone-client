import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#2e7d32",
    color: "#fff",
  };
  return (
    <div style={footerStyle}>
      <Container className="py-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <h2>Travel Zone</h2>
            <p> Dhaka, Bangladesh</p>
            <p>Helpline : 01722267058 (Available : 10:00am to 5:00pm)</p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <table>
              <tr>
                <td>About us</td>
              </tr>
              <tr>
                <td>Contact us</td>
              </tr>
              <tr>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <td>Terms of Service</td>
              </tr>
            </table>
          </div>
          <p className="lead mt-5 text-center">Copyright © 2021 Travel Zone</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
