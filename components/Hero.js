const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="p-4 pt-20 pb-10 grid-cols-1 
      sm:pt-30 sm:pb-20 sm:pl-10 lg:pl-20 sm:pr-10 lg:pr-20 
      sm:flex"
      >
        <div className="relative text-center">
          <img
            className="relative"
            src="/mockup-1.png"
            alt="poster of a nubelar on a white wall"
          />
          <a
            href="/posters"
            className="text-white text-lg absolute top-1/2 left-3/4 sm:text-4xl"
          >
            continue &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
