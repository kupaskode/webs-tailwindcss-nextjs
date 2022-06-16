import PortfolioItem from '../../molecules/PortfolioItem';

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-32">
      <div className="container mx-auto">
        <div className="mb-10 w-full px-4">
          <h4 className="heading-title mb-2">Portfolio</h4>
          <h2 className="sub-heading mb-3">
            Latest <span className="text-primary">Projects</span>
          </h2>
          <p className="desc-heading mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            maiores a dolorum similique quam, aut voluptatibus vitae commodi
            excepturi. Necessitatibus tenetur dignissimos exercitationem soluta
            omnis nostrum excepturi consequuntur blanditiis amet!
          </p>
        </div>
      </div>
      <PortfolioItem />
    </section>
  );
}
