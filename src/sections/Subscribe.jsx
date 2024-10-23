import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between max-lg:flex-col gap-10 items-center"
    >
      <h3 className="text-4xl leading-[70px] lg:max-w-md font-bold font-palanquin">
        Sign Up For <span className="text-coral-red">More </span>
        Updates
      </h3>
      <div className="w-full lg:max-w-[40%] flex items-center max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full gap-5">
        <input className="input" type="text" placeholder="Subscribe@us.com" />
        <div className="flex max-sm:w-full max-sm:justify-end items-center">
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
