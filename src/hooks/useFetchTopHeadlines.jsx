import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTopHeadlines = async () => {
  const { data } = await axios.get(
    "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"
  );
  return data;
};

const useFetchTopHeadlines = () => {
  return useQuery({
    queryKey: ["TOP_HEADLINE"],
    queryFn: () => fetchTopHeadlines(),
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};

export default useFetchTopHeadlines;
