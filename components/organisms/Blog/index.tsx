import BlogItem from '../../molecules/BlogItem';

export default function Blog() {
  return (
    <section id="blog" className="bg-[#F8F9FF] pt-36 pb-32">
      <div className="container mx-auto">
        <div className="mb-10 w-full px-4 lg:mx-auto lg:w-1/2">
          <h4 className="heading-title mb-2">Blogs</h4>
          <h2 className="sub-heading mb-3">
            Latest <span className="text-primary">Post</span>
          </h2>
          <p className="desc-heading mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <BlogItem />
      </div>
    </section>
  );
}
