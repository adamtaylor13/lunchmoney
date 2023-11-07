import { LM_API_TOKEN, TAGS_API } from "src/config.ts";
import { Tag } from "src/types.ts";

export async function getTags(): Promise<Tag[]> {
  const response = await fetch(TAGS_API, {
    headers: {
      Authorization: `Bearer ${LM_API_TOKEN}`,
    },
  });
  return await response.json();
}