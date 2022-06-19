import Link from 'next/link';
import { useEffect } from 'react';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');

      if (window.pageYOffset) {
        header?.classList.add('navbar-fixed');
      } else {
        header?.classList.remove('navbar-fixed');
      }
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent transition-all duration-500">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link href="#home">
              <a className="block py-6 text-lg font-bold text-primary">
                yubliwarokka
              </a>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <ToggleMenu />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
