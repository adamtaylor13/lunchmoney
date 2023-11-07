import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import { getTransactions } from "./getTransactions.ts";
import { denock } from "https://deno.land/x/denock/mod.ts";

Deno.test(async function getAllTransactions() {
  // Define the mock which should match our request
  const foo = denock({
    method: "GET",
    protocol: "https",
    host: "dev.lunchmoney.app",
    path: "/v1/transactions",
    replyStatus: 200,
    responseBody: {
      transactions: [
        {
          id: 123,
        },
      ],
    },
  });
  await getTransactions();
  assertEquals(foo.called(), 1);
});

Deno.test(async function getWithParams() {
  // Define the mock which should match our request
  const foo = denock({
    method: "GET",
    protocol: "https",
    host: "dev.lunchmoney.app",
    path: "/v1/transactions?tag_id=123",
    replyStatus: 200,
    responseBody: {
      transactions: [{
        id: 123,
        tags: [
          {
            id: 123,
          },
        ],
      }],
    },
  });
  await getTransactions({
    tag_id: "123",
  });
  assertEquals(foo.called(), 1);
});
