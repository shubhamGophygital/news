import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNewsByCategory = async (category) => {
  const { data } = await axios.get(
    `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
  );
  return data;
};

const useFetchNewsByCategory = (category) => {
  return useQuery({
    queryKey: ["NEWS_CATEGORY", category],
    queryFn: () => fetchNewsByCategory(category),
    staleTime: 60000,
    enabled: !!category,
    refetchOnWindowFocus: false,
  });
};

export default useFetchNewsByCategory;
