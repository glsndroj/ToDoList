"use client";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(1);
  const Increase = () => {
    setNumber(number + 1);
  };

  const Decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className=" flex gap-10 flex-col m-50">
      <p className="text-4xl">Hello - {number}</p>
      <button onClick={Increase} className="w-[200px] h-[60px] bg-amber-700">
        Increase
      </button>
      <button
        onClick={Decrease}
        className="w-[200px] h-[60px] bg-amber-700"
      >
        Decrease
      </button>
    </div>
  );
}
