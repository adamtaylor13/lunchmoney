export const TransactionStatus = {
    CLEARED: "cleared" as const,
    UNCLEARED: "uncleared" as const,
    RECURRING: "recurring" as const,
};

export type DateType =
    `${number}${number}${number}${number}-${number}${number}-${number}${number}`; // Format: YYYY-MM-DD

type TTransactionStatus =
    (typeof TransactionStatus)[keyof typeof TransactionStatus];

export type TransactionParams = {
    tag_id?: string;
    status?: TTransactionStatus;
    start_date?: DateType;
    end_date?: DateType;
};

export type Transaction = {
    id: number;
    date: string;
    payee: string;
    amount: string;
    currency: string;
    notes: string;
    category_id: number | null;
    asset_id: number;
    plaid_account_id: number;
    status: TTransactionStatus;
    parent_id: number;
    is_group: boolean;
    group_id: number;
    tags: string[] | null;
    external_id: number;
    original_name: string;
    type: string;
    subtype: string;
    fees: string;
    price: string;
    quantity: string;
};

export type TransactionUpdateBody = {
    split?: Split[];
    transaction?: Partial<Transaction>;
};

export type TransactionUpdateResponse = {
    updated?: string;
    split?: number[];
    error?: string[];
};

export type UngroupTransactionResponse = {
    transactions: number[];
};

export type Split = {
    amount: number;
    notes: string;
    category_id: number;
    tags?: string[];
};



