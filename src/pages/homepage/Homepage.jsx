import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { CardNewsVertical, CardNewsVerticalLoad } from "../../components/cardnewsvertical/CardNewsVertical";
import { TitleCategory, TitleCategoryLoad } from "../../components/titelcategory/TitleCategory";
import { CardNewsHorizontal, CardNewsHorizontalLoad } from "../../components/cardnewshorizontal/CardNewsHorizontal";
import axios from "axios";

const Homepage = () => {
  const [newsTopHeadLineID, setNewsTopHeadLineID] = useState([]);
  const [newsID, setNewsID] = useState([]);
  const [newsUS, setNewsUS] = useState([]);
  const [newsUK, setNewsUK] = useState([]);
  const [load] = useState([1, 2, 3, 4, 5]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNewsTopHeadLineID();
      await fetchNewsID();
      await fetchNewsUS();
      await fetchNewsUK();
      setIsReady(true);
    };
    fetchData();
    document.title = "Home / Bebece News";
  }, []);

  const fetchNewsTopHeadLineID = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        setNewsTopHeadLineID(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNewsID = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        setNewsID(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNewsUS = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        setNewsUS(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNewsUK = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((ress) => {
        setNewsUK(ress.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="py-5 px-4 lg:px-0 lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {isReady ? <TitleCategory titleHeader="Indonesia" /> : <TitleCategoryLoad />}
            {isReady
              ? newsID?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {isReady ? <TitleCategory titleHeader="United State" /> : <TitleCategoryLoad />}
            {isReady
              ? newsUS?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
          <div className="w-full lg:w-4/12 flex flex-col gap-2">
            {isReady ? <TitleCategory titleHeader="United Kingdom" /> : <TitleCategoryLoad />}
            {isReady
              ? newsUK?.map((news) => {
                  return <CardNewsVertical news={news} />;
                })
              : load.map((load) => {
                  return <CardNewsVerticalLoad skeleton={load} />;
                })}
          </div>
        </div>
        <div className="mt-5">{isReady ? <TitleCategory titleHeader="Indonesia Top Headline" /> : <TitleCategoryLoad />}</div>
        <div className="w-full flex flex-wrap gap-3 justify-between">
          {isReady
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
