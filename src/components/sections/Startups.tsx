import React from "react";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

const Startups = async ({ params }: { params: { search: string | null } }) => {
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  const isDevelopment = process.env.NODE_ENV === "development";
  
  return (
    <>
      <section className={"section_container"}>
        <p className={"text-30-semibold"}>
          {params.search
            ? `Search results for "${params.search}"`
            : "All Startups"}
        </p>

        <ul className={"mt-7 card_grid"}>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className={"no-result"}>No startups found</p>
          )}
        </ul>
      </section>
      {(isDevelopment || params.search === 'debug') && <SanityLive />}
    </>
  );
};
export default Startups;
