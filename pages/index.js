import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
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
      <div className="font-Poppins text-white">
        {/*<div>
          <Link href="/" locale={router.locale === "en" ? "th" : "en"}>
            <button>{t("EN/TH")}</button>
          </Link>
        </div>*/}
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header"])),
    },
  };
}

export default Home;
