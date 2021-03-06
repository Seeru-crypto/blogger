import '../styles/globals.css'
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Blogger</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
}

export default MyApp
