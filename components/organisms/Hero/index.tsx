import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="bg-sky-100 pt-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full self-center px-4 lg:mb-0 lg:w-1/2">
            <h1 className="mb-2 text-center text-3xl font-black uppercase text-slate-700 md:text-4xl lg:text-left lg:text-5xl">
              Hello, I&apos;m <span className="mb-4 text-primary">Yubli</span>
            </h1>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-slate-600 md:text-base lg:text-left">
              UI/UX Designer & Front-End Designer
            </h3>
            <p className="text-center text-sm text-slate-400 md:text-base lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores est consequatur commodi eveniet molestiae quisquam.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start">
              <Link href="#">
                <a className="btn-primary mr-4">
                  <i className="fa-regular fa-file-lines mr-2" />
                  Hire Me
                </a>
              </Link>

              <Link href="#">
                <a className="btn-secondary">
                  <i className="fa-regular fa-comment-dots mr-2" />
                  Let&apos;s Talk
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:bottom-0 lg:mt-9">
              <img
                src="/bg/img-hero.png"
                alt="Me"
                className="z-20 mx-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
