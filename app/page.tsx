import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container max-w-screen-xl mx-auto px-4">
      <section className="grid grid-cols-1 gap-4">
        <h3 className="pt-10 font-extrabold text-2xl tracking-wide">
          &gt;&gt;&gt; Live Websites
        </h3>
        <Link href={"/websites/react-capstone"} className="section-button">
          React Capstone Clothing Store
        </Link>
        <Link href={"/websites/cooking-club"} className="section-button">
          Cooking Club
        </Link>
        <Link href={"/websites/static-recipe-blog"} className="section-button">
          Static Recipe Blog
        </Link>
      </section>
      <section className="grid grid-cols-1 gap-4">
        <h3 className="pt-10 font-extrabold text-2xl tracking-wide">
          &gt;&gt;&gt; Pages
        </h3>
        <Link href={`/projects/`} className="section-button">
          Side Projects
        </Link>
        <Link href={"/recipes/"} className="section-button">
          Recipes (TODO)
        </Link>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h3 className="grid-cols-2 md:col-span-2 pt-10 font-extrabold text-2xl tracking-wide">
          &gt;&gt;&gt; Miscellanous
        </h3>
        <Link href={"/blog/"} className="section-button">
          Blog (TODO)
        </Link>
        <Link href={"/about-me/"} className="section-button">
          About Me (TODO)
        </Link>
        <Link href={"/what-am-i-learning/"} className="section-button">
          What am I Learning (TODO)
        </Link>
        <Link href={"/where-i-learn/"} className="section-button">
          Where I Learn
        </Link>
      </section>
      <section className="flex flex-row gap-4 content-center justify-self-center pt-8">
        <a
          href="https://github.com/ebarr10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/ethan-barr--/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </section>
    </main>
  );
}
