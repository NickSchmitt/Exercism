//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (twoColors) => {
  twoColors = twoColors.splice(0, 2)
  const allColors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ]
  twoColors[0] = allColors.indexOf(twoColors[0])
  twoColors[1] = allColors.indexOf(twoColors[1])
  return parseInt(twoColors.join(''))
}
