import { describe, expect, it } from 'vitest'
import { canReConfigure } from '../src/canReConfigure.js'
// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.
// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial
// para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁
// La configuración de las máquinas es un string. Podemos reconfigurarla
// para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.
// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener
// el orden, no se puede asignar al mismo carácter a dos letras distintas
// (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.
// Necesitamos una función que nos diga si podemos reconfigurar una máquina
// para que de un regalo pueda pasar a fabricar otro según las reglas
// mencionadas. Lo mejor es que veamos un ejemplo:

// const from = 'BAL'
// const to   = 'LIB'
// const canReconfigure(from, to) // true
// /* la transformación sería así:
// B -> L
// A -> I
// L -> B
// */

// const from = 'CON'
// const to   = 'JUU'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */

// const from = 'XBOX'
// const to   = 'XXBO'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// X -> X
// B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse
// a la X que ya se asignó a otra)
// O -> B
// X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
// */

// const from = 'XBOX'
// const to   = 'XOBX'
// const canReconfigure(from, to) // true

// const from = 'MMM'
// const to   = 'MID'
// cons canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// M -> M (BIEN, asigna el mismo carácter a si mismo)
// M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
// M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
// */

// const from = 'AA'
// const to   = 'MID'
// const canReconfigure(from, to) // false -> no tiene la misma longitud

describe('canReConfigure', () => {
  it('Should be a function', () => {
    expect(canReConfigure).toBeTypeOf('function')
  })
  it('Should throw if first parameter is missing', () => {
    expect(() => canReConfigure()).toThrow()
  })
  it('Should throw if first parameter is not a string', () => {
    expect(() => canReConfigure(2)).toThrow()
  })
  it('Should throw if second parameter is not a string', () => {
    expect(() => canReConfigure('a')).toThrow()
  })
  it('Should return a boolean', () => {
    expect(canReConfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('Should return a false if string provided have different lenght', () => {
    expect(canReConfigure('abc', 'de')).toBe(false)
  })
  it('Should return a false if string provided have different lenght even same unique letters', () => {
    expect(canReConfigure('aab', 'ab')).toBe(false)
  })
  it('Should return a false if string provided have different number of different unique letters', () => {
    expect(canReConfigure('abc', 'ddd')).toBe(false)
  })
  it('Should return a false if strings has different order of transformation', () => {
    expect(canReConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
