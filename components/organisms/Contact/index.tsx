import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap-reverse px-4 lg:px-36 xl:px-0">
          <div className="w-full xl:w-1/2 xl:px-4">
            <div className="mb-10 w-full">
              <div className="w-full">
                <h4 className="mb-3 text-center text-4xl font-bold leading-10 text-slate-700 xl:text-left xl:text-5xl 2xl:text-5xl">
                  Hire <span className="text-primary">Me</span>
                </h4>
                <p className="break-words text-center text-lg font-medium text-slate-700 xl:text-left">
                  I am available for freelance work. Connect with me via phone:{' '}
                  <Link href="callto:+6281354491984">
                    <a
                      target="_blank"
                      className="text-xl font-semibold transition-all duration-500 hover:text-primary"
                    >
                      +62-813-5449-1984
                    </a>
                  </Link>{' '}
                  or email:{' '}
                  <Link href="mailto:halo@kupaskode.com">
                    <a
                      target="_blank"
                      className="text-xl font-semibold transition-all duration-500 hover:text-primary"
                    >
                      halo@kupaskode.com
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <form>
              <div className="w-full">
                <div className="w-full pb-8">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="w-full pb-8">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className="w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="w-full pb-8">
                  <input
                    type="text"
                    placeholder="Write a Subject *"
                    className="w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="w-full pb-8">
                  <textarea
                    placeholder="Your message..."
                    className="h-56 w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="w-full">
                  <button
                    type="button"
                    className="w-full rounded-md bg-primary px-8 py-3 text-base font-medium tracking-wide text-white shadow-sm outline-none transition-all duration-500 hover:bg-primary-400"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="group relative mb-10 w-full xl:w-1/2 xl:px-4">
            <div className="relative aspect-video overflow-hidden rounded-[5px] shadow xl:aspect-[3/3.6] 2xl:aspect-[3/3.2]">
              <div className="h-full w-full bg-[url(/img/cs.jpg)] bg-cover bg-center" />
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
        </div>
      </div>
    </section>
  );
}
