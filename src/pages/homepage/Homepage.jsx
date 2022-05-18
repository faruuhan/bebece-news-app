import React from "react";
import Layout from "../../components/layout/Layout";
import CardNewsVertical from "../../components/cardnewsvertical/CardNewsVertical";

const Homepage = () => {
  return (
    <Layout>
      <div className="lg:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-4/12">
            <CardNewsVertical />
          </div>
          <div className="w-full lg:w-4/12">
            <CardNewsVertical />
          </div>
          <div className="w-full lg:w-4/12">
            <CardNewsVertical />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
