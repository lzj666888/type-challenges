import type { Equal, Expect } from '@type-challenges/utils'

// type First<T extends any[]> = T extends never[] ? never : T[0]

type First<T> = T extends [infer P, ...infer R] ? P : never

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  First<'notArray'>,
  First<{ 0: 'arrayLike' }>,
]
