import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../Shared/NewsSummary";

const Category = () => {
  const categoryNews = useLoaderData();
  // console.log(news.length);
  return (
    <div>
      <h2>{categoryNews.length} results found</h2>
      {categoryNews.map((news) => (
        <NewsSummary key={news._id} news={news}></NewsSummary>
      ))}
    </div>
  );
};

export default Category;
