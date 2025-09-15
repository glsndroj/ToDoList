"use client";
import { useState } from "react";
import { Input } from "../Components/Input";
import { Button } from "@/Components/Button";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    console.log("input changed", e.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
  };
  return (
    <div className="Container flex flex-col items-center gap-5 mt-[60px]">
      <p className="text-[20px] font-bold mt-5">To-Do list</p>
      <div className=" bg-white w-[377px] h-[290px] flex flex-col gap-2  rounded-md shadow-2xl ">
        <div className="flex justify-center gap-2 ">
          <Input
            onChange={handleOnChange}
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
        {todos.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}
      </div>
    </div>
  );
}
