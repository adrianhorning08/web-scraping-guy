import { UserCircleIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    body: `Adrian delivered great work and walked me through this project as requested. His communication was fast and accommodating. I enjoyed working with Adrian and would highly recommend working with him! Thanks Adrian!`,
    author: {
      name: "Javier",
      // handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `Adrian finished the web scraping project quickly and exceeded expectations by finding a different data source to scrape for part of the project. Would definitely recommend and will hire again for future similar jobs.`,
    author: {
      name: "Richard",
      // handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="py-8" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-semibold leading-8 tracking-tight text-3xl sm:text-4xl text-zinc-100">
            Testimonials
          </h2>
          {/* <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-400 sm:text-4xl">
            {`Hear what customers are saying`}
          </p> */}
        </div>
        {/* <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"> */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20">
          {/* <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 text-left"> */}
          <div className="-mt-8 sm:-mx-4 text-left">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-zinc-700 p-8 text-sm leading-6">
                  <blockquote className="text-zinc-100">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <UserCircleIcon className="h-10 w-10 rounded-full" />
                    <div>
                      <div className="font-semibold">
                        {testimonial.author.name}
                      </div>
                      {testimonial.author.handle && (
                        <div className="">{`@${testimonial.author.handle}`}</div>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
            <div
              key={"sully"}
              className="pt-8 sm:inline-block sm:w-full sm:px-4"
            >
              <blockquote className="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">
                  .
                  <a href="https://twitter.com/adrian_horning_?ref_src=twsrc%5Etfw">
                    @adrian_horning_
                  </a>{" "}
                  helped me on recent project and is absolutely wicked at web
                  scraping data and honestly a just good dood.<br></br>Big fan!
                </p>
                &mdash; Sully 🤝 (@sullydoesitall){" "}
                <a href="https://twitter.com/sullydoesitall/status/1638006313320869888?ref_src=twsrc%5Etfw">
                  March 21, 2023
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>
          </div>
          <div key={"yifan"} className="pt-8 sm:inline-block sm:w-full sm:px-4">
            <blockquote className="twitter-tweet" data-theme="dark">
              <p lang="en" dir="ltr">
                Thanks to{" "}
                <a href="https://twitter.com/adrian_horning_?ref_src=twsrc%5Etfw">
                  @adrian_horning_
                </a>{" "}
                , my startup is alive again. 🚀<br></br>Keeping fingers crossed
                that the embedded headers in GET request won’t expire. 🤞🏼
                <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">
                  #buildinpublic
                </a>{" "}
                <a href="https://twitter.com/hashtag/indiehackers?src=hash&amp;ref_src=twsrc%5Etfw">
                  #indiehackers
                </a>{" "}
                <a href="https://t.co/YAUBnRfa8O">pic.twitter.com/YAUBnRfa8O</a>
              </p>
              &mdash; Yifan Goh (@imgyf){" "}
              <a href="https://twitter.com/imgyf/status/1589168514564493312?ref_src=twsrc%5Etfw">
                November 6, 2022
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          </div>
        </div>
      </div>
    </div>
  );
}
