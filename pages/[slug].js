import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllSlugs } from "../sanity_api/api";
import sanity from "../sanity_api/sanity";
// import Link from "next/link";

const Poster = ({ poster }) => {
    const router = useRouter();
    const { t } = useTranslation(["common", "header"]);
    // for richtext
    // const serializers = {
    //     types: {
    //       code: (props: any) => (
    //         <pre data-language={props.node.language}>
    //           <code>{props.node.code}</code>
    //         </pre>
    //       ),
    //     },
    //   };
    // <BlockContent
    //                 blocks={blog.richtext}
    //                 serializers={serializers}
    //               />
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
            {/* <div className="ml-5">
                <Link
                    href={`${blog.slug}`}
                    locale={router.locale === "en" ? "th" : "en"}
                >
                    <button>{t("EN/TH")}</button>
                </Link>
            </div> */}
            <Header />
            <div className='grid justify-items-center space-y-4 sm:grid-cols-2 sm:space-y-0'>

                <div className="p-6">
                    <p>Image carousal</p>
                </div>
                <div className="p-6">
                    <p>{poster.title}</p>
                    <p>{poster.detail}</p>
                    <p>Detail</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getStaticPaths = async ({ locales }) => {
    const allModularPages = await getAllSlugs();

    return {
        paths: locales
            .map((locale) => {
                return allModularPages?.map((page) => {
                    return { params: { slug: page.slug }, locale };
                });
            })
            .flat(),
        fallback: false,
    };
};

const singleBlogQuery = `*[_type == "posters" && slug == $slug] {
    title,
    detail,
    "image1": image1.asset->url,
    slug
}[0]`;

export const getStaticProps = async ({ params, locale }) => {
    const poster = await sanity.fetch(singleBlogQuery, { slug: params.slug });
    const translate = await serverSideTranslations(locale, ["common", "header"]);
    return { props: { poster, translate } };
};

export default Poster;