import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const path = request.query.path as string | undefined;

  if (!path) {
    response.status(400).json({ error: "Missing path" });
    return;
  }

  try {
    await response.revalidate(path);
    response.json({ revalidated: true, path });
  } catch (err: unknown) {
    // @ts-expect-error ignore "err unknown" error
    response.status(500).json({ error: "Error revalidating: " + err.message });
  }
}
