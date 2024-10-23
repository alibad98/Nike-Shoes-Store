import { useState } from "react";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  // State to manage the currently displayed shoe image
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      {/* Left Side Content */}
      <div className=" relative flex flex-col justify-center items-start xl:w-2/5 w-full pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-palanquin">
          <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-lg leading-8 text-slate-gray mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        {/* Shop Now Button */}
        <Button label="Shop now" iconURL={arrowRight} />

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image and Shoe Cards */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="absolute flex gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={setBigShoeImg}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
