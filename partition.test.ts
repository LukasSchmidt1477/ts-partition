import assert from "node:assert/strict";
import { partition } from "./partition.ts";

assert.deepEqual(partition([1, 2, 3, 4], (n) => n % 2 === 0), [[2, 4], [1, 3]]);
