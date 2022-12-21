export const printTable = (gifts) => {
  const [lenA, lenB] = gifts.reduce(
    ([lenA, lenB], t) => {
      return [Math.max(lenA, t.name.length), Math.max(lenB, `${t.quantity}`.length)]
    }, [4, 8])

  return ['+'.repeat(lenA + lenB + 7),
      `| ${'Gift'.padEnd(lenA, ' ')} | ${'Quantity'.padEnd(lenB, ' ')} |`,
      `| ${'-'.repeat(lenA)} | ${'-'.repeat(lenB)} |`,
      ...gifts.map(({ name, quantity }) =>
      `| ${name.padEnd(lenA, ' ')} | ${quantity.toString().padEnd(lenB, ' ')} |`
      ), '*'.repeat(lenA + lenB + 7)
  ].join('\n')
}
