import { useEffect, useState } from "react";

const useAPI = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://shrieking-grave-65394.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return {
    packages,
    setPackages,
  };
};

export default useAPI;
