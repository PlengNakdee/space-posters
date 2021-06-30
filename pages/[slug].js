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
            <h1 className="text-white">Poster</h1>
            <Footer />
        </div>
    )
}

export default Poster;