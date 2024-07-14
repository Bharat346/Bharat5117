import React, { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import "./loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <Oval
        visible={true}
        height="65"
        width="65"
        color="rgba(116, 22, 238, 0.936)"
        secondaryColor="rgba(116, 22, 238, 0.636)"
        ariaLabel="oval-loading"
        strokeWidth={5}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
