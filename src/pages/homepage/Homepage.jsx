import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { CardNewsVertical, CardNewsVerticalLoad } from "../../components/cardnewsvertical/CardNewsVertical";
import axios from "axios";

const Homepage = () => {
  const [newsID, setNewsID] = useState([]);
  const [newsUS, setNewsUS] = useState([]);
  const [newsUK, setNewsUK] = useState([]);
  const [load] = useState([1, 2, 3, 4, 5]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetchNewsID();
      await fetchNewsUS();
      await fetchNewsUK();
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
      <div className="pt-5 lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-4/12">
            <div className="border-l-4 border-teal-700 mb-4 pl-4">
              <h3 className="text-[20px] font-medium">Indonesia</h3>
            </div>
            {isReady ? <CardNewsVertical news={newsID} /> : <CardNewsVerticalLoad skeleton={load} />}
          </div>
          <div className="w-full lg:w-4/12">
            <div className="border-l-4 border-teal-700 mb-4 pl-4">
              <h3 className="text-[20px] font-medium">United States</h3>
            </div>
            {isReady ? <CardNewsVertical news={newsUS} /> : <CardNewsVerticalLoad skeleton={load} />}
          </div>
          <div className="w-full lg:w-4/12">
            <div className="border-l-4 border-teal-700 mb-4 pl-4">
              <h3 className="text-[20px] font-medium">United Kingdom</h3>
            </div>
            {isReady ? <CardNewsVertical news={newsUK} /> : <CardNewsVerticalLoad skeleton={load} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
