import React from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import OverlayNewsList from "../components/OverlayNewsList";
import SectionHeader from "../components/SectionHeader";
import VerticalNewsList from "../components/VerticalNewsList";
import { capitalize } from "lodash";
import BackIconButton from "../components/BackIconButton";
import { ReactComponent as DownArrowIcon } from "../assets/icons/downArrow.svg";
import useFetchNewsByCategory from "../hooks/useFetchNewsByCategory";
import { NewsError, NewsNoData, NewsSkeleton } from "../components/Placeholder";

const NewsCategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const {
    data: newsCategory,
    isLoading,
    error,
  } = useFetchNewsByCategory(category);

  const HeadlineNews = newsCategory?.articles?.slice(0, 2);
  const verticalNewsList = newsCategory?.articles?.slice(2, 14);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="flex gap-4 items-center">
        <BackIconButton onClick={goBack}>
          <DownArrowIcon className="rotate-90 stroke-black w-5 h-5" />
        </BackIconButton>
        <SectionHeader className="mt-[15px] mb-[15px] underline underline-offset-4 heading-3xl">
          {capitalize(category)}
        </SectionHeader>
      </div>
      {isLoading ? (
        <NewsSkeleton />
      ) : error ? (
        <NewsError error={error} />
      ) : !newsCategory?.articles || newsCategory?.articles?.length === 0 ? (
        <NewsNoData />
      ) : (
        <>
          <SectionHeader>Headline News</SectionHeader>
          <OverlayNewsList newsList={HeadlineNews} />
          <hr className="divider" />
          <SectionHeader>Latest News</SectionHeader>
          <VerticalNewsList newsList={verticalNewsList} />
        </>
      )}
    </Layout>
  );
};

export default NewsCategoryPage;
