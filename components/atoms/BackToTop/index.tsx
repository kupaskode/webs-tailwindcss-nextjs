import { useEffect } from 'react';

export default function BackToTop() {
  useEffect(() => {
    const toTop = document.getElementById('to-top');

    window.onscroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        toTop?.classList.remove('hidden');
        toTop?.classList.add('flex');
      } else {
        toTop?.classList.remove('flex');
        toTop?.classList.add('hidden');
      }

      toTop?.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    };
  }, []);

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 animate-bounce items-center justify-center rounded-full bg-primary p-4"
      id="to-top"
    >
      <i className="fa-solid fa-chevron-up text-2xl text-white" />
    </button>
  );
}
