import React, { useEffect, useState } from "react";


export default function onChange() {
  const [search , setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    console.log (search);
},[search]);
  return (
    <main className="w-screen h-screen bg-stone-100 flex justify-center dark:bg-stone-700 ">
     <div className="h-[300px] w-[575px] rounded-lg bg-white mt-[150px] text-center ">
      <div  className=" p-10 rounded-lg bg-white  text-center dark:bg-black dark:text-white">
         <p className=" text-2xl font-bold mt-14">Тодорхойлолт баталгаажуулах</p>
         <p className="mt-11">Доорх хэсэгт тодорхойлолтын дугаар оруулна уу.</p>
         <div className="h-[80px] w-[500px] bg-white border-2 border-slate-200 rounded-md text-slate-500 text-sm mt-16 ">
          <div className=" mx-8 mt-2 space-x-2 flex justify-start">
            <div className="flex justify-center items-center">
          <img src="https://ivolunteer.mn/svg/user-gray.svg" className="w-[11px] h-[14px]"></img></div>
          <p>Сериал дугаар</p>
          </div>
         <input  className="mt-3 h-[30px] w-[450px] border border-stone-150 rounded-lg outline-none border-none text-bold " value={search} type="search" onChange={(e) => setSearch(e.target.value)}>
         </input>
         </div>
         <button className="bg-orange-600 text-white font-bold mt-11 w-[280px] h-[60px] rounded-full  " onClick={ (e)=>setSearch("")
}
        >Шалгах</button>
      </div>
     </div>
    </main>
  );
}
