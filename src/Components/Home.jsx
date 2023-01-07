import { Link } from "react-router-dom";
import Image from "./Image";
import slugify from "react-slugify";
const Home = ({ newsObj, setCurrentPage }) => {
  return (
    <>
      <h1 className="text-5xl font-semibold my-10 text-center">News</h1>
      <div className="grid md:grid-cols-3 gap-4  px-4 pb-10">
        {newsObj.map((item) => {
          return (
            <Link
              onClick={() => setCurrentPage(item.title)}
              className="col-span-1 p-4 bg-gray-200 rounded-md"
              to={"/news-website/" + slugify(item.title)}
            >
              <Image className="h-[200px]" title={item.title} />
              <h1 className="font-semibold text-lg">{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
