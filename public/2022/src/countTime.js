export const countTime = (leds) => {
  const zeros = leds
    .join('')
    .split('1')
    .map(z => z.length)
  zeros[0] += zeros.pop()
  return Math.max(...zeros) * 7
}
