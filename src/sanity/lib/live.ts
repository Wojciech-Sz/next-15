// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import "server-only";
import { defineLive } from "next-sanity";
import { client } from "./client";
import { dataset, projectId } from "../env";
import React from "react";

// Check if we're in production environment
const isProduction = process.env.NODE_ENV === 'production';

// Define types for our functions
type SanityFetchParams = {
  query: string;
  params?: Record<string, unknown>;
};

// Create dummy or real implementations based on environment
const createImplementations = () => {
  if (isProduction) {
    // In production, provide implementations that don't use live preview
    return {
      sanityFetch: async ({ query, params = {} }: SanityFetchParams) => {
        // Use the regular client.fetch instead of live preview in production
        const data = await client.fetch(query, params);
        return { data };
      },
      // Dummy component that doesn't do anything in production
      SanityLive: () => null as React.ReactElement | null,
    };
  } else {
    // Only use the live preview functionality in development
    return defineLive({
      client: client.withConfig({
        useCdn: false,
        dataset,
        projectId,
        // Live content is currently only available on the experimental API
        // https://www.sanity.io/docs/api-versioning
        apiVersion: "vX",
      }),
    });
  }
};

// Export the appropriate implementations
export const { sanityFetch, SanityLive } = createImplementations();
