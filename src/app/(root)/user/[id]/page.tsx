import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUBID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import UserStartups from "@/components/UserStartups";
import { Skeleton } from "@/components/ui/skeleton";
import { StartupCardSkeleton } from "@/components/StartupCard";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { userId } = await auth();

  const user = await client.fetch(AUTHOR_BY_GITHUBID_QUERY, { id });
  if (!user) notFound();

  return (
    <>
      <section className={"profile_container"}>
        <div className={"profile_card"}>
          <div className={"profile_title"}>
            <h3 className={"text-24-black uppercase text-center line-clamp-1"}>
              {user?.name}
            </h3>
          </div>

          <img
            src={user?.image}
            alt={user?.name}
            width={220}
            height={220}
            className={"profile_image"}
          />

          <p className={"text-30-extrabold mt-7 text-center"}>
            @{user?.username}
          </p>
          <p className={"mt-1 text-center text-14-normal"}>{user?.bio}</p>
        </div>

        <div className={"flex-1 flex flex-col gap-5 lg:-mt-5"}>
          <p className={"text-30-bold"}>
            {userId === user?._id ? "Your" : "All"} Startups
          </p>
          <Suspense fallback={<StartupCardSkeleton />}>
            <ul className={"card_grid-sm"}>
              <UserStartups id={user?._id} />
            </ul>
          </Suspense>
        </div>
      </section>
    </>
  );
};
export default Page;
