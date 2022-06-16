import Link from 'next/link';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    window.onscroll = () => {
      const toTop = document.querySelector('#to-top');

      if (window.pageYOffset) {
        toTop?.classList.remove('hidden');
        toTop?.classList.add('flex');
      } else {
        toTop?.classList.remove('flex');
        toTop?.classList.add('hidden');
      }
    };
  }, []);

  return (
    <>
      <footer className="bg-slate-800 py-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center lg:items-center lg:justify-between">
            <p className="mb-4 text-center text-sm font-medium text-slate-500 lg:mb-0 lg:text-left">
              Dibuat dengan <span className="text-red-600">❤</span> oleh{' '}
              <span>
                <Link href="https://instagram.com/yubliwarokka__">
                  <a
                    className="text-primary transition-all duration-300 hover:opacity-80"
                    target="_blank"
                  >
                    Yubli Audy Warokka™
                  </a>
                </Link>
              </span>
              . All Rights Reserved.
            </p>
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="mr-1 text-sm font-normal tracking-wider text-white">
                  Follow
                  {/* <i className="fa-regular fa-share-nodes ml-2" /> */}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  className="mr-2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#ffffff"
                    d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z"
                  />
                </svg>
              </div>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-sky-700 hover:bg-sky-700 hover:text-white"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-f text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-pink-700 hover:bg-pink-700 hover:text-white"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-red-700 hover:bg-red-700 hover:text-white"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700 hover:text-white"
                  title="Github"
                >
                  <i className="fa-brands fa-github text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-sky-700 hover:bg-sky-700 hover:text-white"
                  title="Linkedin"
                >
                  <i className="fa-brands fa-linkedin-in text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-green-700 hover:bg-green-700 hover:text-white"
                  title="Whatsapp"
                >
                  <i className="fa-brands fa-whatsapp text-md" />
                </a>
              </Link>
              <Link href="#">
                <a
                  target="_blank"
                  className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 transition-all duration-500 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
                  title="Telegram"
                >
                  <i className="fa-brands fa-telegram text-md" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Link href="#home">
        <a
          className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 animate-bounce items-center justify-center rounded-full bg-primary p-4"
          id="to-top"
        >
          <i className="fa-solid fa-chevron-up text-2xl text-white" />
        </a>
      </Link>
    </>
  );
}
