import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout/Layout";
import { CardNewsVertical, CardNewsVerticalLoad } from "../../components/cardnewsvertical/CardNewsVertical";
import { TitleCategory, TitleCategoryLoad } from "../../components/titelcategory/TitleCategory";
import { CardNewsHorizontal, CardNewsHorizontalLoad } from "../../components/cardnewshorizontal/CardNewsHorizontal";
import axios from "axios";
import { reduxAction } from "../../utils/redux/actions/actions";

const Homepage = () => {
  const dispatch = useDispatch();
  const newsTopHeadLineID = useSelector((state) => state.newsTopHeadLineID);
  const newsID = useSelector((state) => state.newsID);
  const newsUS = useSelector((state) => state.newsUS);
  const newsUK = useSelector((state) => state.newsUK);
  const loading = useSelector((state) => state.loading);
  const [load] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNewsTopHeadLineID();
      await fetchNewsID();
      await fetchNewsUS();
      await fetchNewsUK();
    };
    fetchData();
    document.title = "Home / Bebece News";
  }, []);

  const fetchNewsTopHeadLineID = async () => {
    dispatch(reduxAction("FETCH_START"));
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        dispatch(reduxAction("FETCH_NEWS_HEADLINE_ID", ress.data.articles));
      })
      .catch((err) => {
        dispatch(reduxAction("FETCH_FAILURE"));
        console.log(err);
      });
  };

  const fetchNewsID = async () => {
    dispatch(reduxAction("FETCH_START"));
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        dispatch(reduxAction("FETCH_NEWS_ID", ress.data.articles));
      })
      .catch((err) => {
        dispatch(reduxAction("FETCH_FAILURE"));
        console.log(err);
      });
  };

  const fetchNewsUS = async () => {
    dispatch(reduxAction("FETCH_START"));
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        dispatch(reduxAction("FETCH_NEWS_US", ress.data.articles));
      })
      .catch((err) => {
        dispatch(reduxAction("FETCH_FAILURE"));
        console.log(err);
      });
  };

  const fetchNewsUK = async () => {
    dispatch(reduxAction("FETCH_START"));
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        dispatch(reduxAction("FETCH_NEWS_UK", ress.data.articles));
      })
      .catch((err) => {
        dispatch(reduxAction("FETCH_FAILURE"));
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="py-5 px-4 lg:px-0 lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {!loading ? <TitleCategory titleHeader="Indonesia" /> : <TitleCategoryLoad />}
            {!loading
              ? newsID?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {!loading ? <TitleCategory titleHeader="United State" /> : <TitleCategoryLoad />}
            {!loading
              ? newsUS?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {!loading ? <TitleCategory titleHeader="United Kingdom" /> : <TitleCategoryLoad />}
            {!loading
              ? newsUK?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
        </div>
        <div className="mt-5">{!loading ? <TitleCategory titleHeader="Indonesia Top Headline" /> : <TitleCategoryLoad />}</div>
        <div className="w-full flex flex-wrap gap-3 justify-between">
          {!loading
            ? newsTopHeadLineID?.map((news) => {
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

export default Homepage;
