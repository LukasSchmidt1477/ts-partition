# Array partition

Splitting arrays usually means looping twice or writing messy logic. This does it in a single pass. Keeps the bundle small and saves a few CPU cycles.

It relies entirely on the TypeScript standard library. Zero external dependencies. I don't have time to manage extra packages, and neither do you. Just drop the file in your project and ship.

```
partition.ts
```

Check the test file sitting right next to the implementation. It shows exactly how to use it so you can get back to building features.