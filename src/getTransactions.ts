import { DEFAULT_HEADERS, TRANSACTIONS_API } from "./config.ts";
import { Transaction, TransactionParams } from "./types.ts";
import { createQueryParams } from "./api.ts";

export async function getTransactions(
  transactionParams: TransactionParams = {},
): Promise<Transaction[]> {
  const response = await fetch(
    `${TRANSACTIONS_API}${createQueryParams(transactionParams)}`,
    {
      headers: { ...DEFAULT_HEADERS },
    },
  );
  const { transactions } = await response.json();
  return transactions;
}
