import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import { getTransactions } from "src/transactions/get.ts";

Deno.test(async function getAllTransactions() {
    const getAllResponse = await getTransactions();
    const { transactions } = await getAllResponse.json();
    assertEquals(transactions.length > 0, true);
});
