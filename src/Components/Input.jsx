export const Input = (props) => {
  const { placeholder, handleOnChange, value } = props;

  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={handleOnChange}
        className="border-gray-300 rounded-[5px] border-[1px] w-60 h-12 px-4"
      />
    </div>
  );
};
