import slugify from "react-slugify";
const Image = ({ title, className }) => {
  const publicFolder = process.env.PUBLIC_URL;
  return (
    <div className="flex w-full justify-center items-center my-6">
      <img
        loading="lazy"
        className={className && className}
        src={`${publicFolder}/blogAssets/${slugify(title)}.png`}
        alt={title}
      />
    </div>
  );
};

export default Image;
