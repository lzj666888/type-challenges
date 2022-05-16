import type { Equal, Expect } from '@type-challenges/utils'

/** 使用T[number] 得到数组的值枚举 通过keyof获取对象key */
type TupleToUnion<T extends readonly any[]> = keyof {
  [key in T[number]]: key
}

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
