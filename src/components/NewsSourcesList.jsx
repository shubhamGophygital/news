import React, { useMemo, useState } from "react";
import NewsSourceCard from "./NewsSourceCard";
import { uniq, map, sortBy, capitalize, filter } from "lodash";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import countryNameAndCountryCode from "../constants/countryNameAndCountryCode";
import languageNameAndCountryCode from "../constants/languageNameAndCountryCode";
import CustomSelect from "./CustomSelect";
import useFetchNewsSources from "../hooks/useFetchNewsSources";
import { NewsError, NewsSkeleton, SourceNoData } from "./Placeholder";

const createOptions = (array, key) => {
  const uniqueValues = uniq(map(array, key)); // Get unique values for the given key
  switch (key) {
    case "country":
      return sortBy(
        uniqueValues.map((value) => {
          const label = countryNameAndCountryCode[value] || value.toUpperCase();
          return { label, value };
        }),
        "label"
      );
    case "language":
      return sortBy(
        uniqueValues.map((value) => {
          const label =
            languageNameAndCountryCode[value] || value.toUpperCase();
          return { label, value };
        }),
        "label"
      );
    default:
      return sortBy(
        uniqueValues.map((value) => ({
          label: capitalize(value),
          value: value,
        })),
        "label"
      );
  }
};

const NewsSourcesList = () => {
  const { data: newsSources, isLoading, error } = useFetchNewsSources();
  const newsSourcesArr = newsSources?.sources;
  const [category, setCategory] = useState(null);
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);

  const filteredNewsSourcesArr = useMemo(
    () =>
      filter(newsSourcesArr, (news) => {
        return (
          (!country?.value || news.country === country?.value) &&
          (!language?.value || news.language === language?.value) &&
          (!category?.value || news.category === category?.value)
        );
      }),
    [category, language, country, newsSourcesArr]
  );

  const countryOptions = createOptions(filteredNewsSourcesArr, "country");
  const languageOptions = createOptions(filteredNewsSourcesArr, "language");
  const categoryOptions = createOptions(filteredNewsSourcesArr, "category");

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
  };

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const onResetFilter = () => {
    setCountry(null);
    setLanguage(null);
    setCategory(null);
  };

  return (
    <>
      {isLoading ? (
        <>
          <SectionHeader>News Sources</SectionHeader>
          <NewsSkeleton />
        </>
      ) : error ? (
        <NewsError error={error} />
      ) : !newsSourcesArr || newsSourcesArr?.length === 0 ? (
        <SourceNoData />
      ) : (
        <>
          <SectionHeader className="mt-[5px] mb-8">
            News Sources ({filteredNewsSourcesArr?.length || 0})
          </SectionHeader>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3 className="heading-md mb-1">Select Country</h3>
              <CustomSelect
                options={countryOptions}
                onChange={handleCountryChange}
                placeholder="Select a country"
                value={country}
                isClearable
              />
            </div>
            <div>
              <h3 className="heading-md mb-1">Select Language</h3>
              <CustomSelect
                options={languageOptions}
                onChange={handleLanguageChange}
                placeholder="Select a language"
                value={language}
                isClearable
              />
            </div>
            <div>
              <h3 className="heading-md mb-1">Select Category</h3>
              <CustomSelect
                options={categoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select a category"
                value={category}
                isClearable
              />
            </div>
          </div>
          <div className="mb-4 text-right">
            <Button
              disabled={!country && !category && !language}
              onClick={onResetFilter}
            >
              Reset
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredNewsSourcesArr?.map((newsSource) => (
              <NewsSourceCard newsSource={newsSource} key={newsSource?.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NewsSourcesList;
