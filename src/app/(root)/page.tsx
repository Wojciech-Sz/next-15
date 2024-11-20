import Hero from "@/components/sections/Hero";
import SearchForm from "@/components/SearchForm";
import React from "react";
import Startups from "@/components/sections/Startups";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <Hero>
        <SearchForm query={query} />
      </Hero>
      <Startups query={query} />
    </>
  );
}
