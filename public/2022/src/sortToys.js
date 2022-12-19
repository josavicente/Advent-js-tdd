export const sortToys = (toys, positions) => {
  const sortedPositions = [...positions].sort((a, b) => a - b)
  const sortedToys = sortedPositions.map((position) => {
    const toyIndex = positions.indexOf(position)
    const toy = toys[toyIndex]
    return toy
  })
  return sortedToys
}
