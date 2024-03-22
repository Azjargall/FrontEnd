import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function Bolomjuud() {
  const [white, setWhite] = useState("white");
  const [ongo, setOngo] = useState("[#f7f8f3]");

  const router = useRouter();
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownHover");
    dropdown.classList.toggle("hidden");
  };

  return (
    <div className="w-full h-auto bg-[#f7f8f3]">
        <Header />
      <div className={`w-full h-auto flex flex-col md:flex-row md:justify-around  bg-${ongo}`}>
        <div className={`w-[35%] md:w-[25%] h-auto md:h-[560px] border-rounded rounded-xs flex flex-col space-y-4 items-center bg-${white} rounded-lg divide-y-2 divide-${ongo} mt-[6%]`}>
          <div className="w-full h-[15%] flex items-center justify-center" style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
            <div className="w-[80%] h-full flex items-end">
              <p className="text-[10px] md:text-xs font-bold text-gray-400">ТӨРӨЛ</p>
            </div>
          </div>
          <div className="w-full h-[35%] flex items-center justify-center">
            <div className="w-[80%] h-full flex flex-col ">
              <div className="w-full h-[94%] flex">
                <div className="w-[15%] h-full flex flex-col justify-start justify-around">
                  <button onClick={() => router.push("/Bugd")} className="w-6 h-6 border rounded-md "></button>
                  <button onClick={() => router.push("/Saindur")} className="w-6 h-6 border rounded-md"></button>
                  <button onClick={() => router.push("/dadlaga")} className="w-6 h-6 border rounded-md bg-orange-600"></button>
                </div>
                <div className="w-[85%] h-full flex flex-col justify-start justify-around">
                  <p className="text-md md:text-sm text-blue-800">Бүгд</p>
                  <p className="text-md md:text-sm text-blue-800">Сайн дурын ажил</p>
                  <p className="text-md md:text-sm text-blue-800">Дадлага</p>
                </div>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-gray-400">БАЙРШИЛ</p>
            </div>
          </div>
          <div className="w-full h-[35%] flex items-center justify-center">
            <div className="w-[80%] h-full flex flex-col ">
              <div className="w-full h-[94%] flex">
                <div className="w-[15%] h-full flex flex-col justify-start justify-around">
                  <button onClick={() => handleClick("/Bugd")} className="w-6 h-6 border rounded-md"></button>
                  <button onClick={() => handleClick("/Saindur")} className="w-6 h-6 border rounded-md"></button>
                  <button onClick={() => handleClick("/Dadlaga")} className="w-6 h-6 border rounded-md"></button>
                </div>
                <div className="w-[85%] h-full flex flex-col justify-start justify-around">
                  <p className="text-md md:text-sm text-blue-800">Бүгд</p>
                  <p className="text-md md:text-sm text-blue-800">Улаанбаатар</p>
                  <p className="text-md md:text-sm text-blue-800">Орон нутаг</p>
                </div>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-gray-400">ТОГТВОРТОЙ ХӨГЖЛИЙН ЗОРИЛТ</p>
            </div>
          </div>
          <div className="w-full h-[15%] flex items-center justify-center flex-col" style={{ borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}>
            <button onClick={toggleDropdown} className={`text-white bg-orange-700 hover:bg-orange-600  font-medium rounded-lg text-sm w-[80%] h-[60%] text-center inline-flex items-center bg-${ongo}`}>Бүгд<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownHover" className="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`w-[65%] h-auto md:h-screen border-rounded rounded-xs flex flex-col space-y-4 items-center bg-${white} rounded-lg`}>
          <div className="w-[70%] h-[70%] md:w-full md:h-full flex flex-col justify-center items-center">
            <img className="h-[30%] w-[40%]" src="https://ivolunteer.mn/_next/image?url=%2Fpages%2Fempty.png&w=384&q=75" alt="Description of the image" />
            <p className="font-bold text-2xl">Одоогоор ямар нэгэн сайн дурын ажил ороогүй байна.</p>
            <p className=" text-lg text-center ">Та бусад боломжуудаас өөрт тохирох боломжийг сонгон хүсэлт илгээн сайн дурын ажилтан болж 
            оролцох боломжтой.</p>
            <button className="w-[25%] h-[8%] bg-orange-600 rounded-full text-white font-bold mt-[7%]">Бүх боломжууд харах</button>
          </div>
        </div>
        </div>
        <Footer />
      </div>
  );
}