import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Poster = () => {
    return (
        <div className="min-h-screen bg-black">
            <Head>
                <title>Space Posters</title>
                <meta name="description" content="frontend case study" />
                <link rel="icon" href="/solar-system.png" />
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
                </style>
            </Head>
            <Header />
            <div className='grid justify-items-center space-y-4 sm:grid-cols-2 sm:space-y-0'>
                <div>
                <p>Image carousal</p>
                </div>
                <div>
                <p>Detail</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Poster;