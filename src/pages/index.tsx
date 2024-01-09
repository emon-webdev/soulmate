import RootLayout from "@/layouts/RootLayout";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import { ReactElement } from "react";
import Home from "./Home";

const myFont = localFont({ src: "../assets/fonts/BR-Omega-Regular.ttf" });
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const HomePage = () => {
  return (
    <>
      <Head>
        <title>SOULMATE || Precise Matrimonial || Find your mate with us</title>
        <meta name="author" content="Emon Hossain" />
        <meta name="description" content="Find your soulmate" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript , ReactJs, NextJs"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/main_logo.png" />
      </Head>
      {/* <Products products={products} /> */}
      <main className={myFont.className}>
        <Home />
      </main>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
