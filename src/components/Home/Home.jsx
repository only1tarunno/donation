import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import { useState } from "react";
const Home = () => {
  const [name, setname] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setname(event.target.name.value);
  };

  return (
    <div>
      <Banner handleSubmit={handleSubmit}></Banner>
      <Posts name={name}></Posts>
    </div>
  );
};

export default Home;
