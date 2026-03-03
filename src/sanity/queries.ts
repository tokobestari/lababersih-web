import { client } from "./client";

export type Tutorial = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  category: string;
  order: number;
  publishedAt: string;
  thumbnail?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
};

export type TutorialDetail = Tutorial & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
};

export async function getTutorials(): Promise<Tutorial[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "tutorial"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      category,
      order,
      publishedAt,
      thumbnail { asset-> { _ref, url } }
    }`
  );
}

export async function getTutorialBySlug(
  slug: string
): Promise<TutorialDetail | null> {
  if (!client) return null;
  return client.fetch(
    `*[_type == "tutorial" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      category,
      order,
      publishedAt,
      thumbnail { asset-> { _ref, url } },
      body[] {
        ...,
        _type == "image" => {
          ...,
          asset-> { _ref, url }
        }
      }
    }`,
    { slug }
  );
}

export async function getTutorialSlugs(): Promise<{ slug: { current: string } }[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "tutorial"] { slug }`
  );
}
