function getCompleted (part, total) {
  const toSeconds = (str) => {
    const [hh, mm, ss] = str.split(':')
    return (ss * 1) + (mm * 60) + (hh * 3600)
  }

  const x = toSeconds(part) / toSeconds(total)

  for (let b = 1; b <= toSeconds(total); b++) {
    if (Number.isInteger(x * b)) return x * b + '/' + b
  }
}
