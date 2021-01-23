//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (string) => {
  string = string.splice(0,2)
  const colors = [
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
  string[0] = colors.indexOf(string[0])
  string[1] = colors.indexOf(string[1])
  return parseInt(string.join(""))
}
