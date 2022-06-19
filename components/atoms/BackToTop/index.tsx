import Link from 'next/link';
import { useEffect } from 'react';

export default function BackToTop() {
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
    <Link href="#home">
      <a
        className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 animate-bounce items-center justify-center rounded-full bg-primary p-4"
        id="to-top"
      >
        <i className="fa-solid fa-chevron-up text-2xl text-white" />
      </a>
    </Link>
  );
}
