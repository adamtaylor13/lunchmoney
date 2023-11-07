import { LM_API_TOKEN, TRANSACTIONS_API } from "./config.ts";
import { Transaction } from "./types.ts";

export async function getTransactions(): Promise<Transaction[]> {
  const response = await fetch(TRANSACTIONS_API, {
    headers: {
      Authorization: `Bearer ${LM_API_TOKEN}`,
    },
  });
  const { transactions } = await response.json();
  return transactions;
}
