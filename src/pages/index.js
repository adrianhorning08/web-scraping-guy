import { Header } from "@/components/Header";
import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import ApiDemos from "@/components/ApiDemos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Web Scraping for County Websites</title>
        <meta
          name="description"
          content="Get a custom web scraper (bot) for a county website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero */}

      {/* TODO: plug the youtube. Maybe make some API's available */}
      {/* Maybe even put on your blog that you sold lemondrops and embed the youtube video with Jordan */}
      {/* Embed Sully's tweet */}

      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 flex justify-center">
        {/* Hero */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-7xl">
            Custom Web Scraping for County Websites
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            Are you tired of manually collecting data from county websites? Let
            us help you streamline your data gathering process with our custom
            web scraping services. Our expert team can create custom web
            scraping solutions tailored to your specific needs and requirements
            {/* I write code that will scrape data from any website, display it to
            you in a user friendly way, and can notify you when it changes. All
            while being faster and more accurate than a human. */}
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
          src="https://www.youtube.com/embed/aqWkHrlGKNk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
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

      <ApiDemos />

      <CaseStudies />

      <Testimonials />

      <Pricing />

      {/* CTA */}
      <div id="contact" className="mt-16">
        <h2 className="text-3xl sm:text-8xl font-bold tracking-tight text-zinc-100">
          Book a Call
        </h2>
        <div className="mt-12 flex justify-center">
          <InlineWidget url="https://calendly.com/adrian-horning/meeting" />
        </div>
      </div>
    </>
  );
}
