import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { Outfit } from "@next/font/google";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });
function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${outfit.className}`}>
        <Component {...pageProps} />
      </main>
      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="mx-5 my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2 flex gap-6">
            <SocialLink
              href="https://twitter.com/adrian_horning_"
              target="_blank"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/adrianhorning08"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/adrianhorning/"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </nav>
      </footer>
    </>
  );
}
