import { useEffect, useState } from "react";

const Image = ({ title, className, link }) => {
  const [imageLink, setImageLink] = useState();
  useEffect(() => {
    setImageLink("");
    setTimeout(() => {
      setImageLink(link);
    }, 200);
  }, [link]);
  return (
    <div className="flex w-full justify-center items-center my-6 ">
      {link && (
        <img
          loading="lazy"
          className={`${className && className} max-h-[50vh]`}
          src={imageLink}
          alt={title}
        />
      )}
      {link === null && (
        <div className="text-center h-[200px] flex flex-col gap-y-4 items-center justify-center">
          <p>No image fetched from source</p>
          <h1 className="text-xl font-semibold">Image Title: {title}</h1>
        </div>
      )}
    </div>
  );
};

const LinkWord = ({ word, link, color = "green" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={color && color}
    >
      {" "}
      {word}
    </a>
  );
};

const TextSection = ({ children, heading }) => {
  return (
    <div className="my-3">
      {heading && <h2 className="text-xl font-bold my-2">{heading}</h2>}
      <p>{children}</p>
    </div>
  );
};

export { Image, LinkWord, TextSection };
