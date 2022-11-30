
export const canReConfigure = (from, to) => {
  // if (from === undefined) throw new Error('From is Required')
  if (typeof from !== 'string') throw new Error('From is not a String')
  if (typeof to !== 'string') throw new Error('To is not a String')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformations = {}

  for (let index = 0; index < from.length; index++) {
    const fromLetter = from[index]
    const toLetter = to[index]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }
  return true
}
