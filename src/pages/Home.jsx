import React from "react";
import { Layout } from "../components/Layout";
import data from "../data.json";
console.log("data", data);

const Home = () => {
  return (
    <Layout>
      <h1 className="text-primary-200">Home</h1>
    </Layout>
  );
};

export default Home;
