export const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  // if (Number.isNaN(maxGifts)) throw new Error('MaxGifts must be provided')
  // if (Number.isNaN(maxCities)) throw new Error('MaxCities must be provided')
  let max = 0

  const foundThePath = (giftsOnCities, listOfCitiesAccepted) => {
    const sum = listOfCitiesAccepted.reduce((a, b) => a + b, 0)

    max = (sum > max && sum <= maxGifts) ? sum : max

    giftsOnCities.forEach((numberOfGifts, i) => {
      listOfCitiesAccepted.push(numberOfGifts)
      if (listOfCitiesAccepted.length <= maxCities) {
        foundThePath(giftsOnCities.slice(i + 1), listOfCitiesAccepted)
      }
      listOfCitiesAccepted.pop(numberOfGifts)
    })
  }

  foundThePath(giftsCities, [])
  return max
}
