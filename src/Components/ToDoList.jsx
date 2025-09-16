export const ToDoList = (props) => {
  const { index, el, handleOnDelete } = props;
  return (
    <>
      <div className="taskContainer p-4 flex justify-between border-[1px] rounded-[5px] border-gray-300 w-80 h-10 gap-3  ">
        <div className="task flex gap-3 items-center ">
          <input type="checkbox"></input>
          <p key={index}>{el}</p>
        </div>
        <div className=" flex items-center">
          <p
            onClick={() => handleOnDelete(index)}
            className="text-red-500 cursor-pointer hover:text-red-300"
          >
            Delete
          </p>
        </div>
      </div>
    </>
  );
};
