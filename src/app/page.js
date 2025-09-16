"use client";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "@/Components/Button";
import { ToDoList } from "@/Components/ToDoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    if (inputValue !== "") setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleOnDelete = (index) => {
    setTodos(todos.filter((el, i) => i !== index));
  };

  return (
    <div className="Container flex flex-col items-center gap-5 mt-[60px]">
      <p className="text-[20px] font-bold mt-5">To-Do list</p>
      <div className=" bg-white w-[377px] h-fit flex flex-col gap-2  rounded-md shadow-2xl pb-5 ">
        <div className="flex justify-center gap-2 ">
          <Input
            value={inputValue}
            handleOnChange={handleOnChange}
            placeholder="Add a new task..."
          ></Input>
          <Button
            handleOnClick={handleOnClick}
            
            text="Add"
            color="bg-[#3C82F6]"
          ></Button>
        </div>
        <div className="flex ml-[35px] gap-2">
          <Button text="All" color="bg-[#F3F4F6]"></Button>
          <Button text="Active" color="bg-[#F3F4F6]"></Button>
          <Button text="Completed" color="bg-[#F3F4F6]"></Button>
        </div>
        <div className="flex flex-col-reverse gap-2 items-center">
          {todos.map((el, index) => {
            return (
              <ToDoList
                key={index}
                index={index}
                el={el}
                handleOnDelete={handleOnDelete}
              ></ToDoList>
            );
          })}
        </div>
      </div>
    </div>
  );
}
