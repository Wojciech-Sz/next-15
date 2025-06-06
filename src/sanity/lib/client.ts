import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Check if we're in production environment
const isProduction = process.env.NODE_ENV === "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Disable CDN in production to prevent automatic API calls
  useCdn: false,
  // Disable automatic stale content revalidation in production
  perspective: isProduction ? "published" : "previewDrafts",
  // Disable token authentication in production
  token: isProduction ? undefined : process.env.SANITY_API_READ_TOKEN,
});
