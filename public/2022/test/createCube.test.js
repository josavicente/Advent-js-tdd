// Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños.
// El primer adorno que quieren fabricar es un cubo que se pone en los árboles.
// El problema es que tienen que programar la máquina y no saben cómo hacerlo.
// Nos han pedido ayuda para lograrlo.
// Para crear los cubos se le pasa un número con el tamaño
// deseado al programa y este devuelve un string con el diseño de ese tamaño.
// Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

import { describe, it, expect } from 'vitest'
import { createCube } from '../src/createCube'

// const cube = createCube(3)

//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/
// Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).
// Otros ejemplos de cubos:
// const cubeOfOne = createCube(1)
// /\_\
// \/_/
// const cubeOfTwo = createCube(2)
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/

describe('createCube', () => {
  // it('Should throw if not number is provided as parameter', () => {
  //   expect(() => createCube()).toThrow()
  // })

  it('Should throw if not a string is returned', () => {
    expect(createCube(1)).toBeTypeOf('string')
  })
  it('Should throw if not a string is returned', () => {
    expect(createCube(1)).toEqual('/\\_\\\n\\/_/')
  })
  it('Should throw if not a string is returned', () => {
    expect(createCube(2)).toEqual(' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/')
  })
  it('Should throw if not a string is returned', () => {
    expect(createCube(3)).toEqual('  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/')
  })
})
