import "server-only";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, writeToken } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: writeToken,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

if (!writeClient.config().token) {
  throw new Error("Missing write token");
}
