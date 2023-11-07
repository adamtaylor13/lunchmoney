
# LunchMoney: deno API module 🦕

This project is a port of Lunch Money's developer API into an easily-accessible and portable module that can easily be imported and used from any deno script.

## ⚠️ This is a work in progress ⚠️

I'm primarily developing this to outfit quick scripts I write to help users with lunch money, but I'm happy to
accomodate other features and use-cases! Either open a PR yourself, or open an issue and I'll see what I can do.

## Usage/Examples


### Get all transactions (defaults to only this month)

```typescript
import { getTransactions } from "https://deno.land/x/lunchmoney/mod.ts";
// OR use a specific version:
import { getTransactions } from "https://deno.land/x/lunchmoney@alpha-0.0.4/mod.ts";

const transactions = await getTransactions();
```

### Get transactions with certain tag

```typescript
import { getTransactions } from "https://deno.land/x/lunchmoney/mod.ts";
// OR use a specific version:
import { getTransactions } from "https://deno.land/x/lunchmoney@alpha-0.0.4/mod.ts";

const transactionsWithTag = await getTransactions({
    tag_id: 123
});
```

### Update transaction

```typescript
import { updateTransaction } from "https://deno.land/x/lunchmoney/mod.ts";
// OR use a specific version:
import { updateTransaction } from "https://deno.land/x/lunchmoney@alpha-0.0.4/mod.ts";

// Update the root transaction
await updateTransaction({
    transactionId: 123,
    update: {
        transaction: {
            notes: "Oh wow, look at these new notes!"
        }
    }
});

// Create a split
await updateTransaction({
    transactionId: 123,
    update: {
        split: [
            {
                amount: 10,
                notes: "First split",
                category_id: 1,
                tags: []
            },
            {
                amount: 20,
                notes: "Second split",
                category_id: 2,
                tags: ["tagId123"]
            }
        ]
    }
});
```

### Create a split

```typescript
import { updateTransaction } from "https://deno.land/x/lunchmoney/mod.ts";
// OR use a specific version:
import { updateTransaction } from "https://deno.land/x/lunchmoney@alpha-0.0.4/mod.ts";

// Create a split
await updateTransaction({
    transactionId: 123, // Original transaction to split
    update: {
        split: [
            {
                amount: 10,
                notes: "First split",
                category_id: 1,
                tags: []
            },
            {
                amount: 20,
                notes: "Second split",
                category_id: 2,
                tags: ["tagId123"]
            }
        ]
    }
});
```