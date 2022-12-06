export const createCube = (size) => {
  let topMiddleLayers = ''
  let bottomMiddleLayers = ''

  for (let spaces = 1; spaces <= size; spaces++) {
    topMiddleLayers += ' '.repeat(size - spaces) + '/\\'.repeat(spaces) + '_\\'.repeat(size) + '\n'
    bottomMiddleLayers += ' '.repeat(spaces - 1) + '\\/'.repeat((size + 1) - spaces) + '_/'.repeat(size) + '\n'
  }

  return topMiddleLayers + bottomMiddleLayers.slice(0, -1)
}
