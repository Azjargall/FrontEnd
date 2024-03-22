export default function Footer() {

    return (
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
    );
  }