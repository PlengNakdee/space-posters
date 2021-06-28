import ImgCard from "./ImgCard"

const Feature = () => {
  return (
    <div classname=''>
      <div className="pl-4 pt-4 sm:pt-20 sm:pl-10 lg:pl-20 bg-black text-white">
        <div className='text-center p-4 sm:p-6'>
          <h1 className='text-2xl sm:text-5xl'>our posters</h1>
        </div>
        <div className='grid justify-items-center space-y-4 sm:grid-cols-2 sm:space-y-0'>
          <a href='/posters'>
          <ImgCard image={"/img/1-1920.jpg"} />
          </a>
          <a href='/posters'>
          <ImgCard image={"/img/mockup-2.jpeg"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
