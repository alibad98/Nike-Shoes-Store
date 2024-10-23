const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  // Function to handle image click and change the big shoe image
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`cursor-pointer border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center rounded-xl bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
