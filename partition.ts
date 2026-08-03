export function partition<T>(items: readonly T[], matches: (item: T) => boolean): [T[], T[]] {
  const yes: T[] = [], no: T[] = [];
  for (const item of items) (matches(item) ? yes : no).push(item);
  return [yes, no];
}
