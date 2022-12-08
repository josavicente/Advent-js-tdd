// Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de respuesto para arreglarlos,
//  pero no tienen claro si las piezas que tienen sirven.
// Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de
//  repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.
// Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
// Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:
// checkPart("uwu") // true
// // "uwu" es un palíndromo sin eliminar ningún carácter
import { checkPart } from '../src/checkPart'
import { describe, it, expect } from 'vitest'

// checkPart("miidim") // true
// // "miidim" puede ser un palíndromo después de eliminar la primera "i"
// // ya que "midim" es un palíndromo

// checkPart("midu") // false
// // "midu" no puede ser un palíndromo después de eliminar un carácter

describe('checkPart', () => {
  // it('Should throw if not string is provided as parameter', () => {
  //   expect(() => checkPart()).toThrow()
  // })
  it('Should return a boolean', () => {
    expect(checkPart('midim')).toBeTypeOf('boolean')
  })
  it('Should return a true if paramater is a palindrom', () => {
    expect(checkPart('midim')).toBe(true)
  })
  it('Should return a true if paramater deleteing first letter is a palindrom', () => {
    expect(checkPart('mmidim')).toBe(true)
  })
  it('Should return a true if paramater deleteing any letter is a palindrom', () => {
    expect(checkPart('mimdim')).toBe(true)
  })
})
