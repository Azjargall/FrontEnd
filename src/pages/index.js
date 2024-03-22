import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-[596px] h-[350px] bg-white text-black rounded">
    <div className="h-1/2 w-full flex justify-center items-around">
      <div className="w-[20%] h-full">
        <img
          src="https://ui-avatars.com/api/?name=Zoppenganger%20LLC&length=1&bold=true&color=FFFFFF&rounded=true&format=svg&background=E46748"
          className="w-full h-auto"
        ></img>
      </div>
      <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
        <p className="text-lg">Zoppenganger</p>
        <p className="text-3xl font-bold">Test</p>
        <div className="flex justify-center items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Ажиллах цаг: 1 цаг, Идэвхтэй хугацаа: 7 хоног
        </div>
      </div>
    </div>
    <div className="h-1/2 w-full">
      <div className="h-1/2 flex justify-start items-center gap-2 p-2">
        <button className="w-auto h-auto p-3 bg-gray-200 rounded-full">
          Улаанбаатар
        </button>
        <button className="w-auto h-auto p-3 bg-gray-200 rounded-full">
          Сайн дурын ажил
        </button>{' '}
        <button className="w-auto h-auto p-3 bg-gray-200 rounded-full">
          1. Ядуурлыг устгах
        </button>
      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="h-1/3 p-2 flex justify-between items-center">
        <p>Хүсэлт илгээх</p>
        <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex">
          Дэлгэрэнгүй
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
    
  );
}