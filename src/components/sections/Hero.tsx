import React from "react";
import SearchForm from "@/components/SearchForm";

const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={"pink_container"}>
      <h1 className={"heading"}>
        Pitch your startup, <br /> Connect with Entrepreneurs
      </h1>
      <p className={"sub-heading !max-w-3xl"}>
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      {children}
    </section>
  );
};
export default Hero;
