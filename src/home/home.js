import React, { useContext } from "react";
import Search from "./search";
import Quicksearchitem from "./quicksearchitem";
import Footer from "../footer/footer";
import { UserContext } from "../providers/userprovider";

const Home = (props) => {
  const user = useContext(UserContext);
  const handleRestaurent = (data) => {
    if (user) {
      props.history.push(`/rest/${data}`);
    } else {
      alert("please login to continue");
    }
  };
  return (
    <React.Fragment>
      <Search
        restid={(data) => {
          handleRestaurent(data);
        }}
      />
      <Quicksearchitem />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
