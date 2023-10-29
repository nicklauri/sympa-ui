export function noop() {}

export function nth<T>(idx: number): (arr: T[]) => T | undefined
export function nth<T>(idx: number, defaultValue: T): (arr: T[]) => T

export function nth<T>(idx: number, defaultValue?: T) {
  return (arr: T[]) => arr[idx] ?? defaultValue
}
