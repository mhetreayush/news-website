import React, { useDebugValue, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import slugify from "react-slugify";
import ArticleWrapper from "./Components/ArticleWrapper";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { newsObj } from "./data/NewsFiles";
import { useState } from "react";
const App = () => {
  const [currentPage, setCurrentPage] = useState("/news-website/");
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const checkTheme = () => {
    localStorage.theme = theme;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = theme;

    // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
    localStorage.theme && setTheme(localStorage.theme);
  };
  useEffect(() => {
    checkTheme();
  }, [theme]);

  if (document.location.pathname === "/" || document.location.pathname === "") {
    document.location.pathname = "/news-website";
  }
  return (
    <div class="bg-gray-300 dark:bg-gray-700 text-black dark:text-gray-300">
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
              path="/news-website"
              element={
                <Home newsObj={newsObj} setCurrentPage={setCurrentPage} />
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
                    path={"/news-website/" + slugify(item.title)}
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
    </div>
  );
};

export default App;
