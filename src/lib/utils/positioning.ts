export const DEFAULT_DOM_RECT: Readonly<DOMRect> = {
  top: 0,
  bottom: 0,
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  x: 0,
  y: 0,
  toJSON() {
    return this
  },
}
