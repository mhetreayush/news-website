const TextSection = ({ children, heading }) => {
  return (
    <div className="my-3">
      {heading && <h2 className="text-xl font-bold my-2">{heading}</h2>}
      <p>{children}</p>
    </div>
  );
};
export default TextSection;
