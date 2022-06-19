import Link from 'next/link';

export default function Menu() {
  return (
    <nav
      id="nav-menu"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg duration-300 focus:transition-all lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
    >
      <ul className="block lg:flex">
        <li className="group">
          <Link href="#home">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Beranda
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#about">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Tentang Saya
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#portfolio">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Portfolio
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#clients">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Klien
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#blog">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Blog
            </a>
          </Link>
        </li>
        <li className="group">
          <Link href="#contact">
            <a className="text-dark mx-8 flex py-2 text-base group-hover:text-primary">
              Kontak
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
