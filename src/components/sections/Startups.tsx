import React from "react";
import StartupCard from "@/components/StartupCard";

const posts = [
  {
    _createdAt: "2022-01-01T12:00:00.000Z",
    views: 100,
    author: {
      _id: 1,
      name: "Name",
    },
    _id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Technology",
    title: "Sample Article 1",
  },
  {
    _createdAt: "2022-01-15T14:00:00.000Z",
    views: 50,
    author: {
      _id: 2,
      name: "Name",
    },
    _id: 2,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Sports",
    title: "Sample Article 2",
  },
  {
    _createdAt: "2022-02-01T10:00:00.000Z",
    views: 200,
    author: {
      _id: 1,
      name: "Name",
    },
    _id: 3,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Entertainment",
    title: "Sample Article 3",
  },
  {
    _createdAt: "2022-03-01T12:00:00.000Z",
    views: 150,
    author: {
      _id: 3,
      name: "Name",
    },
    _id: 4,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Politics",
    title: "Sample Article 4",
  },
  {
    _createdAt: "2022-04-01T14:00:00.000Z",
    views: 250,
    author: {
      _id: 2,
      name: "Name",
    },
    _id: 5,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Business",
    title: "Sample Article 5",
  },
  {
    _createdAt: "2022-05-01T10:00:00.000Z",
    views: 300,
    author: {
      _id: 1,
      name: "Name",
    },
    _id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image:
      "https://cdn.leonardo.ai/users/2d69e4ec-2d5e-4553-add9-cd4b7784512b/generations/41d59d5d-49d9-4a6e-8b6d-a75d8eb68d1d/Leonardo_Phoenix_type_photorealistic_subject_a_luxuriou_1.jpg?w=512",
    category: "Health",
    title: "Sample Article 6",
  },
];

const Startups = ({ query }: { query: string }) => {
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
