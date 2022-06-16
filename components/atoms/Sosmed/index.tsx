import Link from 'next/link';

export default function Sosmed() {
  return (
    <div className="flex items-center justify-center lg:justify-start">
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
  );
}
