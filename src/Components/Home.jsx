import { Link } from "react-router-dom";
import Image from "./Image";
import slugify from "react-slugify";
const Home = ({ newsObj, setCurrentPage }) => {
  return (
    <div className="bg-">
      <h1 className="text-5xl font-semibold my-10 text-center">News</h1>
      <div className="grid md:grid-cols-3 gap-4  px-4 pb-10">
        {newsObj.map((item) => {
          return (
            <Link
              onClick={() => setCurrentPage(item.title)}
              className="col-span-1 p-4 bg-gray-200 rounded-md hover:bg-gray-400 hover:text-white transition-all duration-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-300 dark:hover:text-black"
              to={"/news-website/" + slugify(item.title)}
            >
              <Image className="h-[200px]" title={item.title} />
              <h1 className="font-semibold text-lg">{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
