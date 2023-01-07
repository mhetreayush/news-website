import { Link } from "react-router-dom";
import Image from "./Image";
import slugify from "react-slugify";
const Home = ({ newsObj, setCurrentPage }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-10 px-4">
      {newsObj.map((item) => {
        return (
          <Link
            onClick={() => setCurrentPage(item.title)}
            className="col-span-1 p-4 bg-gray-200 rounded-md"
            to={"/" + slugify(item.title)}
          >
            <Image className="h-[200px]" title={item.title} />
            <h1 className="font-semibold text-lg">{item.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
