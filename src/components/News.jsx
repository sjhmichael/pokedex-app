import React, { useEffect, useState } from "react";
import axios from "axios";
import DateConverter from "./ConvertDate";

const News = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [pageSize, setPageSize] = useState(10);
  const [pokemonNews, setPokemonNews] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=pokemon&language=en&pageSize=${pageSize}&apiKey=906407205fea4b0aa3a71db40adc8406`,
        { signal }
      )
      .then((response) => {
        setPokemonNews(response.data.articles);
      });

    return () => controller.abort;
  }, [pageSize]);

  const loadMoreNews = () => {
    setPageSize(pageSize + 10);
  };

  return (
    <div className="flex flex-col px-4 pt-8">
      <h1 className="text-2xl font-bold">Pokemon News</h1>
      {pokemonNews?.map((items, index) => (
        <div key={index}>
          <div className="flex flex-row items-center border-b-[1px] border-gray-300 justify-between py-4">
            <div className="flex flex-col">
              <h1 className="font-medium text-sm text-balance">
                {items.title}
              </h1>
              <h1 className="text-sm text-gray-500">
                <DateConverter str={items.publishedAt} />
              </h1>
            </div>
            <img
              src={items.urlToImage}
              alt="article_image"
              width={120}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      ))}
      <button
        className="w-full border-[1px] rounded-xl justify-center items-start flex my-4 py-4 bg-white font-medium"
        onClick={loadMoreNews}
      >
        Load More
      </button>
    </div>
  );
};

export default News;
