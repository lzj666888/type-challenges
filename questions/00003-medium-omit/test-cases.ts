import type { Equal, Expect } from '@type-challenges/utils'

// 从 T 对象类型中Pick出属性：属性是T的keys 但是key又不能在P中出现
type MyOmit<T, P> = Pick<T, Exclude<keyof T, P>>

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
