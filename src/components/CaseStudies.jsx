import { classNames } from "@/utils";
import { useEffect } from "react";

const arr = [
  {
    id: "king-scraper",
    name: "King County Document Scraper",
    description:
      "Scraped documents from King County (including scraping text from the actual document PDF) and extracted key pieces of information",
    imageSrc: "king_county.png",
    imageAlt: "King County",
    url: `https://recordsearch.kingcounty.gov/LandmarkWeb/search/index?theme=.blue&section=searchCriteriaName&quickSearchSelection=`,
  },
];

export default function CaseStudies() {
  return (
    <div
      id="case-studies"
      className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 bg-zinc-800 rounded-lg"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
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
  );
}
