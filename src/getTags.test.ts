import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import { getTags } from "./getTags.ts";

Deno.test(async function getAllTags() {
  const tags = await getTags();
  assertEquals(tags.length > 0, true);
});
