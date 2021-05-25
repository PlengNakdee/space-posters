const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="pl-4 pt-20 pb-10 grid-cols-1 sm:pt-30 sm:pb-20 sm:pl-10 lg:pl-20 sm:pr-10 lg:pr-20 sm:flex">
        <div>
          <h1 className="text-2xl pb-8 sm:text-4xl">we are space posters</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* <div className="hidden sm:flex object-cover opacity-40 rounded-full">
          <video
            playsInline
            autoPlay
            loop
            muted
            // style={{ width: "500px", height: "500px" }}
          >
            <source src="/space-video.mp4" />
          </video>
        </div>*/}
        <img
          className="hidden sm:flex object-fit opacity-20 rounded-sm"
          src="/space-1.png"
          alt="nebular"
        />
      </div>
    </div>
  );
};

export default Hero;
