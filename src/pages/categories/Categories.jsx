import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/layout/Layout";

const Categories = () => {
  const { categories } = useParams();

  useEffect(() => {
    fecthNewsCategories();
  }, []);

  const fecthNewsCategories = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        console.log(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Layout>{categories}</Layout>;
};

export default Categories;
