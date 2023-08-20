export type GetFormattedIdFn = () => string
export type GetNextIdFn = () => number
export type CreateIncrementIdFnReturn = [GetFormattedIdFn, GetNextIdFn]

export function createIncrementIdFn(prefix: string, startsWith = 0): CreateIncrementIdFnReturn {
  return [() => `${prefix}${startsWith++}`, () => startsWith]
}
