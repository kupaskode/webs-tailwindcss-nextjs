import Image from 'next/image';
import Sosmed from '../../atoms/Sosmed';

export default function About() {
  return (
    <section id="about" className="mt-36 mb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:items-center">
          <div className="group relative mb-10 w-full px-4 lg:w-2/5">
            <div className="relative aspect-video overflow-hidden rounded-[5px] shadow lg:aspect-[3/4] xl:aspect-[3/3.6] 2xl:aspect-[3/3.6]">
              <div className="h-full w-full bg-[url(/img/coding.jpg)] bg-cover bg-center" />
              <div className="absolute top-0 h-full w-full transition-all duration-500 group-hover:bg-slate-700/30 group-hover:backdrop-blur-[6px]" />
            </div>
            <button
              type="button"
              className="absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 shadow-sm outline-none"
            >
              <span className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-primary">
                <span className="absolute inline-flex h-full w-full animate-radar1 rounded-full border-2 border-primary-300 opacity-75" />
                <span className="absolute inline-flex h-full w-full animate-radar2 rounded-full border-2 border-primary-300 opacity-50" />
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-all duration-500 hover:bg-primary-400">
                  <Image src="/icon/play.svg" width={34} height={34} />
                </div>
              </span>
            </button>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            <h4 className="mb-2 text-center text-sm font-bold uppercase tracking-[20px] text-slate-800 lg:text-left">
              About
            </h4>
            <h2 className="mb-3 text-center text-4xl font-bold leading-10 text-slate-700 lg:text-left xl:text-5xl 2xl:text-5xl">
              Start learning <span className="text-primary">Web Design</span>{' '}
              with us!
            </h2>
            <p className="mb-4 text-center text-base font-normal leading-7 text-slate-500 lg:text-left lg:text-sm xl:text-base xl:leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              unde provident veniam vel rerum sapiente ducimus, corrupti nisi
              soluta. Hic impedit illo nobis dolor aut natus suscipit
              voluptatibus laudantium consequatur culpa ipsum nulla sed,
              corporis fugiat quas assumenda! Dolores officia cum sequi,
              nesciunt quos praesentium delectus possimus earum sint minima.
            </p>
            <p className="mb-6 text-center text-base font-normal leading-7 text-slate-500 lg:text-left lg:text-sm xl:text-base xl:leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              sed debitis qui quis nobis, dolor magnam nisi tempora ea,
              inventore maxime ipsam cupiditate tempore illo obcaecati labore,
              vel nostrum pariatur.
            </p>
            <Sosmed />
          </div>
        </div>
      </div>
    </section>
  );
}
