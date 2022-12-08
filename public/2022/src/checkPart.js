export const checkPart = (part) => {
  const isPalindrom = (word) => {
    return word === [...word].reverse().join('')
  }
  // eslint-disable-next-line array-callback-return
  return [...part].some((_, index) => {
    const newWord = part.substring(0, index) + part.substring(index + 1)
    if (isPalindrom(newWord)) return true
  }, false)
}
