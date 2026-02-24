import React from "react";
import { SITE } from "../config";

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* subtle decorative gradient circles */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        <img
          src={`${import.meta.env.BASE_URL}assets/Display_Picture.jpg`}
          alt={SITE.name}
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-400 shadow-lg"
        />

        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-blue-400">{SITE.name}</span> 👋
        </h1>

        <h2 className="text-xl sm:text-2xl text-blue-300 font-medium">
          {SITE.role}
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {SITE.subhead || "I love building intelligent, scalable software that connects ideas with impact."}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium transition"
          >
            View Projects
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="border border-blue-400 text-blue-300 px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8 text-gray-400 text-sm sm:text-base">
          <span>📍 {SITE.location}</span>
          <span>📞 {SITE.phone}</span>
        </div>
      </div>
    </section>
  );
}
