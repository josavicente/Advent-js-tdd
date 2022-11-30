import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz.js'

describe('fizzbuzz', () => {
  // Test redundante, desactivado a posteriori, los siguientes test lo cubren
  // it('Should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('Should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('Parameter provided must be a number')
  })

  it('Should throw a specific error message not number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('Parameter provided must be a number')
  })

  it('Should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('Should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('Should return fizz if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('Should return fizz if number provided is multiple 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  // Se borra ya que los test previos ya cubren este caso
  // it('Should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })
  it('Should return buzz if number provided is multiple 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it('Should return fizzbuzz if number provided is multiple 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
