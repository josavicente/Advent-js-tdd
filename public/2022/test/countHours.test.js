// Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez
//  que una jornada de trabajo se pierde por un día festivo, habrá que
//  compensarlo con dos horas extra otro día de ese mismo año.

import { describe, it, expect } from 'vitest'
import { countHours } from '../src/countHours'

// Obviamente la gente que trabaja en la empresa no le ha hecho ni
// pizca de gracia y están preparando un programa que les diga el
// número de horas extras que harían en el año si se aplicara la nueva norma.

// Al ser trabajo de oficina, su horario laboral es de lunes a
// viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

// Dado un año y un array con las fechas de los días festivos,
// devuelve el número de horas extra que se harían ese año:

// const year = 2022
// const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// // 01/06 es el 6 de enero, jueves. Cuenta.
// // 04/01 es el 1 de abril, un viernes. Cuenta.
// // 12/25 es el 25 de diciembre, un domingo. No cuenta.

// countHours(year, holidays) // 2 días -> 4 horas extra en el año

// Cosas a tener en cuenta y consejos:

// El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
// Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
// El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo,
// el 1 es lunes, etc.

describe('countHours', () => {
  it('Should be a function', () => {
    expect(typeof countHours).toBe('function')
  })
  //   it('Should throw a specific error message if not number is provided as parameter', () => {
  //     expect(() => countHours()).toThrow('Must enter a year')
  //   })
  it('Should return 0 extra hours if holidays array is empty', () => {
    expect(countHours(2022, [])).toBe(0)
  })
  //   Incluido en el siguiente
  //   it('Should return extra hours if from holiday days array', () => {
  //     expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(6)
  //   })
  it('Should return extra hours only if days of holiday is not 02/29 on bisiesto year', () => {
    expect(countHours(2020, ['02/29'])).toBe(0)
  })
  it('Should return extra hours only if days of holiday days are not weekend', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4)
  })
  it('Should return extra hours of 12/31 on the present year', () => {
    expect(countHours(2025, ['12/31'])).toBe(2)
  })
})
