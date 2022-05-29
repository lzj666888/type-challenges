import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog
/**
 * description: in this case, we consider wrongly at the first, I think it is a type protect.
 * 总体来说还是层级结构上面的关系没有搞清楚
 */
type LookUp<T extends { type: string }, K> = T extends { type: K } ? T : never

// type Test = LookUp<Animal, 'dog'>

// type T = Animal['type']

type P = Animal['type']

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

interface DogSon {
  name: string
  age: number
  action: []
}

type DogAtr = keyof DogSon

const d: DogAtr = 'name'
