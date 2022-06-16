import Link from 'next/link';
import { Autoplay, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function PortfolioItem() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Keyboard]}
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-1 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Landing Donuts Delivery</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-2 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Messenger Aplication</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-3 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Landing Ticket Boocking</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-4 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Landing Realtime Analytics</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-5 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Dashboard Responsive</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-6 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Web Hosting Website</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="#">
          <a className="group">
            <div className="w-full overflow-hidden">
              <div className="relative mb-4 aspect-[4/3] cursor-pointer overflow-hidden rounded-md bg-[#F8F9FF] shadow-lg shadow-secondary/25">
                <div className="h-full w-full bg-portfolio-7 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute top-0 h-full w-full transition duration-1000 ease-out group-hover:bg-slate-900 group-hover:opacity-75" />
              </div>
              <div className="flex -translate-x-16 items-center transition-all duration-1000 ease-out group-hover:-translate-x-0">
                <img src="/line.svg" alt="line" className="mr-3 w-16" />
                <h3 className="portfolio-title">Travel Website</h3>
              </div>
            </div>
          </a>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
