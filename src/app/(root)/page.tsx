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
  const params = { search: query || null };
  return (
    <>
      <Hero>
        <SearchForm query={query} />
      </Hero>
      <Startups params={params} />
    </>
  );
}
