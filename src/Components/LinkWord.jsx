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
export default LinkWord;
