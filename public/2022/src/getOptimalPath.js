export const getOptimalPath = (path) => {
  if (path.length === 0) return 0
  for (let level = path.length - 2; level >= 0; level--) {
    for (let child = 0; child <= level; child++) {
      const brotherLeft = path[level + 1][child]
      const brotherRight = path[level + 1][child + 1]
      path[level][child] += Math.min(brotherLeft, brotherRight)
    }
  }
  return path[0][0]
}
