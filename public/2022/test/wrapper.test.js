// Instrucciones

import { describe, it, expect } from 'vitest'
import { wrapper } from '../src/wrapper'

// Este año los elfos han comprado una máquina que envuelve regalos.
// Pero... ¡no viene programada! Necesitamos crear un algoritmo que
// le ayude en la tarea.
// A la máquina se le pasa un array con los regalos. Cada regalo
// es un string. Necesitamos que la máquina envuelva cada regalo
// en papel de regalo y lo coloque en un array de regalos envueltos.
// El papel de regalo es el símbolo * y para envolver un regalo se
// coloca el símbolo * de forma que rodee totalmente al string por
//  todos los lados. Por ejemplo:

//  const gifts = ['book', 'game', 'socks']
// const wrapped = wrapping(gifts)
// console.log(wrapped)
// /* [
//      "******\n*book*\n******",
//      "******\n*game*\n******",
//      "*******\n*socks*\n*******"
//    ] */
// Como ves, el papel de regalo envuelve el string. Por arriba y por abajo,
// para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

describe('wrapper', () => {
  //   it('Should be a function', () => {
  //     expect(typeof wrapper).toBe('function')
  //   })

  //   it('Should thorw if not array is received', () => {
  //     expect(() => wrapper()).toThrow('Parameter must be Array')
  //   })

  //   it('Should throw if empty array is received', () => {
  //     expect(() => wrapper([])).toThrow('Array cant be empty')
  //   })

  it('Should return array', () => {
    expect(wrapper(['xbox', 'ps5'])).toEqual(expect.any(Array))
  })
  it('Should return array with wrapped gifts', () => {
    expect(wrapper(['book', 'game', 'socks'])).toStrictEqual(['******\n*book*\n******',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'])
  })
})
