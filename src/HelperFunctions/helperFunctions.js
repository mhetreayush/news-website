// ---------------------Imports------------------------------------
import axios from "axios";
// ----------------------------------------------------------------

// ---------------------Constants----------------------------------
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
// ----------------------------------------------------------------

// ---------------------Dark Mode Functionality---------------------
const toggleDarkMode = (theme, setTheme) => {
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
  localStorage.theme = theme;
  localStorage.theme && setTheme(localStorage.theme);
};
// ------------------------------------------------------------------

// ---------------------News API Functionality-----------------------
const fetchNews = async (topic) => {
  const newsObj = await axios.get(
    `https://newsapi.org/v2/everything?q=${
      topic ? topic : "random"
    }&apiKey=${API_KEY}`
  );
  return newsObj;
};
// ------------------------------------------------------------------

// ---------------------Seventy Five %-------------------------------
const seventyFivePercent = () => {
  return window.innerWidth * 0.75;
};
// ------------------------------------------------------------------

// ----------------------Exports-------------------------------------
export { seventyFivePercent, toggleDarkMode, fetchNews };
// ---------------------------------------------------------------------------------
