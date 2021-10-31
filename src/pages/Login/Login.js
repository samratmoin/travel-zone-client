import React from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle, setUser, setError, setIsLoading } = useFirebase();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
    //   .catch((error) => {
    //     setError(error.message);
    //   });
  };
  const loginStyle = {
    backgroundColor: "#2e7d32",
    color: "#fff",
    fontWeight: 500,
    fontSize: 20,
    border: "none",
    padding: "10px 20px",
  };
  return (
    <div>
      <Container className="text-center py-5">
        <h2>Please Login</h2>
        <button onClick={handleGoogleSignIn} style={loginStyle}>
          Google Sign In
        </button>
      </Container>
    </div>
  );
};

export default Login;
