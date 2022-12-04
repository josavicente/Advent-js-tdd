export const fitsInOneBox = (boxes) => {
  return boxes.sort((a, b) => b.l - a.l).every((box, index) => {
    // eslint-disable-next-line no-mixed-operators
    return index || box.w > boxes[index + 1].w && box.h > boxes[index + 1].h
  })
}
