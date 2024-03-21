
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f7f8f3]"
      <div className="fixed flex w-full justify-center bg-white lg:bg-[#f7f8f3]">
        <div className="hidden items-center justify-between gap-2 px-8 py-4 md:w-[738px] lg:mx-8 lg:flex lg:w-[860px] lg:gap-8 lg:px-0 xl:w-[1225px]">
          <div className="flex w-full items-center justify-between gap-2 lg:gap-8 xl:justify-start">
            <img
              width={183}
              height={40}
              src="https://ivolunteer.mn/svg/logo.svg"
              alt="logo"
            />
            <a className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
              <img
                src="https://ivolunteer.mn/svg/opportunities.svg"
                alt="heart"
              />
              Боломжууд
            </a>
            <a className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
              <img
                src="https://ivolunteer.mn/svg/organizations.svg"
                alt="building"
              />
              Байгууллагууд
            </a>
            <a className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
              <img
                src="https://ivolunteer.mn/svg/description.svg"
                alt="heart"
              />
              Тодорхойлолт
            </a>
          </div>
          <button className="box-border flex w-max flex-shrink-0 cursor-pointer items-center gap-2 rounded-md border border-white bg-white px-8 py-5 font-bold text-[#818181] transition-all hover:border-orange-600 hover:text-black">
            <img src="https://ivolunteer.mn/svg/user.svg" />
            Нэвтрэх
          </button>
        </div>
        <div className="mx-6 flex w-[370px] items-center justify-between gap-2 py-6 sm:w-[640px] md:w-[738px] lg:hidden">
          <img
            className="h-[40px] w-[190px] sm:h-[52px] sm:w-[255px]"
            src="https://ivolunteer.mn/svg/logo.svg"
            alt="logo"
          />
          <div className="flex gap-2">
            <button className="rounded-lg border p-4 transition-all hover:border-orange-600">
              <img
                width={20}
                height={20}
                src="https://ivolunteer.mn/svg/user.svg"
              />
            </button>
            <button className="flex flex-col justify-between rounded-lg border p-4 py-[1.05rem]">
              <div className="h-1 w-4/5 rounded-xl bg-black" />
              <div className="h-1 w-[24px] rounded-xl bg-black" />
              <div className="h-1 w-4/5 rounded-xl bg-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[370px] sm:w-[640px] md:w-[738px] lg:w-[860px] xl:w-[1225px]">
        <div className="mt-20 flex items-center lg:mt-52">
          <div className="mt-32 w-3/5">
            <h1 className="mb-10 text-5xl font-bold text-[#303669]">
              Эерэг өөрчлөлтөд хөтлөх{" "}
              <span className="text-orange-600">сайн дурын ажилд</span> таныг
              урьж байна.
            </h1>
            <button className="flex items-center gap-3 rounded-md border border-orange-600 bg-orange-600 px-12 py-4 font-bold text-white transition-all hover:bg-white hover:text-orange-600">
              Яг одоо элсэх
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M2.10547 11.9515H17.671L14.9501 14.6664L14.9494 14.6671C14.7748 14.8428 14.6768 15.0804 14.6768 15.328C14.6768 15.5757 14.7748 15.8133 14.9494 15.989L14.9505 15.99C15.1261 16.1646 15.3637 16.2627 15.6114 16.2627C15.8591 16.2627 16.0967 16.1646 16.2723 15.99L16.2729 15.9895L20.6437 11.6187C20.7259 11.5393 20.7914 11.4442 20.8362 11.339L20.6063 11.241L20.8362 11.339C20.8814 11.233 20.9047 11.1189 20.9047 11.0037C20.9047 10.8884 20.8814 10.7743 20.8362 10.6683L20.6063 10.7664L20.8362 10.6683C20.7914 10.5632 20.726 10.4682 20.6439 10.3888L16.2805 6.01169C16.2804 6.01162 16.2803 6.01156 16.2803 6.0115C16.1932 5.92372 16.0895 5.85404 15.9754 5.80648C15.8611 5.75888 15.7386 5.73438 15.6148 5.73438C15.4911 5.73438 15.3685 5.75888 15.2543 5.80648L15.3504 6.03725L15.2543 5.80648C15.1404 5.85394 15.0369 5.92343 14.9499 6.01096C14.8624 6.09796 14.7929 6.20139 14.7455 6.31532C14.6979 6.42956 14.6734 6.5521 14.6734 6.67586C14.6734 6.79962 14.6979 6.92216 14.7455 7.0364C14.793 7.15047 14.8626 7.25401 14.9503 7.34108C14.9504 7.34121 14.9505 7.34135 14.9507 7.34149L17.6857 10.0765H2.10547C1.85683 10.0765 1.61837 10.1753 1.44256 10.3511L1.61913 10.5276L1.44256 10.3511C1.26674 10.5269 1.16797 10.7653 1.16797 11.014C1.16797 11.2626 1.26674 11.5011 1.44256 11.6769C1.61837 11.8527 1.85683 11.9515 2.10547 11.9515Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                />
              </svg>
            </button>
            <div className="my-24 flex gap-4 text-sm leading-4 text-[#818181]">
              <p className="flex place-items-start gap-2">
                <img width={20} src="https://ivolunteer.mn/svg/safe.svg" />
                Шалгагдсан байгууллагууд
              </p>
              <p className="flex place-items-start gap-2">
                <img width={20} src="https://ivolunteer.mn/svg/easy.svg" />
                Хялбар шийдэл & Зааварчилгаа
              </p>
              <p className="flex place-items-start gap-2">
                <img
                  width={20}
                  src="https://ivolunteer.mn/svg/opportunities.svg"
                />
                Ёс зүйн өндөр стандарт
              </p>
            </div>
          </div>
          <div className="w-2/5">
            <img
              className="w-full"
              src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fhero.png&w=1080&q=75"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="h-fit w-full rounded-md bg-white md:w-2/3">
            <img src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Ffeatured1.png&w=2048&q=75" />
            <div className="flex p-5">
              <div className="flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl text-white">
                Z
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-gray-400">
                  Zoppenganger LLC
                </p>
                <h1 className="my-4 text-xl font-bold text-[#303669]">Тест</h1>
                <span className="flex gap-2 text-sm text-gray-400">
                  <img width={16} src="https://ivolunteer.mn/svg/clock1.svg" />
                  Ажиллах цаг: 1 цаг, Идэвхтэй хугацаа: 7 хоног
                </span>
                <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-gray-300">
                  <span>#Сайн дурын ажил</span>
                  <span>#Улаанбаатар</span>
                  <span>#1. Ядуурлыг устгах</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 md:w-1/3">
            <div className="w-full rounded-md bg-white">
              <div className="flex p-5">
                <div className="flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl text-white">
                  G
                </div>
                <div className="p-5 pb-0">
                  <p className="text-xs font-bold text-gray-400">
                    Гэрэлт Цох Байшин
                  </p>
                  <h1 className="my-4 text-xl font-bold text-[#303669]">
                    Онлайн хүсэлт бөглөхөд туслах
                  </h1>
                  <span className="flex gap-2 text-sm text-gray-400">
                    <img
                      width={16}
                      src="https://ivolunteer.mn/svg/clock1.svg"
                    />
                    Ажиллах цаг: 1 цаг, Идэвхтэй хугацаа: 7 хоног
                  </span>
                  <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-gray-300">
                    <span>#Сайн дурын ажил</span>
                    <span>#Улаанбаатар</span>
                    <span>#1. Ядуурлыг устгах</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md bg-white">
              <div className="flex p-5">
                <div className="flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl text-white">
                  G
                </div>
                <div className="p-5 pb-0">
                  <p className="text-xs font-bold text-gray-400">
                    Гэрэлт Цох Байшин
                  </p>
                  <h1 className="my-4 text-xl font-bold text-[#303669]">
                    Онлайн хүсэлт бөглөхөд туслах
                  </h1>
                  <span className="flex gap-2 text-sm text-gray-400">
                    <img
                      width={16}
                      src="https://ivolunteer.mn/svg/clock1.svg"
                    />
                    Ажиллах цаг: 1 цаг, Идэвхтэй хугацаа: 7 хоног
                  </span>
                  <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-gray-300">
                    <span>#Сайн дурын ажил</span>
                    <span>#Улаанбаатар</span>
                    <span>#1. Ядуурлыг устгах</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md bg-white">
              <div className="flex p-5">
                <div className="flex aspect-square h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl text-white">
                  G
                </div>
                <div className="p-5 pb-0">
                  <p className="text-xs font-bold text-gray-400">
                    Гэрэлт Цох Байшин
                  </p>
                  <h1 className="my-4 text-xl font-bold text-[#303669]">
                    Онлайн хүсэлт бөглөхөд туслах
                  </h1>
                  <span className="flex gap-2 text-sm text-gray-400">
                    <img
                      width={16}
                      src="https://ivolunteer.mn/svg/clock1.svg"
                    />
                    Ажиллах цаг: 1 цаг, Идэвхтэй хугацаа: 7 хоног
                  </span>
                  <div className="mt-4 flex flex-wrap gap-x-3 text-sm text-gray-300">
                    <span>#Сайн дурын ажил</span>
                    <span>#Улаанбаатар</span>
                    <span>#1. Ядуурлыг устгах</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="mt-2 flex w-full items-center justify-center gap-3 rounded-md bg-white px-12 py-4 font-bold text-orange-600 transition-all hover:bg-orange-600 hover:text-white">
          Бүх боломжууд үзэх
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M2.10547 11.9515H17.671L14.9501 14.6664L14.9494 14.6671C14.7748 14.8428 14.6768 15.0804 14.6768 15.328C14.6768 15.5757 14.7748 15.8133 14.9494 15.989L14.9505 15.99C15.1261 16.1646 15.3637 16.2627 15.6114 16.2627C15.8591 16.2627 16.0967 16.1646 16.2723 15.99L16.2729 15.9895L20.6437 11.6187C20.7259 11.5393 20.7914 11.4442 20.8362 11.339L20.6063 11.241L20.8362 11.339C20.8814 11.233 20.9047 11.1189 20.9047 11.0037C20.9047 10.8884 20.8814 10.7743 20.8362 10.6683L20.6063 10.7664L20.8362 10.6683C20.7914 10.5632 20.726 10.4682 20.6439 10.3888L16.2805 6.01169C16.2804 6.01162 16.2803 6.01156 16.2803 6.0115C16.1932 5.92372 16.0895 5.85404 15.9754 5.80648C15.8611 5.75888 15.7386 5.73438 15.6148 5.73438C15.4911 5.73438 15.3685 5.75888 15.2543 5.80648L15.3504 6.03725L15.2543 5.80648C15.1404 5.85394 15.0369 5.92343 14.9499 6.01096C14.8624 6.09796 14.7929 6.20139 14.7455 6.31532C14.6979 6.42956 14.6734 6.5521 14.6734 6.67586C14.6734 6.79962 14.6979 6.92216 14.7455 7.0364C14.793 7.15047 14.8626 7.25401 14.9503 7.34108C14.9504 7.34121 14.9505 7.34135 14.9507 7.34149L17.6857 10.0765H2.10547C1.85683 10.0765 1.61837 10.1753 1.44256 10.3511L1.61913 10.5276L1.44256 10.3511C1.26674 10.5269 1.16797 10.7653 1.16797 11.014C1.16797 11.2626 1.26674 11.5011 1.44256 11.6769C1.61837 11.8527 1.85683 11.9515 2.10547 11.9515Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.5"
            ></path>
          </svg>
        </button>
        <div className="mt-12 flex w-full flex-col gap-4">
          <div className="flex items-end text-xl font-bold text-[#303669] md:text-3xl">
            <img
              className="h-[40px] w-[190px] md:h-[52px] md:w-[255px]"
              src="https://ivolunteer.mn/svg/logo.svg"
              alt="logo"
            />
            <p className="mb-1">гэж юу вэ?</p>
          </div>
          <span>
            <span className="font-bold text-black"> iVolunteer.mn нь 2015 онд үүсгэн байгуулагдсан бөгөөд Сайн дурынхан
            ажилтнууд болон байгууллагуудыг холбох, сайн дурын үйл ажиллагаа
            нийгэмд тустай төсөл хөтөлбөрүүдийг дэмжих зорилготой нээлттэй
            санаачилга юм.</span> 
           
          </span>
          <div className="flex justify-between gap-4">
            <div className="flex flex-1 flex-col rounded-lg bg-[#FBFAF7] p-4 sm:p-8">
              <div className="flex items-start">
                <img
                  className="w-[22px] sm:w-[44px]"
                  src="https://ivolunteer.mn/svg/about1.svg"
                />
                <h1 className="my-6 mr-11 text-xl font-bold text-[#303669] sm:my-10 sm:text-3xl">
                  11
                </h1>
              </div>
              <p className="w-fit text-xs sm:text-base text-black">Нээлттэй боломжууд</p>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-[#FBFAF7] p-4 sm:p-8">
              <div className="flex items-start">
                <img
                  className="w-[22px] sm:w-[44px]"
                  src="https://ivolunteer.mn/svg/about2.svg"
                />
                <h1 className="my-6 mr-11 text-xl font-bold text-[#303669] sm:my-10 sm:text-3xl">
                  3827
                </h1>
              </div>
              <p className="w-fit text-xs sm:text-base text-black">Сайн дурын гишүүд</p>
            </div>
            <div className="flex flex-1 flex-col rounded-lg bg-[#FBFAF7] p-4 sm:p-8">
              <div className="flex items-start " >
                <img
                  className="w-[22px] sm:w-[44px]"
                  src="https://ivolunteer.mn/svg/about3.svg"
                />
                <h1 className="my-6 mr-7 text-xl font-bold text-[#303669] sm:my-10 sm:text-3xl">
                  63
                </h1>
              </div>
              <p className="w-fit text-xs md:text-base text-black">
                Шалгагдсан байгууллагууд
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center">
          <div className="w-0 sm:w-5/12">
            <img
              className="w-full"
              src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fstart.png&w=1920&q=75"
            />
          </div>
          <div className="mt-12 flex w-full flex-col gap-16 sm:w-7/12">
            <div className="flex gap-2 text-3xl font-bold text-[#303669]">
              <img src="https://ivolunteer.mn/svg/start.svg" />
              <span className="text-orange-600">Сайн дурын</span> ажил нь ...
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-semibold text-[#303669]">
                Өөрийгөө <span className="font-bold">сорих</span> боломжууд
              </span>
              <span className="text-[#818181]">
                Та өөрийн хүсэл, сонирхол, чадвартаа тохируулан боломжуудаас
                сонголт хийх боломжтой. Таны чадвар хаа нэгтэй хэрэгтэй л байгаа
                шүү 🙂
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-semibold text-[#303669]">
                Нийгэмдээ <span className="font-bold">эерэг нөлөөллийг</span>{" "}
                бий болгох
              </span>
              <span className="text-[#818181]">
                Таны оролцоо асуудлыг шийдвэрлэх оч нь байж олон хүний амьдралд
                тус болох нь мэдээж шүү дээ.
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-semibold text-[#303669]">
                Сайн дураар <span className="font-bold">ажилласан түүхийг</span>{" "}
                бий болгох
              </span>
              <span className="text-[#818181]">
                Сайн дураар ажиллаж байсан нотолгоо буюу тодорхойлолт авах
                бөгөөд таны хувийн хуудас дээр байнга хадгалагдаж байх болно.
              </span>
            </div>
            <button className="flex w-fit items-center gap-3 rounded-md border border-orange-600 bg-orange-600 px-12 py-4 font-bold text-white transition-all hover:bg-white hover:text-orange-600">
              Яг одоо элсэх
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M2.10547 11.9515H17.671L14.9501 14.6664L14.9494 14.6671C14.7748 14.8428 14.6768 15.0804 14.6768 15.328C14.6768 15.5757 14.7748 15.8133 14.9494 15.989L14.9505 15.99C15.1261 16.1646 15.3637 16.2627 15.6114 16.2627C15.8591 16.2627 16.0967 16.1646 16.2723 15.99L16.2729 15.9895L20.6437 11.6187C20.7259 11.5393 20.7914 11.4442 20.8362 11.339L20.6063 11.241L20.8362 11.339C20.8814 11.233 20.9047 11.1189 20.9047 11.0037C20.9047 10.8884 20.8814 10.7743 20.8362 10.6683L20.6063 10.7664L20.8362 10.6683C20.7914 10.5632 20.726 10.4682 20.6439 10.3888L16.2805 6.01169C16.2804 6.01162 16.2803 6.01156 16.2803 6.0115C16.1932 5.92372 16.0895 5.85404 15.9754 5.80648C15.8611 5.75888 15.7386 5.73438 15.6148 5.73438C15.4911 5.73438 15.3685 5.75888 15.2543 5.80648L15.3504 6.03725L15.2543 5.80648C15.1404 5.85394 15.0369 5.92343 14.9499 6.01096C14.8624 6.09796 14.7929 6.20139 14.7455 6.31532C14.6979 6.42956 14.6734 6.5521 14.6734 6.67586C14.6734 6.79962 14.6979 6.92216 14.7455 7.0364C14.793 7.15047 14.8626 7.25401 14.9503 7.34108C14.9504 7.34121 14.9505 7.34135 14.9507 7.34149L17.6857 10.0765H2.10547C1.85683 10.0765 1.61837 10.1753 1.44256 10.3511L1.61913 10.5276L1.44256 10.3511C1.26674 10.5269 1.16797 10.7653 1.16797 11.014C1.16797 11.2626 1.26674 11.5011 1.44256 11.6769C1.61837 11.8527 1.85683 11.9515 2.10547 11.9515Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 text-3xl font-bold text-orange-600">
            <img src="https://ivolunteer.mn/svg/message.svg" />
            <span className="text-[#303669]">Сайн дурынханы</span> сэтгэгдэл
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black  ">
                Сайн дурын ажил хийе гэж боддог байсан ч хаана хандахаа
                мэддэггүй байлаа. iVolunteer.mn-д баярлалаа!
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px]"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Ftestimonial_user.png&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">Б.Чандмань</p>
                  <p className="text-[#818181]">Сайтын хэрэглэгч</p>
                </span>
              </div>
            </div>
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black">
                Гадаадын их сургуулиас тэтгэлэг авахад минь сайн дурын ажил
                хийсэн маань их тус болсон. Баярлалаа
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px] rounded-full"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fbattor.jpg&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">С.Баттөр</p>
                  <p className="text-[#818181]">Сайтын хэрэглэгч</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black">
                Сайн дурын ажлын боломжийг хэзээ ч, хаанаас ч авч болох цахим
                мэдээллийн сантай болж байна гэдэг нь нийгэмдээ хувь нэмрээ
                оруулахыг зорьж буй залуучууд бидэнд маш хэрэгцээтэй зүйл болж
                байна
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px] rounded-full"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fsereeter.jpg&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">Э.Сэрээтэр</p>
                  <p className="text-[#818181]">Сайтын хэрэглэгч</p>
                </span>
              </div>
            </div>
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black">
                Ажлынхаа хажуугаар сайн дурын ажил хийдэг болсон. Гоё байгаа.
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px] rounded-full"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fsuh-ochir.jpg&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">Ц.Сүх-Очир</p>
                  <p className="text-[#818181]">Сайтын хэрэглэгч</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:hidden lg:flex">
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black">
                Зарим яаралтай ажилд сайн дурын ажилтан олдохгүй үе зөндөө
                байдаг. Гэтэл www.iVolunteer.mn-д боломж нийтлээд л маргааш нь
                "boom" гэлтэй олон залуус ажиллах хүсэлтээ илэрхийлсэнийг хараад
                шоконд орсон шүү. Сайн дурын ажлын мэдээллийг нэгдсэн байдлаар
                цахим хэлбэрээр авах боломжийг олгож байгаа нь цаг үетэйгээ
                нийцсэн сайхан санаачилга байна
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px] rounded-full"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fbaasannyam.jpg&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">
                    Э.Баасаннямр
                  </p>
                  <p className="text-[#818181]">Демокрейзи залуусын төв</p>
                </span>
              </div>
            </div>
            <div className="rounded-md bg-white p-10">
              <div className="flex gap-1">
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
                <div className="rounded-sm border p-1">
                  <img src="https://ivolunteer.mn/svg/star.svg" />
                </div>
              </div>
              <div className="mb-10 mt-8 text-lg text-black">
                Зүгээр л маш амар юм байна лээ. Туршаарай guys
              </div>
              <div className="flex gap-4">
                <img
                  className="h-[65px] w-[65px] rounded-full"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fochgerel.jpg&w=256&q=75"
                />
                <span>
                  <p className="text-lg font-bold text-[#303669]">Ч.Очгэрэл</p>
                  <p className="text-[#818181]">Сайтын хэрэглэгч</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-2 text-3xl font-bold">
            <img src="https://ivolunteer.mn/svg/media.svg" />
            <span className="text-[#303669]">Блог</span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-between gap-6 rounded-md bg-white p-3 px-6">
            <img
              className="h-[228px] w-full rounded-md object-cover"
              src="https://ivolunteermn.s3.amazonaws.com/media/public/blogs/Handbook_MN_pages-to-jpg-0001.jpg"
            />
            <p className="font-bold text-black">
              "Сайн дурын ажлыг хөгжүүлцгээе!" гарын авлага
            </p>
            <button className="w-fit rounded-full border p-4 px-10 font-light text-gray-500">
              Дэлгэрэнгүй
            </button>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 rounded-md bg-white p-3 px-6">
            <img
              className="h-[228px] w-full rounded-md object-cover"
              src="https://ivolunteermn.s3.amazonaws.com/media/public/blogs/8.PNG"
            />
            <p className="font-bold text-black">
              Модуль 8 - Сайн дурын ажилтны урамшуулал
            </p>
            <button className="w-fit rounded-full border p-4 px-10 font-light text-gray-500">
              Дэлгэрэнгүй
            </button>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 rounded-md bg-white p-3 px-6 sm:hidden md:flex">
            <img
              className="h-[228px] w-full rounded-md object-cover"
              src="https://ivolunteermn.s3.amazonaws.com/media/public/blogs/7.PNG"
            />
            <p className="font-bold text-black">
              Модуль 7 - Сайн дурын ажилтанг удирдан чиглүүлэх нь
            </p>
            <button className="w-fit rounded-full border p-4 px-10 font-light text-gray-500">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <button class="mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-white px-12 py-4 font-bold text-orange-600 transition-all hover:bg-orange-600 hover:text-white">
          Бүх нийтлэл унших
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M2.10547 11.9515H17.671L14.9501 14.6664L14.9494 14.6671C14.7748 14.8428 14.6768 15.0804 14.6768 15.328C14.6768 15.5757 14.7748 15.8133 14.9494 15.989L14.9505 15.99C15.1261 16.1646 15.3637 16.2627 15.6114 16.2627C15.8591 16.2627 16.0967 16.1646 16.2723 15.99L16.2729 15.9895L20.6437 11.6187C20.7259 11.5393 20.7914 11.4442 20.8362 11.339L20.6063 11.241L20.8362 11.339C20.8814 11.233 20.9047 11.1189 20.9047 11.0037C20.9047 10.8884 20.8814 10.7743 20.8362 10.6683L20.6063 10.7664L20.8362 10.6683C20.7914 10.5632 20.726 10.4682 20.6439 10.3888L16.2805 6.01169C16.2804 6.01162 16.2803 6.01156 16.2803 6.0115C16.1932 5.92372 16.0895 5.85404 15.9754 5.80648C15.8611 5.75888 15.7386 5.73438 15.6148 5.73438C15.4911 5.73438 15.3685 5.75888 15.2543 5.80648L15.3504 6.03725L15.2543 5.80648C15.1404 5.85394 15.0369 5.92343 14.9499 6.01096C14.8624 6.09796 14.7929 6.20139 14.7455 6.31532C14.6979 6.42956 14.6734 6.5521 14.6734 6.67586C14.6734 6.79962 14.6979 6.92216 14.7455 7.0364C14.793 7.15047 14.8626 7.25401 14.9503 7.34108C14.9504 7.34121 14.9505 7.34135 14.9507 7.34149L17.6857 10.0765H2.10547C1.85683 10.0765 1.61837 10.1753 1.44256 10.3511L1.61913 10.5276L1.44256 10.3511C1.26674 10.5269 1.16797 10.7653 1.16797 11.014C1.16797 11.2626 1.26674 11.5011 1.44256 11.6769C1.61837 11.8527 1.85683 11.9515 2.10547 11.9515Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="0.5"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mt-20 flex w-full justify-center bg-[#303669] p-12">
        <div className="w-[370px] sm:w-[640px] md:w-[738px] lg:w-[860px] xl:w-[1225px]">
          <div className="flex grid-cols-3 flex-col gap-8 sm:grid">
            <div className="flex flex-col gap-6">
              <img
                class="h-[34px] w-[169px] lg:h-[47px] lg:w-[230px]"
                src="https://ivolunteer.mn/svg/logo_white.svg"
                alt="logo"
              />
              <p className="text-center text-sm text-white sm:text-left">
                Энэхүү сайтын 2.1 хувилбар нь Европын Холбооны санхүүжилттэй
                “Бүгд залуусын төлөө, Залуус бүгдийн төлөө” төслийн хүрээнд
                хөгжүүлэгдэв. Тус цахим хуудсанд орсон агуулгын хариуцлагыг
                Монголын Залуучуудын Эвсэл байгууллага бүрэн хариуцах бөгөөд
                Европын Холбооны байр суурийг илэрхийлээгүй болно.
              </p>
              <div className="hidden justify-end sm:flex">
                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-2 text-white transition-all hover:text-[#818181]">
                    <div className="h-2 w-2 bg-orange-600" />
                    Нууцлалын журам
                  </button>
                  <button className="flex items-center gap-2 text-white transition-all hover:text-[#818181]">
                    <div className="h-2 w-2 bg-orange-600" />
                    Үйлчилгээний нөхцөл
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-center text-sm font-bold text-gray-400 sm:text-left">
                САНХҮҮЖҮҮЛЭГЧ БАЙГУУЛЛАГУУД
              </p>
              <div className="grid grid-cols-3 gap-2">
                <img
                  className="aspect-square rounded-lg bg-white object-cover"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Feuropean_union.png&w=256&q=75"
                />
                <img
                  className="aspect-square rounded-lg object-cover"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fyouth.png&w=256&q=75"
                />
                <img
                  className="aspect-square rounded-lg bg-white object-contain"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Faustralian-volunteers.png&w=384&q=75"
                />
              </div>
              <p className="mt-6 text-center text-sm font-bold text-gray-400 sm:text-left">
                ТӨСӨЛ ХЭРЭГЖҮҮЛЭГЧИД
              </p>
              <div className="grid grid-cols-3 gap-2">
                <img
                  className="aspect-square rounded-lg bg-white object-cover"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fcaritas.jpg&w=256&q=75"
                />
                <img
                  className="aspect-square rounded-lg bg-white object-cover"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fmyc.png&w=256&q=75"
                />
                <img
                  className="aspect-square rounded-lg bg-white object-contain"
                  src="https://ivolunteer.mn/_next/image?url=%2Flanding%2Fcce.png&w=256&q=75"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-center text-sm font-bold text-gray-400 sm:text-left">
                БИДЭНТЭЙ ХОЛБОГДОХ
              </p>
              <span className="text-center text-sm font-extrabold text-white sm:text-left">
                Монгол Улс, Улаанбаатар хот, Баянзүрх дүүрэг, 1-р хороо, Ундрам
                плаза
              </span>
              <p className="text-center text-sm font-bold text-gray-400 sm:text-left">
                ЦАХИМ ШУУДАН
              </p>
              <span className="text-center text-sm font-extrabold text-white sm:text-left">
                <p>contact@ivolunteer.mn</p>
                <p>mongolianyouthcouncil@gmail.com</p>
              </span>
            </div>
          </div>
          <p className="mt-40 text-center text-xs font-extrabold text-white">
            Бүх эрх хуулиар хамгаалагдсан. 2024 он.
          </p>
        </div>
      </div>
    </div>
  );
}
