import { assertEquals, denock } from "./test_deps.ts";
import { getTags } from "./getTags.ts";

Deno.test(async function getAllTags() {
  const tagsApi = denock({
    method: "GET",
    protocol: "https",
    host: "dev.lunchmoney.app",
    path: "/v1/tags",
    replyStatus: 200,
    responseBody: [
      {
        id: 123,
        name: "My Tag",
        description: "This tag does stuff",
        archived: false,
      },
    ],
  });
  await getTags();
  assertEquals(tagsApi.called(), 1);
});
