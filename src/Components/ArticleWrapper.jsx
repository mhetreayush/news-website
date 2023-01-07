import { Link } from "react-router-dom";
import slugify from "react-slugify";
const ArticleWrapper = ({
  title,
  content,
  nextBlog,
  prevBlog,
  setCurrentPage,
}) => {
  const CustomLink = ({ title, text }) => {
    return (
      <Link
        onClick={() => setCurrentPage(title)}
        className="w-1/2 rounded-md min-h-full bg-gray-200 p-4 flex flex-col justify-between font-semibold"
        to={"/" + slugify(title)}
      >
        {title}
        <h1 className="mt-3">{text}</h1>
      </Link>
    );
  };
  return (
    <div className="py-10 flex justify-center ">
      <div className="flex flex-col gap-y-10 w-3/4">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div className="flex flex-col gap-y-2">{content}</div>
        <div className="flex flex-col md:flex-row h-full  gap-x-10 gap-y-5 w-full ">
          <CustomLink title={prevBlog} text="<< Prev" />
          <CustomLink title={nextBlog} text="Next >>" />
        </div>
      </div>
    </div>
  );
};

export default ArticleWrapper;
