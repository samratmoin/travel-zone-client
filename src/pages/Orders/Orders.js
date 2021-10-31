import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://shrieking-grave-65394.herokuapp.com/orders`)
      .then((res) => {
        setOrders(res.data);
        // setLoading(false)
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://shrieking-grave-65394.herokuapp.com/delete/${id}`)
      .then((res) => res.json)
      .then((data) => {
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
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
      <Container className="py-5">
        <>
          <Table hover size="lg">
            <thead style={headingStyle}>
              <tr>
                <th>Package Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td style={rowStyle}>{order?.name}</td>
                  <td style={rowStyle}>{order?.location}</td>
                  <td style={rowStyle}>${order?.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(order?._id)}
                      className="text-danger"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      </Container>
    </div>
  );
};

export default Orders;
