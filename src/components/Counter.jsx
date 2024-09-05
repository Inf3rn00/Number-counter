import { useState } from "react";

function Counter() {
  const [count, countSet] = useState(0);
  function Increment(){
   countSet(count + 1)
  }
  function decrement(){
    countSet(count - 1)
  }

  function reset(){

    countSet(0)
  }

  return <div className="p-6 text-center bg-slate-200 h-screen flex flex-col justify-center ">
    <div>
    <h1 className="text-2xl p-4">Count value is: {count}</h1>
    </div>
    <div className="flex flex-col items-center gap-4">

    <button onClick={Increment} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded w-1/5">Increment</button>
    
    <button onClick={decrement} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-1/5">Decrement</button>

    <button onClick={reset} className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded w-1/5">Reset</button>
    </div>


  </div>;
}

export default Counter;
