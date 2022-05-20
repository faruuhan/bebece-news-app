// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import { TitleCategory, TitleCategoryLoad } from "../../components/titelcategory/TitleCategory";
import { CardNewsHorizontal, CardNewsHorizontalLoad } from "../../components/cardnewshorizontal/CardNewsHorizontal";

const Categories = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  const [load] = useState([1, 2, 3, 4, 5]);
  const [isReady, setIsReady] = useState(false);
  const { categories } = useParams();

  useEffect(() => {
    setIsReady(false);
    fecthNewsCategories();
  }, [categories]);

  const fecthNewsCategories = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        setNewsCategories(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  };

  return (
    <Layout>
      <div className="py-5 px-4 lg:px-0 lg:container mx-auto">
        <div className="mt-5">{isReady ? <TitleCategory titleHeader={categories} /> : <TitleCategoryLoad />}</div>
        <div className="w-full flex flex-wrap gap-3 justify-between">
          {isReady
            ? newsCategories?.map((news) => {
                return <CardNewsHorizontal news={news} />;
              })
            : load.map((load) => {
                return <CardNewsHorizontalLoad skeleton={load} />;
              })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
