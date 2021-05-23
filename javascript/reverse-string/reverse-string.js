//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = s => 
	s.length <= 1 
	? s 
	: s.slice(-1) + reverseString(s.slice(0, -1))