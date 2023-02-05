import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import slugify from "react-slugify";
import ArticleWrapper from "./Components/ArticleWrapper";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { fetchNews, toggleDarkMode } from "./HelperFunctions/helperFunctions";
const App = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [fetched, setFetched] = useState(false);
  const [newsTopic, setNewsTopic] = useState(null);
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [newsObj, setNewsObj] = useState([]);

  useEffect(() => {
    toggleDarkMode(theme, setTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const getNews = async (topic) => {
    const newsObj = await fetchNews(topic);
    setNewsObj(newsObj.data.articles);
    setFetched(true);
  };
  useEffect(() => {
    try {
      if (!fetched) {
        getNews();
      }
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (newsTopic) {
      getNews(newsTopic);
    }
  }, [newsTopic]);
  return (
    <div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-gray-300 min-h-screen">
      <BrowserRouter>
        <Navbar
          newsObj={newsObj}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTheme={setTheme}
          theme={theme}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  newsObj={newsObj}
                  setCurrentPage={setCurrentPage}
                  setNewsTopic={setNewsTopic}
                  newsTopic={newsTopic}
                />
              }
            />

            <Route path="*" element={<Home newsObj={newsObj} />} />

            {React.Children.toArray(
              newsObj.map((item) => {
                const nextBlog = newsObj[newsObj.indexOf(item) + 1]
                  ? newsObj[newsObj.indexOf(item) + 1]
                  : newsObj[0];
                const prevBlog = newsObj[newsObj.indexOf(item) - 1]
                  ? newsObj[newsObj.indexOf(item) - 1]
                  : newsObj[newsObj.length - 1];
                return (
                  <Route
                    path={"/" + slugify(item.title)}
                    element={
                      <ArticleWrapper
                        setCurrentPage={setCurrentPage}
                        title={item.title}
                        content={item.content}
                        image={item.urlToImage}
                        nextBlog={nextBlog.title}
                        prevBlog={prevBlog.title}
                      />
                    }
                  />
                );
              })
            )}
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default App;
