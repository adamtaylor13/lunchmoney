import { LM_API_TOKEN, TRANSACTIONS_API } from 'src/config.ts';

export async function getTransactions() {
    return await fetch(TRANSACTIONS_API, {
        headers: {
            Authorization: `Bearer ${LM_API_TOKEN}`,
        }
    });
}
