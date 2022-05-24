// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/layout/Layout";
import { TitleCategory, TitleCategoryLoad } from "../../components/titelcategory/TitleCategory";
import { CardNewsHorizontal, CardNewsHorizontalLoad } from "../../components/cardnewshorizontal/CardNewsHorizontal";
import { reduxAction } from "../../utils/redux/actions/actions";

const Categories = () => {
  const dispatch = useDispatch();
  const newsCategories = useSelector((state) => state.newsCategories);
  const [load] = useState([1, 2, 3, 4, 5]);
  const loading = useSelector((state) => state.loading);
  const { categories } = useParams();

  useEffect(() => {
    fecthNewsCategories();
  }, [categories]);

  const fecthNewsCategories = async () => {
    dispatch(reduxAction("FETCH_START"));
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        dispatch(reduxAction("FETCH_NEWS_CATEGORIES", ress.data.articles));
      })
      .catch((err) => {
        dispatch(reduxAction("FETCH_FAILURE"));
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="py-5 px-4 lg:px-0 lg:container mx-auto">
        <div className="mt-5">{!loading ? <TitleCategory titleHeader={categories} /> : <TitleCategoryLoad />}</div>
        <div className="w-full flex flex-wrap gap-3 justify-between">
          {!loading
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
