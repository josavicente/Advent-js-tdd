/* eslint-disable no-return-assign */
export const wrapper = (gifts) => {
  const wrapperCharacter = '*'
  const linebreak = '\n'

  const result = gifts.map(gift => {
    const topBottom = wrapperCharacter.repeat(gift.length + 2)
    const wrappedGift = topBottom + linebreak + wrapperCharacter + gift + wrapperCharacter + linebreak + topBottom
    return wrappedGift
  })
  return result
}
