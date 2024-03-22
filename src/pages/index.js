import { useState } from "react";

export default function useStateTask() {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-[#F7F8F3] h-screen   w-full flex justify-center items-center flex-col mb-16 justify-around">
      <a className=" text-lg">Нүүр хуудасруу буцах</a>
      <div className="bg-white h-[80%] w-2/5  rounded-md flex flex-col justify-center items-center justify-around">
        {/* Image */}
        <img src="https://ivolunteer.mn/svg/logo.svg" className="w-64 h-32 bg-cover bg-center"></img>
        
        {/* Search inputs */}
        <div className="space-y-4 flex flex-col items-center w-full">
          <input
            className="rounded border h-24 w-96 md:w-[calc(100%-3rem)] bg-white"
            value={search}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <input
            className="rounded border h-24 w-96 md:w-[calc(100%-3rem)] bg-white"
            value={search}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>

        {/* Buttons */}
        <div className="space-y-4 flex justify-center flex-col items-center mt-4">
        <button className="font-medium border h-16 w-64 bg-[#EF9580] rounded-full text-white " onClick={() => setSearch("")}>Нэвтрэх</button>
        <div className="space-y-4">
          <button className="font-medium border h-16 w-80 bg-[#F8F8F8] rounded-full text-black flex items-center justify-center" onClick={() => setSearch("")}>
          <img src="https://thumbs.dreamstime.com/b/rounded-facebook-logo-web-print-transparent-white-background-use-printing-purpose-165757365.jpg" className="w-4 h-4 mr-2 fill-current" />
            Facebook-ээр нэвтрэх
          </button>
          <button className="font-medium border h-16 w-80 bg-[#F8F8F8] rounded-full text-black flex items-center justify-center" onClick={() => setSearch("")}>
          <img src="https://static.vecteezy.com/system/resources/previews/029/284/964/non_2x/google-logo-on-transparent-background-popular-search-engine-google-logotype-symbol-icon-google-sign-stock-free-vector.jpg" className="w-4 h-4 mr-2 fill-current" />
            Google-ээр нэвтрэх
          </button>
        </div >
        

        </div>
        
        
        
        {/* Additional link */}
        <a className="font-medium mt-auto mb-8 mt-8">Нууц үг сэргээх</a>
      </div>
      <div className="whitespace-wrap h-32 w-64 flex justify-start items-center ">
        Бүртгэлгүй юу? Сайн дурын боломжуудад оролцохын тулд үнэ төлбөргүйгээр манай системд нэгдээрэй.
        </div>
    </main>
  );
}
