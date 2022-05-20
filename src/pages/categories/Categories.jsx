import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Categories = () => {
  const { categories } = useParams();
  return <Layout>{categories}</Layout>;
};

export default Categories;
