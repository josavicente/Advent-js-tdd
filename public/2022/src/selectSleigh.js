function selectSleigh (distance, sleighs) {
  const res = sleighs.reverse().find(item => item.consumption * distance <= 20)
  return res ? res.name : null
}
