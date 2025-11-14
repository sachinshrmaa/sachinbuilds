import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Sachin Builds",
  description:
    "I'm an engineer turned teacher by degree, working as an Associate Software Engineer at a small startup, where we are building PAM",
};

export default function Home() {
  return (
    <div>
      <div className="mb-1 navbar">
        <h1 className="nav-link">Sachin Builds</h1>
        <div className="nav-menu">
          <Link href="#" className="nav-link">
            Bookshelf
          </Link>
          <Link href="#" className="nav-link">
            Bookshelf
          </Link>
          <Link href="#" className="nav-link">
            Bookshelf
          </Link>
        </div>
      </div>

      <div className="py-5 mb-3 md:mb-5">
        <p className="mb-3">
          Namaste 🙏, I'm an engineer turned teacher by profession, working as a
          Skill Instructor at{" "}
          <Link
            href="https://msu.edu.in/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Medhavi Skill University
          </Link>{" "}
          , a UGC-recognized state university in Sikkim, pioneering
          industry-integrated, skill-competency-based higher education to
          enhance student employability in line with the National Education
          Policy 2020.
        </p>
        <img
          src="./photo1.jpg"
          alt="Group photo with school students"
          style={{
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <p className="mb-3">
          When I am not working at my day job, I like to build software, day
          trade the stock market, read books, and talk. I'm also working on my
          side project, tradeLog — A trading journal with analytics integrated.
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

      <hr />
    </div>
  );
}
