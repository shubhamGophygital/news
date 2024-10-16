import React from "react";
import NewsCategoriesData from "../constants/NewsCategories";
import NewsCategories from "../components/NewsCategoryList";
import VerticalNewsList from "../components/VerticalNewsList";
import data from "../data/topHeadline.json";
import SectionHeader from "../components/SectionHeader";
import Layout from "../components/Layout";

const NewsCategoriesPage = () => {
  let generalNewsList = data?.articles?.slice(12, 20);

  return (
    <Layout>
      <SectionHeader className="mt-[5px] mb-8">News Categories</SectionHeader>
      <NewsCategories NewsCategoriesData={NewsCategoriesData} />
      <hr className="divider" />
      <SectionHeader>General</SectionHeader>
      <VerticalNewsList newsList={generalNewsList} />
    </Layout>
  );
};

export default NewsCategoriesPage;
