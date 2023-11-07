import { assertEquals, denock } from "./test_deps.ts";
import { updateTransaction } from "./updateTransaction.ts";
Deno.test(async function updateTransactionAmount() {
  const simpleUpdateRequest = denock({
    method: "PUT",
    protocol: "https",
    host: "dev.lunchmoney.app",
    path: "/v1/transactions/123",
    replyStatus: 200,
    responseBody: {},
    requestBody: {
      transaction: {
        amount: "123",
      },
    },
  });
  await updateTransaction({
    transactionId: 123,
    update: {
      transaction: {
        amount: "123",
      },
    },
  });
  assertEquals(simpleUpdateRequest.called(), 1);
});

Deno.test(async function updateTransactionWithSplits() {
  const splitUpdateRequest = denock({
    method: "PUT",
    protocol: "https",
    host: "dev.lunchmoney.app",
    path: "/v1/transactions/456",
    replyStatus: 200,
    responseBody: {},
    requestBody: {
      split: [
        {
          amount: 10,
          notes: "First split",
          category_id: 1,
          tags: [],
        },
        {
          amount: 20,
          notes: "Second split",
          category_id: 2,
          tags: [],
        },
      ],
    },
  });
  await updateTransaction({
    transactionId: 456,
    update: {
      split: [
        {
          amount: 10,
          notes: "First split",
          category_id: 1,
          tags: [],
        },
        {
          amount: 20,
          notes: "Second split",
          category_id: 2,
          tags: [],
        },
      ],
    },
  });
  assertEquals(splitUpdateRequest.called(), 1);
});
