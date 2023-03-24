import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "How to scrape the Hennepin County Assessor website",
    href: "/blog/how-to-scrape-hennepin-county-assessor-website",
    description:
      "This is a tutorial on how to scrape Hennepin County Assessor data using Node.js. I scrape all the properties/parcesls in Hennepin County.",
    date: "Mar 20, 2023",
    datetime: "2023-03-20",
    author: {
      name: "Adrian Horning",
      role: "Founder",
      // href: "#",
      imageUrl: "/me.jpg",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-black py-24 sm:py-32 text-left">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Link href="/">
            <div className="flex items-center mb-10">
              <ChevronLeftIcon className="w-10 h-10" />
              <span className="text-zinc-400">Home</span>
            </div>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-zinc-400">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-100 group-hover:text-indigo-400">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-zinc-400 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="rounded-full h-10 w-10 overflow-hidden ">
                    <img
                      src={post.author.imageUrl}
                      alt="User avatar"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-zinc-100">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-zinc-400">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
