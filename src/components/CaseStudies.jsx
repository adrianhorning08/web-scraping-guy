import { classNames } from "@/utils";
import { useEffect } from "react";

const arr = [
  {
    id: "king-scraper",
    name: "King County Document's",
    description:
      "Scraped documents from King County (including scraping text from the actual document PDF) and extracted key pieces of information",
    imageSrc: "king_county.png",
    imageAlt: "King County",
    url: `https://recordsearch.kingcounty.gov/LandmarkWeb/search/index?theme=.blue&section=searchCriteriaName&quickSearchSelection=`,
  },
  {
    id: "hennepin-scraper",
    name: "Hennepin County Parcels",
    description:
      "Scraped all parcels that were assessed for over $1M, in Hennepin County, MN",
    imageSrc: "hennepin.png",
    imageAlt: "Hennepin County",
    url: `https://docs.google.com/spreadsheets/d/1pu7Ru4Xqxw9uCuXvg33mO7aljqghXkK21ktpBEOZfzM/edit?usp=sharing`,
    // iframeSrc: `https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ_oVuJ8o-aPHfp6gSguMFgnzW4cqQKJj5H7PKioT-O1CdJYftywTo6wLCQSkb59IBtI7LPBmrgfJg/pubhtml?gid=1324468877&amp;single=true&amp;widget=true&amp;headers=false`,
  },
  {
    id: "nyc-federal-liens",
    name: "NYC Federal Liens",
    type: "google-doc",
    description: "Scraped all the federal liens in NYC during February 2023",
    // imageSrc: "hennepin.png",
    // imageAlt: "Hennepin County",
    // url: `https://docs.google.com/spreadsheets/d/1pu7Ru4Xqxw9uCuXvg33mO7aljqghXkK21ktpBEOZfzM/edit?usp=sharing`,
    iframeSrc: `https://docs.google.com/spreadsheets/d/e/2PACX-1vRnujbSpIsMs-n2KhrlM3XbG23sgV1jwS4kdukgzZtx8DMhwYWLCY2yGKHygXo6k9uXaYDSr7SzmWSP/pubhtml?gid=245717785&amp;single=true&amp;widget=true&amp;headers=false`,
  },
];

export default function CaseStudies() {
  return (
    <div
      id="case-studies"
      className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-zinc-800 rounded-lg"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-8xl font-bold tracking-tight text-zinc-100">
          Recent Work
        </h2>
        <p className="mt-4 text-zinc-400">
          Discover how scraping can get you data more accurate and faster than
          your competition.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {arr.map((feature, featureIdx) => (
          <div
            key={feature.id}
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
              <h3 className="font-bold text-xl md:text-2xl text-zinc-100">
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
                {feature?.type === "google-doc" ? (
                  <iframe src={feature.iframeSrc}></iframe>
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
  );
}
