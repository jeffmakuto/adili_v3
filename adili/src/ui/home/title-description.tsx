const TitleDescription: React.FC = () => {
  return (
    <div className="flex-1">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-2">
        Flying <span className="hidden md:inline"> <br /> </span>
        towards a <span className="hidden md:inline"> <br /> </span>
        new horizon
      </h1>
      <p className="text-sm md:text-sm lg:text-lg text-gray-700">
        Introducing our revamped <strong>mission <span className="hidden md:inline"> <br /> </span>and vision </strong>
        statements showing <span className="hidden md:inline"> <br /> </span>our commitment to innovation,<span className="hidden md:inline"> <br /> </span>
        inclusivity, sustainability,<span className="hidden md:inline"> <br /> </span>and adaptability.
      </p>
    </div>
  );
};

export default TitleDescription;
