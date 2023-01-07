import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import slugify from "react-slugify";
import ArticleWrapper from "./Components/ArticleWrapper";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { newsObj } from "./data/NewsFiles";
const App = () => {
  console.log(slugify(newsObj[2].title));
  const [currentPage, setCurrentPage] = React.useState("");
  return (
    <BrowserRouter>
      <Navbar
        newsObj={newsObj}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
        <Routes>
          <Route
            path="/"
            element={<Home newsObj={newsObj} setCurrentPage={setCurrentPage} />}
          />
          {React.Children.toArray(
            newsObj.map((item) => {
              const nextBlog = newsObj[newsObj.indexOf(item) + 1]
                ? newsObj[newsObj.indexOf(item) + 1]
                : newsObj[0];
              const prevBlog = newsObj[newsObj.indexOf(item) - 1]
                ? newsObj[newsObj.indexOf(item) - 1]
                : newsObj[newsObj.length - 1];
              console.log(slugify(item.title));
              return (
                <Route
                  // path={item.title.replace(" ", "-")}
                  path={slugify(item.title)}
                  element={
                    <ArticleWrapper
                      setCurrentPage={setCurrentPage}
                      title={item.title}
                      content={<item.content title={item.title} />}
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
  );
};

export default App;
