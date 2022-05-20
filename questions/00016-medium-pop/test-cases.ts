import type { Equal, Expect } from '@type-challenges/utils'

type Pop<T> = T extends [...infer R, infer P] ? R : never

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd' ]>, ['a', 'b', 'c']>>,
]

type Test = [1, 2, 3]

type ATest<T> = T extends [...infer R] ? R : never

type A = ATest<Test>
