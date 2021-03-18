import { resolveHref } from "next/dist/next-server/lib/router/router";
import { apiBase, apiKey, apiLang } from "../../lib/tmdb";

export default async (req, res) => {
  const request = await fetch(
    `${apiBase}/trending/movie/week?api_key=${apiKey}&language=${apiLang}`
  );
  const result = await request.json();

  res.status(200).json({
    list: result.results,
  });
};
