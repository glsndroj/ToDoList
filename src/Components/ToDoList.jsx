export const ToDoList = () => {
  return (
    <div className=" bg-white w-[377px] h-[290px] flex flex-col rounded-md shadow-2xl">
      <h1 className="header text-center text-black font-bold text-[20px] h-[28px] mt-[24px]">
        To-Do list
      </h1>
      <div className="flex items-center gap-[6px] ml-4 my-5 ">
        <div className="inputText text-black ">
          <input
            type="text"
            placeholder="Add a new task..."
            className="w-[280px] h-[38px] border-[1px] rounded-2xl px-4"
          />
        </div>
        <button className="addBtn bg-blue-500 h-[40px] rounded-md px-4 py-2 cursor-pointer text-white  ">
          Add
        </button>
      </div>
      <div className="BtnContainer flex gap-[6px] ml-4 text-black ">
        <button className="all bg-gray-200  h-[30px] rounded-md px-3 py-1 cursor-pointer  ">
          All
        </button>
        <button className="active bg-gray-200 h-[30px] rounded-md px-3 py-1 cursor-pointer ">
          Active
        </button>
        <button className="completed bg-gray-200 h-[30px] rounded-md px-3 py-1 cursor-pointer ">
          Completed
        </button>
      </div>
      <div className="end ym garch irne"></div>
      <p className="text-center mt-8 text-gray-400">
        No tasks yet. Add one above!
      </p>
      <div className="footer flex mt-10 gap-1 justify-center">
        <p className="text-gray-400">Powered by</p>
        <a
          className="link text-blue-500"
          href="http://www.pinecone.mn"
          target="blank"
        >
          Pinecone academy ghghghg
        </a>
      </div>
    </div>
  );
};
