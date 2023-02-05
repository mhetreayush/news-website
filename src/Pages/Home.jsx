import { Link } from "react-router-dom";
import slugify from "react-slugify";
import { Children, useState } from "react";
import { TextSection, Image } from "../Components/Microsections";
import { BsSearch } from "react-icons/bs";
const Home = ({ newsObj, setCurrentPage, setNewsTopic, newsTopic }) => {
  const topics = [
    "technology",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
  ];
  const handleTopicClick = (topic) => {
    if (topic === newsTopic) {
      setNewsTopic("random");
      return;
    }
    setNewsTopic(topic);
  };
  const [searchResult, setSearchResult] = useState(null);
  return (
    <div>
      <h1 contentEditable className="text-5xl font-semibold my-10 text-center">
        News
      </h1>
      <div className="text-center">
        <TextSection heading="Choose a topic" />
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          {Children.toArray(
            topics.map((topic) => {
              return (
                <button
                  onClick={() => {
                    handleTopicClick(topic);
                  }}
                  className={`p-2 bg-gray-200 first-letter:uppercase rounded-md text-black ${
                    topic === newsTopic && "bg-gray-800 text-white"
                  }`}
                >
                  {topic}
                </button>
              );
            })
          )}
        </div>
        <div className="flex border-2 border-black rounded-md m-4">
          <input
            type="search"
            className="w-full px-2 py-4 border-r-2 border-black active:border-none focus:outline-none rounded-l-md text-black"
            placeholder="Search for a topic"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || !value) {
                setNewsTopic("random");
                return;
              }
              setNewsTopic(value);
            }}
          />
          <button
            onClick={() => setNewsTopic(slugify(searchResult))}
            className="p-4"
          >
            <BsSearch className=" text-2xl text-myBlue" />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-4 pb-10">
        {newsObj.length > 0 &&
          Children.toArray(
            newsObj.map((item) => {
              return (
                <Link
                  onClick={() => setCurrentPage(item.title)}
                  className="col-span-1 p-4 bg-gray-200 rounded-md hover:bg-gray-400 hover:text-white transition-all duration-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-300 dark:hover:text-black"
                  to={"/" + slugify(item.title)}
                >
                  <Image
                    className={`h-[200px]`}
                    link={item.urlToImage}
                    title={item.title}
                  />

                  <h1 className="font-semibold text-lg">{item.title}</h1>
                </Link>
              );
            })
          )}
      </div>
      {!newsObj.length > 0 && (
        <h1 className="text-2xl font-semibold text-center w-full">
          {newsTopic
            ? `No news found for topic "${newsTopic}"`
            : "Fetching News..."}
        </h1>
      )}
    </div>
  );
};

export default Home;
