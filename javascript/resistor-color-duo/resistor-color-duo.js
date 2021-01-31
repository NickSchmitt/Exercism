//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (twoColors) => {
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
  return parseInt(twoColors.map((x) => allColors.indexOf(x))
          .splice(0,2)
          .join(''))
}
