import { config } from "https://deno.land/x/dotenv/mod.ts";
await config({ export: true });

export const TRANSACTIONS_API = 'https://dev.lunchmoney.app/v1/transactions';
const LM_API_TOKEN = Deno.env.get('LM_API_TOKEN');
if (!LM_API_TOKEN) throw new Error('Please set your LM_API_TOKEN in the .env file. If you do not have an API token, you can get one at https://my.lunchmoney.app/developers');

export { LM_API_TOKEN };
