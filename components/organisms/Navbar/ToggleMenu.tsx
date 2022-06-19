import { useEffect } from 'react';

export default function ToggleMenu() {
  useEffect(() => {
    window.addEventListener('click', () => {
      document
        .querySelector('#hamburger')
        ?.classList.toggle('hamburger-active');
      document.querySelector('#nav-menu')?.classList.toggle('hidden');
    });
  }, []);

  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className="absolute right-4 block lg:hidden"
    >
      <span className="hamburger-line origin-top-left transition-all duration-300 ease-in-out" />
      <span className="hamburger-line transition-all duration-300 ease-in-out" />
      <span className="hamburger-line origin-bottom-left transition-all duration-300 ease-in-out" />
    </button>
  );
}
