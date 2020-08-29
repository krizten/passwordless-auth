import React from "react";
import Layout from "./Layout";

const Loader = () => {
  return (
    <Layout hideHeader={true}>
      <div className="atom-spinner">
        <div className="spinner-inner">
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
    </Layout>
  );
};

export default Loader;
