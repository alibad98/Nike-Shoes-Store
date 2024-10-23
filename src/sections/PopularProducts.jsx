import PopularProductCards from "../components/PopularProductCards";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="dlex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Choices
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience our top-notch choices by our customers and enjoy both the
          value and comfort of our products.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCards key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
