import client from './sanity';

export async function getAllPosters() {
  const results = await client
    .fetch(`*[_type == "posters"]{
      title,
      slug,
      "imageUrl": image1.asset->url,
    }| order(date desc)[0..2]`);
  return results;
}

export async function getAllSlugs() {
  const results = await client
    .fetch(`*[_type == "posters"]{
      slug,
    }| order(date desc)[0..2]`);
  return results;
}