import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { CardNewsVertical, CardNewsVerticalLoad } from "../../components/cardnewsvertical/CardNewsVertical";
import axios from "axios";

const Homepage = () => {
  const [newsID, setNewsID] = useState([]);
  const [load] = useState([1, 2, 3, 4, 5]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNewsID();
      setIsReady(true);
    };
    fetchData();
  }, []);

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

  return (
    <Layout>
      <div className="pt-5 lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-4/12">{isReady ? <CardNewsVertical news={newsID} /> : <CardNewsVerticalLoad skeleton={load} />}</div>
          <div className="w-full lg:w-4/12">{isReady ? <CardNewsVertical news={newsID} /> : <CardNewsVerticalLoad skeleton={load} />}</div>
          <div className="w-full lg:w-4/12">{isReady ? <CardNewsVertical news={newsID} /> : <CardNewsVerticalLoad skeleton={load} />}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
