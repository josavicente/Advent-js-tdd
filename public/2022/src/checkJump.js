function checkJump (heights) {
  const maxIndex = heights.indexOf(Math.max(...heights))

  const left = heights.slice(0, maxIndex)
  const right = heights.slice(maxIndex + 1)

  if (left.length === 0 || right.length === 0) return false

  const one = left.slice(1).every((l, i) => l >= left[i])
  const two = right.slice(1).every((r, i) => r <= right[i])

  return one && two
}
