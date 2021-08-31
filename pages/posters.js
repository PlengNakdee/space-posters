import Footer from "../components/Footer";
import Header from "../components/Header";
import ImgCard from '../components/ImgCard';
import { getAllPosters } from "../sanity_api/api";

const Posters = ({ posters }) => {
  return (
    <div>
      <Header />
      <div className="pl-4 pt-4 sm:pt-20 sm:pl-10 lg:pl-20 bg-black text-white">
        <div className='text-center p-4 sm:p-6'>
          <h1 className='text-2xl sm:text-5xl'>our posters</h1>
        </div>
        <div className='grid justify-items-center space-y-4 sm:grid-cols-2 sm:space-y-0'>
          {posters.map(
            ({
              imageUrl,
              slug,
            }) => (
              <ImgCard
                image={imageUrl}
                slug={slug}
              />
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Posters;

export async function getStaticProps() {
  const posters = await getAllPosters();
  return {
    props: {
      posters,
    },
  };
}