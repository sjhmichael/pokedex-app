import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const News = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [pokemonNews, setPokemonNews] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.thenewsapi.com/v1/news/all?api_token=${apiKey}&language=en&limit=3&page=${pageNum}&search=pokemon`
      )
      .then((response) => {
        setPokemonNews((prevNews) => [...prevNews, ...response.data.data]);
        setLoading(false);
      })
      .catch((error) => console.log("error fetching news list"(error)));
  }, [pageNum, apiKey]);

  const increasePageNum = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  const formatDate = (dateString) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex flex-col px-4 pt-8">
      <h1 className="text-2xl font-bold space">Pokemon News</h1>
      {pokemonNews?.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row border-b-[1px] border-gray-300 justify-between py-4">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="flex flex-col">
                <h1 className="font-medium text-sm text-balance pr-4">
                  {item.title}
                </h1>
                <h1 className="text-xs text-gray-500 mt-1">
                  {formatDate(item.published_at)}
                </h1>
              </div>
            </a>
            <img
              src={item.image_url}
              alt="article_image"
              className="rounded-xl object-cover h-18 w-32"
            />
          </div>
        </div>
      ))}
      <button
        className="w-full border-[1px] rounded-xl justify-center items-start flex my-4 py-4 bg-white font-medium"
        onClick={increasePageNum}
      >
        {loading ? (
          <div className="flex items-center space-x-3">
            <Spinner />
            <h1>Loading...</h1>
          </div>
        ) : (
          "Load More"
        )}
      </button>
    </div>
  );
};

export default News;
