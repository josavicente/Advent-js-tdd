export const countHours = (year, holidays) => {
  let extraHours = 0
  holidays.map(day => {
    if (new Date(year.toString() + '/' + day).getDay() % 6) {
      extraHours += 2
    }
  })
  return extraHours
}
