export const Button = (props) => {
  const { color, text, handleOnClick } = props;

  return (
    <>
      {" "}
      <button
        onClick={handleOnClick}
        className={`rounded-md px-4 py-1 ${color}  ${
          color == "bg-[#3C82F6]" ? "text-white" : "text-[#363636]"
        } cursor-pointer`}
      >
        {text}
      </button>
    </>
  );
};
