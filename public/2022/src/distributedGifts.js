export const distributeGifts = (packOfGifts, reindeers) => {
  return Math.trunc(reindeers.reduce((previousReindeer, reindeer) => {
    return previousReindeer + (reindeer.length * 2)
  }, 0) / packOfGifts.reduce((previousGift, gift) => {
    return previousGift + gift.length
  }, 0))
}
