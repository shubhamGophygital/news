import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNewsSources = async () => {
  const { data } = await axios.get("https://saurav.tech/NewsAPI/sources.json");
  return data;
};

const useFetchNewsSources = () => {
  return useQuery({
    queryKey: ["NEWS_SOURCES"],
    queryFn: () => fetchNewsSources(),
    staleTime: 600000,
    refetchOnWindowFocus: false,
  });
};

export default useFetchNewsSources;
