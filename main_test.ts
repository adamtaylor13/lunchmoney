import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import { getTransactions } from "./main.ts";

Deno.test(function checkExport() {
  assertEquals(typeof getTransactions, "function");
});
