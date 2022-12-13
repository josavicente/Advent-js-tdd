function getCompleted (part, total) {
  const formatTime = (time) => {
    const [h, m, s] = time.split(':')
    return (Number(h) * 3600) + (Number(m) * 60) + Number(s)
  }
  const gcd = (a, b) => (b) ? gcd(b, a % b) : a
  const partFormatted = formatTime(part)
  const totalFormatted = formatTime(total)
  const gcdEval = gcd(partFormatted, totalFormatted)
  return `${partFormatted / gcdEval}/${totalFormatted / gcdEval}`
}
