import type { Equal, Expect } from '@type-challenges/utils'

/** 使用 extends 判断类型 + 泛型实现递归 */
type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown> | Array<unknown> ? DeepReadonly<T[key]> : T[key]
  // readonly [K in keyof T] : T[K] extends Record<string,unknown> | Array<unknown> ?  DeepReadonly<T[K]> : T[K];
}

let a: number extends unknown ? 1 : 2 = 1

const b: number = a

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}
