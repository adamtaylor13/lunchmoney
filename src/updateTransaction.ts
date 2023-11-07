import { TransactionUpdateBody } from "./types.ts";
import { DEFAULT_HEADERS, TRANSACTIONS_API } from "./config.ts";

type UpdateTransactionParams = {
  transactionId: number;
  update: TransactionUpdateBody;
};

export function updateTransaction(
  { update, transactionId }: UpdateTransactionParams,
) {
  return fetch(`${TRANSACTIONS_API}/${transactionId}`, {
    method: "PUT",
    headers: {
      ...DEFAULT_HEADERS,
    },
    body: JSON.stringify(update),
  });
}
