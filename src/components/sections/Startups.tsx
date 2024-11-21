import React from "react";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

const Startups = async ({ query }: { query: string }) => {
  const posts = await client.fetch(STARTUPS_QUERY);
  console.log("posts", posts);
  return (
    <section className={"section_container"}>
      <p className={"text-30-semibold"}>
        {query ? `Search results for "${query}"` : "All Startups"}
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
  );
};
export default Startups;
