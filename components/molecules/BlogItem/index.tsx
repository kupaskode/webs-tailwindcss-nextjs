import Link from 'next/link';

export default function BlogItem() {
  return (
    <div className="flex flex-wrap lg:justify-center">
      <div className="mb-8 w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="group w-full overflow-hidden rounded-lg bg-white shadow-slate-200/40 transition-all duration-500 ease-out hover:shadow-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/img/web-design.jpg"
              alt="Programming"
              className="w-full transition-all duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-0 h-full w-full transition-all duration-500 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
          </div>
          <div className="px-6 pb-7 pt-6">
            <h3 className="mb-3 break-words text-xl font-bold text-slate-800">
              <Link href="#">
                <a className="transition-all duration-500 hover:text-primary">
                  Learn Web Design Beginners
                </a>
              </Link>
            </h3>
            <p className="mb-8 text-sm font-normal leading-6 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores quas molestiae consectetur. Adipisci nobis consequatur
              vero officia?
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative mr-4 h-11 w-11 overflow-hidden rounded-full bg-slate-300">
                  <Link href="#">
                    <a>
                      <img
                        src="https://i.pravatar.cc/300"
                        alt="Author"
                        className="bg-cover"
                      />
                    </a>
                  </Link>
                  <div className="absolute top-0 w-full transition-all duration-500 hover:bg-slate-800 hover:opacity-50" />
                </div>
                <div className="">
                  <h5 className="text-[14px] font-semibold text-slate-700">
                    <Link href="#">
                      <a className="transition-all duration-500 hover:text-primary">
                        Yubli Audy Warokka
                      </a>
                    </Link>
                  </h5>
                  <h6 className="text-[13px] font-normal text-slate-500">
                    Jun 15, 2022 . 20 min read
                  </h6>
                </div>
              </div>
              <button type="button" className="outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-900 transition-all duration-500 hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="group w-full overflow-hidden rounded-lg bg-white shadow-slate-200/40 transition-all duration-500 ease-out hover:shadow-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/img/web-hosting.jpg"
              alt="Programming"
              className="w-full transition-all duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-0 h-full w-full transition-all duration-500 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
          </div>
          <div className="px-6 pb-7 pt-6">
            <h3 className="mb-3 break-words text-xl font-bold text-slate-800">
              <Link href="#">
                <a className="transition-all duration-500 hover:text-primary">
                  The Best Web Hosting Options Today
                </a>
              </Link>
            </h3>
            <p className="mb-8 text-sm font-normal leading-6 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores quas molestiae consectetur. Adipisci nobis consequatur
              vero officia?
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative mr-4 h-11 w-11 overflow-hidden rounded-full bg-slate-300">
                  <Link href="#">
                    <a>
                      <img
                        src="https://i.pravatar.cc/300"
                        alt="Author"
                        className="bg-cover"
                      />
                    </a>
                  </Link>
                  <div className="absolute top-0 w-full transition-all duration-500 hover:bg-slate-800 hover:opacity-50" />
                </div>
                <div className="">
                  <h5 className="text-[14px] font-semibold text-slate-700">
                    <Link href="#">
                      <a className="transition-all duration-500 hover:text-primary">
                        Yubli Audy Warokka
                      </a>
                    </Link>
                  </h5>
                  <h6 className="text-[13px] font-normal text-slate-500">
                    Jun 15, 2022 . 20 min read
                  </h6>
                </div>
              </div>
              <button type="button" className="outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-900 transition-all duration-500 hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="group w-full overflow-hidden rounded-lg bg-white shadow-slate-200/40 transition-all duration-500 ease-out hover:shadow-lg">
          <div className="relative w-full overflow-hidden">
            <img
              src="/img/smartphone.jpg"
              alt="Programming"
              className="w-full transition-all duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute top-0 h-full w-full transition-all duration-500 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
          </div>
          <div className="px-6 pb-7 pt-6">
            <h3 className="text-slate-800mb-3 break-words text-xl font-bold">
              <Link href="#">
                <a className="transition-all duration-500 hover:text-primary">
                  Tips & Trick for Choosing the Best Smartphone
                </a>
              </Link>
            </h3>
            <p className="mb-8 text-sm font-normal leading-6 text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              asperiores quas molestiae consectetur. Adipisci nobis consequatur
              vero officia?
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative mr-4 h-11 w-11 overflow-hidden rounded-full bg-slate-300">
                  <Link href="#">
                    <a>
                      <img
                        src="https://i.pravatar.cc/300"
                        alt="Author"
                        className="bg-cover"
                      />
                    </a>
                  </Link>
                  <div className="absolute top-0 w-full transition-all duration-500 hover:bg-slate-800 hover:opacity-50" />
                </div>
                <div className="">
                  <h5 className="text-[14px] font-semibold text-slate-700">
                    <Link href="#">
                      <a className="transition-all duration-500 hover:text-primary">
                        Yubli Audy Warokka
                      </a>
                    </Link>
                  </h5>
                  <h6 className="text-[13px] font-normal text-slate-500">
                    Jun 15, 2022 . 20 min read
                  </h6>
                </div>
              </div>
              <button type="button" className="outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-900 transition-all duration-500 hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
