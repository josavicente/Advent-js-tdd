export const getFilesToBackup = (lastBackup, changes) => {
  const changesWithoutRepeat = [...new Set(changes)]
  const filterBackups = changesWithoutRepeat.filter(d => d.at(1) > lastBackup)
  const orderedBackups = filterBackups.map(el => el.at(0)).sort((a, b) => a - b)
  return [...new Set(orderedBackups)]
}
