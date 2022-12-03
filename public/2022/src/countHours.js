export const countHours = (year, holidays) => {
  let extraHours = 0
  holidays.map(day => {
    return new Date(year + '/' + day).getDay() % 6 ? extraHours += 2 : 0
  })
  return extraHours
}
