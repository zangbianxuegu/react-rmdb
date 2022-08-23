import { NextApiRequest, NextApiResponse } from "next";

import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "../../config";

import { basicFetch } from "../../api/fetchFunctions";

import type { Movies } from "../../api/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { query } = req;
  const { page, search } = query;
  const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
  const data = await basicFetch<Movies>(endpoint);
  res.status(200).json(data);
}