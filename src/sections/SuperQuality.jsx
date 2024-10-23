import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center gap-10 w-full max-container max-lg:flex-col"
    >
      <div className="flex-col flex flex-1">
        <h2 className=" font-bold text-4xl capitalize font-palanquin lg:max-w-lg">
          We Offer You
          <span className="text-coral-red "> Super</span>{" "}
          <span className="text-coral-red "> Quality </span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring you premium comfort and style, our footware is designed to
          elevate your experience, providing you with anmached quality and a
          touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our excellence and dedication to the details ensures your satisfaction
          and approval
        </p>

        <div className="mt-10">
          {/* View Details Button */}
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe image"
          width={570}
          height={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
