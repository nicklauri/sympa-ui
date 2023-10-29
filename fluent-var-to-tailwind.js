/**
 * @param {string[]} input
 */
function ts(input) {
  const map = [
    ["neutral", "n"],
    ["foreground1", "fg1"],
    ["foreground2", "fg2"],
    ["foreground3", "fg3"],
    ["foreground4", "fg4"],
    ["foreground5", "fg5"],
    ["foreground6", "fg6"],
    ["foreground", "fg"],
    ["hover", "h"],
    ["pressed", "p"],
    ["selected", "s"],
    ["inverted", "i"],
    ["inverted2", "i2"],
    ["brand", "b"],
    ["disabled", "d"],
    ["static", "static"],
    ["background1", "bg1"],
    ["background2", "bg2"],
    ["background3", "bg3"],
    ["background4", "bg4"],
    ["background5", "bg5"],
    ["background6", "bg6"],
    ["background", "bg"],
    ["light", "light"],
    ["alpha", "a"],
    ["scrollbar", "scrollbar"],
    ["overlay", "overlay"],
    ["on", "on"],
    ["compound", "compound"],
    ["link", "link"],
    ["color", "color"],
  ].map(([name, value]) => [name, `-${value}`])

  const trim = ["color-", "-"]

  return input.map((value) => {
    let result = map.reduce((formatted, [name, value]) => formatted.replaceAll(name, value), value.toLowerCase())

    result = trim.reduce((str, trim) => (str.startsWith(trim) ? str.slice(trim.length) : str), result)

    return result
  })
}
