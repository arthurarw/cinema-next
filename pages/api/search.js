import { resolveHref } from "next/dist/next-server/lib/router/router";
import { apiBase, apiKey, apiLang } from "../../lib/tmdb";

export default async (req, res) => {
  const request = await fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=${apiLang}&query=${req.query.q}`
  );
  const result = await request.json();

  res.status(200).json({
    list: result.results,
  });
};
