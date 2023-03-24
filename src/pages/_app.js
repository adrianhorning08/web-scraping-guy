import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import "prismjs/themes/prism-tomorrow.css";

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import { Outfit } from "@next/font/google";
import Link from "next/link";
import { useEffect } from "react";

const outfit = Outfit({ subsets: ["latin"] });
function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 transition fill-zinc-400 group-hover:fill-indigo-400" />
    </Link>
  );
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // @ts-ignore
    window.$crisp = [];
    // @ts-ignore
    window.CRISP_WEBSITE_ID = "724845e9-0454-4d58-a83d-635001ff19ca";
    (function () {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      // @ts-ignore
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

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
              href="https://www.youtube.com/channel/UCdFJWUa43smRm4IpHBpPg_A"
              target="_blank"
              aria-label="Check out my YouTube channel"
              icon={YoutubeIcon}
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
