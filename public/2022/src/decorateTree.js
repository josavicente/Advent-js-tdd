const decorateTree = (base) => {
  const treeBase = base.split(' ')
  const decoracion = {
    BB: 'B',
    RR: 'R',
    PP: 'P',
    PR: 'B',
    RP: 'B',
    RB: 'P',
    BR: 'P',
    PB: 'R',
    BP: 'R'
  }

  const arr = []
  treeBase.slice(0, -1).reduce((acc, _) => {
    acc = acc.slice(0, -1).map((_, i) =>
      decoracion[acc[i] + acc[i + 1]]
    )
    arr.unshift(acc.join(' '))
    return acc
  }, treeBase)
  return [...arr, base]
}
