
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number')

  const multiplier = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object
    .entries(multiplier)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })

  return output === '' ? number : output
}
