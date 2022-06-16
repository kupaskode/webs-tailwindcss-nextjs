import Link from 'next/link';

export default function Client() {
  return (
    <section id="partner" className="bg-slate-800 pt-36 pb-32">
      <div className="container mx-auto">
        <div className="mb-10 w-full px-4">
          <h4 className="mb-2 text-center text-sm font-bold uppercase tracking-[20px] text-white">
            Clients
          </h4>
          <h2 className="mb-3 text-center text-4xl font-bold text-white xl:text-5xl 2xl:text-5xl">
            Who Have <span className="text-primary">Collaborated</span> Service
          </h2>
          <p className="desc-heading mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ab sit veniam ut facilis? Aspernatur aut impedit recusandae pariatur
            doloremque!
          </p>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <Link href="#">
              <a
                className="m-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-slate-900 opacity-60 grayscale transition duration-500 hover:-translate-y-2 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
                title="Tailwind CSS"
              >
                <img
                  src="clients/tailwind.svg"
                  alt="Tailwind CSS"
                  className="h-10 w-10"
                />
              </a>
            </Link>
            <Link href="#">
              <a
                className="m-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-slate-900 opacity-60 grayscale transition duration-500 hover:-translate-y-2 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
                title="React"
              >
                <img
                  src="clients/react.svg"
                  alt="React"
                  className="h-10 w-10"
                />
              </a>
            </Link>
            <Link href="#">
              <a
                className="m-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-slate-900 opacity-60 grayscale transition duration-500 hover:-translate-y-2 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
                title="Next JS"
              >
                <img
                  src="clients/nextjs.svg"
                  alt="Next JS"
                  className="h-10 w-10"
                />
              </a>
            </Link>
            <Link href="#">
              <a
                className="m-4 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-slate-900 opacity-60 grayscale transition duration-500 hover:-translate-y-2 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
                title="FontAwesome"
              >
                <img
                  src="clients/fontawesome.svg"
                  alt="FontAwesome"
                  className="h-10 w-10"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
