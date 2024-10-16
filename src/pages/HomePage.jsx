import React from "react";
import Layout from "../components/Layout";
import BannerNews from "../components/BannerNews";
import OverlayNewsList from "../components/OverlayNewsList";
import NewsCategoryList from "../components/NewsCategoryList";
import VerticalNewsList from "../components/VerticalNewsList";
import SectionHeader from "../components/SectionHeader";
import NewsCategoriesData from "../constants/NewsCategories";
import useTopHeadlineData from "../hooks/useFetchTopHeadlines";
import { NewsError, NewsNoData, NewsSkeleton } from "../components/Placeholder";

const HomePage = () => {
  const { data: topHeadlineData, isLoading, error } = useTopHeadlineData();

  let bannerNews = topHeadlineData?.articles?.[0];
  let overlayNewsList = topHeadlineData?.articles?.slice(9, 11);
  let latestNewsList = topHeadlineData?.articles?.slice(12, 16);
  let bannerNewsList = topHeadlineData?.articles?.slice(5, 8);

  return (
    <Layout>
      {isLoading ? (
        <NewsSkeleton />
      ) : error ? (
        <NewsError error={error} />
      ) : !topHeadlineData?.articles ||
        topHeadlineData?.articles?.length === 0 ? (
        <NewsNoData />
      ) : (
        <>
          <BannerNews bannerNews={bannerNews} newsList={bannerNewsList} />
          <hr className="divider" />
          <OverlayNewsList newsList={overlayNewsList} />
          <hr className="divider" />
          <SectionHeader>News Categories</SectionHeader>
          <NewsCategoryList NewsCategoriesData={NewsCategoriesData} />
          <hr className="divider" />
          <SectionHeader>Latest News</SectionHeader>
          <VerticalNewsList newsList={latestNewsList} />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
