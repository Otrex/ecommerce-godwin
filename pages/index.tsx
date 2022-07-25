/* eslint-disable @next/next/no-html-link-for-pages */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import TopNav from "../components/TopNav";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import CheckOut from "../components/CheckOut";
import Product from "../components/Product";

const Home: NextPage = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className={styles.container}>
      <TopNav />
      <Head>
        <title>Ecommerce App</title>
        <meta name="description" content="From Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <div className="flex flex-col md:flex-row py-[2rem] mx-20 m-auto">
            <div className="w-full sm:w-2/4 flex flex-col justify-center">
              <div className="text-center sm:text-left">
                <h1 className="sm:text-[6rem] font-[600] leading-[3rem]">
                  {" "}
                  Get Your <span className="text-red-400">Product</span>
                </h1>
                <h5 className="my-6 sm:text-2xl text-[#333333]">
                  {" "}
                  Get the best items you could ever get in the place
                </h5>
                <button className="bg-red-400 text-2xl px-9 py-4 rounded text-white mt-3">
                  Get It Now !!
                </button>
              </div>
            </div>
            <div className="w-full">
              <svg
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
              >
                <clipPath id="mask">
                  <path
                    d="M2.217 0c2.348 0 4.661 2.723 8.25 4.484 3.69 1.81 9.375.438 9.375 2.641 0 4.346-4.614 10.125-9.375 10.125-2.52 
                  0-2.54-2.489-4.118-4.066-1.401-1.4-4.507-1.764-4.507-3.809C1.842 5.029-2.543 0 2.217 0z"
                  />
                </clipPath>
                <image
                  width="100%"
                  height="100%"
                  clipPath="url(#mask)"
                  preserveAspectRatio="xMidYMid slice"
                  href="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
                />
              </svg>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-100 px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Collections
                </h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Desk and Office
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      Work from home accessories
                    </p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                        alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Self-Improvement
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      Journals and note-taking
                    </p>
                  </div>

                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                        alt="Collection of four insulated travel bottles on wooden shelf."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Travel
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      Daily commute essentials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white px-20">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                Customers also purchased
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </section>

        <section>
          <CheckOut showCheckout={showCheckout} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p className="credits">
          Photo by{" "}
          <a href="https://unsplash.com/@auttgood?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Autumn Goodman
          </a>{" "}
          on{" "}
          <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
};

const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      data: [
        {
          img: "",
          title: "Test",
        },
      ],
    },
  };
};

export default Home;
