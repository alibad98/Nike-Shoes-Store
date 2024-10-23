import { star } from "../assets/icons";
const PopularProductCards = ({ imgURL, price, name }) => {
  return (
    <div className="w-full flex-col flex-1 max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.9)
        </p>
      </div>
      <h3 className="text-2xl leading-normal font-palanquin font-semibold mt-2">
        {name}
      </h3>
      <p className="text-1xl leading-normal font-montserrat text-coral-red font-semibold mt-2">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCards;
