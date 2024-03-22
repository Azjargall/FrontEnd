import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function Bugd() {
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
                  <button onClick={() => router.push("/Bugd")} className="w-6 h-6 border rounded-md bg-orange-600"></button>
                  <button onClick={() => router.push("/Saindur")} className="w-6 h-6 border rounded-md"></button>
                  <button onClick={() => router.push("/dadlaga")} className="w-6 h-6 border rounded-md"></button>
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
        <div className={`w-[65%] h-auto  border-rounded rounded-xs flex flex-col space-y-4 items-center  rounded-lg mt-[6%]`}>
          <button className="w-full h-[50%]  flex flex-col justify-center bg-white transition transition duration-150 ease-in-out">
          <div className="h-1/3 w-full flex justify-center items-around">
            <div className="w-[15%] h-full flex items-center justify-center">
              <img
                src="https://ivolunteer.mn/_next/image?url=https%3A%2F%2Fivolunteermn.s3.amazonaws.com%2Fmedia%2Fpublic%2Fmedia%2Flogo_image%2F4a2e3cb3-44ca-4a99-9564-249b8e1adb19.jpg&w=96&q=75"
                className="w-[60%] h-auto"
              ></img>
            </div>
            <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
              <p className="text-lg text-gray-400">
Монголын Залуучуудын Эвсэл ТББ</p>
              <p className="text-3xl font-bold">Видео графикч- I Volunteer, Do You?</p>
              <div className="flex justify-center items-center text-sm text-gray-400">
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
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Улаанбаатар
              </button>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Сайн дурын ажил
              </button>{' '}
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                1. Ядуурлыг устгах
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="h-1/2 p-2 flex justify-between items-center">
              <p className="text-gray-600 ml-[2%]">Хүсэлт илгээх</p>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex text-md mr-[2%]">
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
        </button>
        <button className="w-full h-[50%]  flex flex-col justify-center bg-white transition transition duration-150 ease-in-out">
          <div className="h-1/3 w-full flex justify-center items-around">
            <div className="w-[15%] h-full flex items-center justify-center">
              <img
                src="https://ui-avatars.com/api/?name=%D0%93%D1%8D%D1%80%D1%8D%D0%BB%D1%82%20%D0%A6%D0%BE%D1%85%20%D0%91%D0%B0%D0%B9%D1%88%D0%B8%D0%BD&length=1&bold=true&color=FFFFFF&rounded=true&format=svg&background=E46748"
                className="w-[60%] h-auto"
              ></img>
            </div>
            <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
              <p className="text-lg text-gray-400">
Гэрэлт Цох Байшин   </p>
              <p className="text-3xl font-bold">Онлайн хүсэлт бөглөхөд туслах</p>
              <div className="flex justify-center items-center text-sm text-gray-400">
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
                Ажиллах цаг: 3 цаг, Идэвхтэй хугацаа: 7 хоног
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full">
            <div className="h-1/2 flex justify-start items-center gap-2 p-2">
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Улаанбаатар
              </button>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Сайн дурын ажил
              </button>{' '}
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
              4. Чанартай боловсрол
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="h-1/2 p-2 flex justify-between items-center">
              <p className="text-gray-600 ml-[2%]">Хүсэлт илгээх</p>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex text-md mr-[2%]">
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
        </button>
        <button className="w-full h-[50%]  flex flex-col justify-center bg-white transition transition duration-150 ease-in-out">
          <div className="h-1/3 w-full flex justify-center items-around">
            <div className="w-[15%] h-full flex items-center justify-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8ODg4AAAAICAjh4eF9fX0zMzNOTk7X19cqKiphYWGsrKwKCgr7+/vm5uZ0dHS8vLzu7u5DQ0OdnZ3Nzc1TU1OTk5O/v7+GhoZJSUl5eXlYWFi2trZmZmbx8fEmJiZubm45OTkeHh4YGBjIyMijo6Ourq6YmJiDg4OqYIa4AAAEDUlEQVR4nO3cWWOiMBQFYLmIomLdWxds1S76/3/hAC4VSpxOPc690vM985AjCTcJkVqNiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOiXCTtBoN2GGxr3JPGi3Yyb6bdEIs/zX7UbciNhQ8RLSUO7KbexO+RLEja123ILz41jviThXLs1N1CXz4CevGs3B68uvneWMNRuD9xzLmAk2u3Ba5110UoOwyAXsIKdNCwEbGk3CK5RSNjXbhBavxCwehOaVtVH4bgQsHorp16+UlTvMVNLl0snvgy02wOXKxW+1LXbg9c5n3FXMWCyKjwbg9Xroon2adlbwadoZnHYuJBh5ergwUL8dHdtMdZuyM2s5HUYxM/azaDvCePRNAge4wsDrt4Jmpuk067b0/jOKsfgvSmf2nG35JqnbL9b/CiK9pfN3/57O3/qLY33WdnTAMtC68OdSG4Ct79sVPZTmDNuSH79sC8P0fZU4LudRjHeKaT9ncVuuyTffhIqs04y2Ab9pTguyTK2jA/Isbvx6Y3cc1+RXfShHeKSUWnn+0cy1Y7hFly+Pd+OaHbKCgqYRHzUjlJuiwqYRDRZGp9wAZPHjcHC+Ix4yBwDvlgsGU1gH11qhynTBwa0WS1yrwSvC2jzQfoOu4Wy085SDnYLZaIdpRysUvgWy0RqApvNmCz1aS1EBWxrR3H4gCW0ug2+BCWUlXYSF9SEzewL4QfQLfQ32klcULXC6GymhlsYitm3GT1UQqPVHrZwijztIE4bzKRUZtpBnEDFwubCN4NK2NMO4lT5GQ0soeFeCko41A7iBBqHhg98+6iJt9mKv678rG1R+Zk36p2T3dOmI9gmhsXXFSnYXqLV3eBaHbfhbfVpikto9f02qlzYHYk7XEKjj1Pky0Ob/2QbIF/h2zz3BdrH2EfsaKcpMwXeRE9G2nFKvCET2tzOAB41SSMaPKC4gt5ET2RqbXaD7aZZRmtLKWw39QzuD0OfplnCWDtSAW59cUxobSDWZuBnjb2KgTx86dl84f0KnLl5staOU6IDnbk9accpgzueaPXMAvAmmisVB7CRaPb7ZrhdRaPn92A10fDHv0CHo+RBO4jbIyKiuVVFTuv6iFY3FA8A/dTqpvDR1Yf2Zasd4W+uPPJt+LjCUfeqyVskd/A1gvCam2i31p+7Yn5q9C9PX/z4vb4stJv+Xc6z+5GffUXBFdD+U+akXRIx+zbEZjZptuTL9xTuLmDJwegk1Co+zjcH/d7Xv+Wb/b+MQ6fwZYxh8fOI8TqXUUy+cbroYSL7ypgOvXnZTCxcHbpr2n/bhtcTTmGQfSdi03N+3bLbn6/TS5rbe8yX6Q6s/lWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfq8/tzAurNL1lJsAAAAASUVORK5CYII="
                className="w-[60%] h-auto"
              ></img>
            </div>
            <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
              <p className="text-lg text-gray-400">Apple Inc</p>
              <p className="text-3xl font-bold"> видео контентэд туслах</p>
              <div className="flex justify-center items-center text-sm text-gray-400">
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
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Улаанбаатар
              </button>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Сайн дурын ажил
              </button>{' '}
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                1. Ядуурлыг устгах
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="h-1/2 p-2 flex justify-between items-center">
              <p className="text-gray-600 ml-[2%]">Хүсэлт илгээх</p>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex text-md mr-[2%]">
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
        </button>
        <button className="w-full h-[50%]  flex flex-col justify-center bg-white transition transition duration-150 ease-in-out">
          <div className="h-1/3 w-full flex justify-center items-around">
            <div className="w-[15%] h-full flex items-center justify-center">
              <img
                src="https://ui-avatars.com/api/?name=Zoppenganger%20LLC&length=1&bold=true&color=FFFFFF&rounded=true&format=svg&background=E46748"
                className="w-[60%] h-auto"
              ></img>
            </div>
            <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
              <p className="text-lg text-gray-400">Zoppenganger</p>
              <p className="text-3xl font-bold">Test</p>
              <div className="flex justify-center items-center text-sm text-gray-400">
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
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Улаанбаатар
              </button>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Сайн дурын ажил
              </button>{' '}
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                1. Ядуурлыг устгах
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="h-1/2 p-2 flex justify-between items-center">
              <p className="text-gray-600 ml-[2%]">Хүсэлт илгээх</p>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex text-md mr-[2%]">
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
        </button>
        <button className="w-full h-[50%]  flex flex-col justify-center bg-white transition transition duration-150 ease-in-out">
          <div className="h-1/3 w-full flex justify-center items-around">
            <div className="w-[15%] h-full flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png"
                className="w-[60%] h-auto"
              ></img>
            </div>
            <div className="w-[80%] h-full p-4 flex justify-around items-start flex-col">
              <p className="text-lg text-gray-400">Unknown</p>
              <p className="text-3xl font-bold">Still testing</p>
              <div className="flex justify-center items-center text-sm text-gray-400">
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
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Улаанбаатар
              </button>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                Сайн дурын ажил
              </button>{' '}
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full text-gray-400">
                1. Ядуурлыг устгах
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="h-1/2 p-2 flex justify-between items-center">
              <p className="text-gray-600 ml-[2%]">Хүсэлт илгээх</p>
              <button className="w-auto h-auto p-3 bg-gray-200 rounded-full flex text-md mr-[2%]">
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
        </button>
          </div>
        </div>
        <Footer />
      </div>
  );
}