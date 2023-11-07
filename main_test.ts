import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.186.0/testing/asserts.ts";
import * as mod from "./mod.ts";

const { test } = Deno;

test({
  name: "API Assertions for Lunch Money",
  fn() {
    assert(mod != null);
    assertEquals(typeof mod.getTransactions, "function");
    assertEquals(typeof mod.getTags, "function");
  },
});
