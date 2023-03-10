import { useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import { TextSection, Image } from "./Microsections";
const ArticleWrapper = ({
  title,
  content,
  nextBlog,
  prevBlog,
  setCurrentPage,
  image,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const CustomLink = ({ title, text }) => {
    return (
      <Link
        onClick={() => setCurrentPage(title)}
        className="md:w-1/2 rounded-md md:min-h-full bg-gray-400 p-4 flex flex-col justify-between font-semibold hover:!bg-gray-600 hover:text-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-400 dark:hover:text-black"
        to={"/" + slugify(title)}
      >
        {title}
        <h1 className="mt-3">{text}</h1>
      </Link>
    );
  };
  return (
    <div className="py-10 flex justify-center px-4 md:px-0">
      <div className="flex flex-col gap-y-10 md:w-3/4 ">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div>{image && <Image link={image} title={title} />}</div>
        <div className="flex flex-col gap-y-2">
          {content}
          <TextSection heading="Note: NewsAPI requires premium subscription to fetch the whole content." />
        </div>

        <div className="flex flex-col md:flex-row h-full  gap-x-10 gap-y-5 w-full ">
          <CustomLink title={prevBlog} text="<< Prev" />
          <CustomLink title={nextBlog} text="Next >>" />
        </div>
      </div>
    </div>
  );
};

export default ArticleWrapper;
