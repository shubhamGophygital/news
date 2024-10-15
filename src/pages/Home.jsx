import React from "react";
import { Layout } from "../components/Layout";
import TopNews from "../components/TopNews";
import OverlayNewsList from "../components/OverlayNewsList";
import NewsCategories from "../components/NewsCategories";
import VerticalNewsList from "../components/VerticalNewsList";
import SectionHeader from "../components/SectionHeader";

const Home = () => {
  return (
    <Layout>
      <TopNews />
      <hr className="divider" />
      <OverlayNewsList />
      <hr className="divider" />
      <SectionHeader>News Categories</SectionHeader>
      <NewsCategories />
      <hr className="divider" />
      <SectionHeader>Latest News</SectionHeader>
      <VerticalNewsList />
    </Layout>
  );
};

export default Home;
