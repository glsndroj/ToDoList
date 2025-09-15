

export const Input = (props) => {
  const { placeholder } = props;

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="border-gray-300 rounded-[5px] border-[1px] w-60 h-12"
      />
    </div>
  );
};
