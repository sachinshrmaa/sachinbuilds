import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="mb-1">
        <h1 className="text-2xl font-semibold">Sachin Builds</h1>
      </div>

      <div className="grid grid-cols-3 py-5 mb-3 md:mb-5">
        <div className="col-span-3 md:col-span-2">
          <p className="mb-3">
            Namaste 🙏, I'm an engineer by degree, working as an Associate
            Software Engineer at a small startup, where we are building PAM
            (Privileged Access Management) software called Authnull.
          </p>
          <p className="mb-3">
            When I am not working at my day job, I like to build software, day
            trade the stock market, read books, and talk. I'm also working on my
            side project,{" "}
            <Link
              href="https://contri.sachinbuilds.in"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contri
            </Link>{" "}
            — An expense-sharing and tracking tool.
          </p>
          <p className="mb-3">
            I also send newsletters.{" "}
            <Link
              href="https://contri.sachinbuilds.in"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {" "}
              Feel free to Sign Up.
            </Link>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-10 mb-5">
        <div className="col-span-2 md:col-span-1">
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-semibold text-md md:text-lg"
          >
            <span className="text-xl md:text-2xl"> → </span> Writings
          </Link>
          <p className="text-md text-slate-600 leading-5 mt-2">
            A collection of my thoughts, experiences, and learnings.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-semibold text-md md:text-lg"
          >
            <span className="text-xl md:text-2xl"> → </span> Building Software
          </Link>
          <p className="text-md text-slate-600 leading-5 mt-2">
            As a part of my work as software engineer, I build software, and I
            share my learnings here.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-semibold text-md md:text-lg"
          >
            <span className="text-xl md:text-2xl"> → </span> Bookshelf
          </Link>
          <p className="text-md text-slate-600 leading-5 mt-2">
            A curated list of books & essays that have influenced me.
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <Link
            href="#"
            className="text-blue-600 hover:text-blue-800 font-semibold text-md md:text-lg"
          >
            <span className="text-xl md:text-2xl"> → </span> Teaching
          </Link>
          <p className="text-md text-slate-600 leading-5 mt-2">
            As much as I like to learn new skills, I like to teach.
          </p>
        </div>
      </div>
    </div>
  );
}
