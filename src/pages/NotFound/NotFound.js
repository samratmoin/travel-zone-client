import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <Container className="text-center py-5">
        <h3 className="display-4">Page not found</h3>
        <p className="display-5">Don't ask me about this page.</p>
      </Container>
    </div>
  );
};

export default NotFound;
