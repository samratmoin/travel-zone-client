import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddPackage.css";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://shrieking-grave-65394.herokuapp.com/packages", data)
      .then((res) => {
        console.log(res);
        reset();
      });
  };
  return (
    <div>
      <Container className="py-5">
        <div className="add-package">
          <h2 className="text-center">Please Add a Package</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="Name"
            />
            <input {...register("location")} placeholder="Location" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image url" />
            <input
              style={{
                backgroundColor: "#2e7d32",
                color: "#fff",
                fontWeight: 700,
                fontSize: 20,
                border: "none",
              }}
              type="submit"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddPackage;
