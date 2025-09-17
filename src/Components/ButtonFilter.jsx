export const ButtonFilter = (props) => {
  const { showAll, showActive, showCompleted, } = props;
  return (
    <div className="flex gap-2">
      <button
        className={` rounded-md px-4 py-1 bg-gray-200  cursor-pointer`}
        onClick={showAll}
        
      >
        All
      </button>
      <button
        className={` rounded-md px-4 py-1 bg-gray-200 cursor-pointer`}
        onClick={showActive}
      >
        Active
      </button>
      <button
        className={` rounded-md px-4 py-1 bg-gray-200 cursor-pointer`}
        onClick={showCompleted}
      >
        Completed
      </button>
    </div>
  );
};
