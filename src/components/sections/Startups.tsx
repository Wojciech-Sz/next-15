import React from "react";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

const Startups = async ({ params }: { params: { search: string | null } }) => {
  const posts = await client.fetch(STARTUPS_QUERY, params,{next: { revalidate: 3600 },cache: 'force-cache'});
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
    </>
  );
};
export default Startups;
