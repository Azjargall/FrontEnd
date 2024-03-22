import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    return (
        <div className="fixed flex w-full justify-center bg-white lg:bg-[#f7f8f3]">
        <div className="hidden items-center justify-between gap-2 px-8 py-4 md:w-[738px] lg:mx-8 lg:flex lg:w-[860px] lg:gap-8 lg:px-0 xl:w-[1225px]">
          <div className="flex w-full items-center justify-between gap-2 lg:gap-8 xl:justify-start">
            <img
              onClick={() => router.push('/home')}
              width={183}
              height={40}
              src="https://ivolunteer.mn/svg/logo.svg"
              alt="logo"
            />
            <a  onClick={() => router.push('/Bolomjuud')} className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
              <img
                src="https://ivolunteer.mn/svg/opportunities.svg"
                alt="heart"
              />
              Боломжууд
            </a>
            <a onClick={() => router.push('/Baiguullaga')} className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
              <img
                src="https://ivolunteer.mn/svg/organizations.svg"
                alt="building"
              />
              Байгууллагууд
            </a>
            <a onClick={() => router.push('/Todorhoilolt')} className="flex cursor-pointer gap-2 text-sm font-semibold text-[#818181] transition-all hover:text-orange-600">
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
    );
  }