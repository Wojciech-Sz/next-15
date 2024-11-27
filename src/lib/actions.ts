"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_GITHUBID_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";

export async function createUser() {
  const user = await currentUser();

  const existingUser = await client
    .withConfig({ useCdn: false })
    .fetch(AUTHOR_BY_GITHUBID_QUERY, { id: user?.id });

  if (existingUser) return true;

  await writeClient.create({
    _type: "author",
    id: user?.id,
    _id: user?.id,
    name: user?.firstName + " " + user?.lastName,
    image: user?.imageUrl,
    username: user?.username,
    email: user?.emailAddresses[0].emailAddress,
    bio: user?.publicMetadata.bio || "",
  });
}

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string,
) => {
  const { sessionId, userId } = await auth();

  if (!sessionId) {
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch"),
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: userId,
      },
      pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
