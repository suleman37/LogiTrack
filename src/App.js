import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./Components/Footer/Footer";
import Collection from "./Components/Collection/Collection";
import LazyLoad from "react-lazyload";

const App = () => {
  return (
    <>
      <Navbar />
      <LazyLoad>
        <Collection />
      </LazyLoad>
      <Footer />
    </>
  );
};

export default App;
