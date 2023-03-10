import { Header } from "@/components/Header";
import { InlineWidget } from "react-calendly";
import Head from "next/head";
import { classNames } from "@/utils";
import Pricing from "@/components/Pricing";

const caseStudies = [
  {
    id: "zillow-scraper",
    name: "Zillow Scraper",
    description:
      "Built a scraper that gets all Zillow listings (and individual property details)",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "King County Document Scraper",
    description:
      "Scraped documents from King County (including scraping text from the actual document PDF) and extracted key pieces of information",
    imageSrc: "king_county.png",
    imageAlt: "King County",
    url: `https://recordsearch.kingcounty.gov/LandmarkWeb/search/index?theme=.blue&section=searchCriteriaName&quickSearchSelection=`,
  },
  {
    name: "AdLibrary.io",
    description:
      "Scraped Ads from Facebook Ad Library and save them into a swipe file",
    imageSrc: "ad_library.png",
    imageAlt: "adlibrary.io screenshot",
    url: `https://adlibrary.io`,
  },
  {
    name: "Sam Says",
    description:
      "Scraped all of Sam Parr's tweets and trained an AI model to respond like he would",
    imageSrc: "sam_says.png",
    imageAlt: "Sam Says screenshot",
    url: `https://sam-says.vercel.app/`,
  },
  {
    name: "LemonDrops.io",
    description: "Notify's users when lululemon stock is back. (Sold in 2023)",
    imageSrc: "lemon_drops.png",
    imageAlt: "LemonDrops.io screenshot",
    url: `https://lemondrops.io`,
  },
  // {
  //   name: "Dating App Scraper",
  //   description:
  //     "Scraped my dating apps (Bumble/Hinge) to automate swiping for me lol. Not all the way built out, but soon...",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-06.jpg",
  //   imageAlt:
  //     "Gray felt laptop sleeve with white canvas interior, silver zipper, and tan leather zipper pull.",
  // },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Web Scraping Guy</title>
        <meta name="description" content="Replace your VA with web scraping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero */}

      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 flex justify-center">
        {/* Hero */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight dark:text-zinc-100 sm:text-7xl">
            Replace your VA with scraping
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I write code that will scrape data from any website, display it to
            you in a user friendly way, and can notify you when it changes. All
            while being faster and more accurate than a human.
            {/* I'm not going to say that "I notify you when it changes", because I'm not going to do that in all circumstances */}
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-2xl mx-auto px-4 items-center">
        <iframe
          className="h-full w-full md:h-96"
          // width="560"
          // height="315"
          // height="h-96"
          src="https://www.youtube.com/embed/4jw2XeZ282w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <a
        className="my-16 inline-flex items-center text-base px-24 py-3 md:text-3xl md:px-64 md:py-8 border border-transparent font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="https://calendly.com/adrian-horning/meeting"
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Book a Call
      </a>

      <div
        id="case-studies"
        className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-zinc-800 rounded-lg"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Recent Work
          </h2>
          <p className="mt-4 text-zinc-400">
            Discover how scraping can get you data more accurate and faster than
            your competition.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {caseStudies.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="font-bold text-xl md:text-2xl dark:text-zinc-100">
                  {feature.name}
                </h3>
                <p className="mt-2 text-zinc-400">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                  {feature?.id === "zillow-scraper" ? (
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRtBBDlREXWbHxax5daJf_mAI-aXzhR148L-EXOhmovGGM91omeEhISDIvuqKijbGonFd8uwSUhf8VW/pubhtml?gid=1400574568&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                  ) : (
                    <a
                      href={feature?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full h-full cursor-pointer"
                    >
                      <img
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        // className="object-cover object-center w-full h-full"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pricing />

      <div id="contact">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Book a Call
        </h2>
        <div className="mt-12 flex justify-center">
          <InlineWidget url="https://calendly.com/adrian-horning/meeting" />
        </div>
      </div>
    </>
  );
}
