import Link from 'next/link';

export default function Menu() {
  return (
    <nav
      id="nav-menu"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg duration-300 focus:transition-all lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
    >
      <ul className="block uppercase lg:flex">
        <li className="group">
          <Link href="#home">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              Home
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#about">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              About
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#portfolio">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              Portfolio
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#partner">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              Partners
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#blog">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              Blog
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#contact">
            <a className="mx-4 flex py-2 text-[15px] font-medium tracking-widest text-slate-800 group-hover:text-primary">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
