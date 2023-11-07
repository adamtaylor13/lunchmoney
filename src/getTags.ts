import { DEFAULT_HEADERS, TAGS_API } from "./config.ts";
import { Tag } from "./types.ts";

export async function getTags(): Promise<Tag[]> {
  const response = await fetch(TAGS_API, {
    headers: { ...DEFAULT_HEADERS },
  });
  return await response.json();
}
