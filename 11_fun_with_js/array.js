const myArr = []
%DebugPrint(myArr)

// continious, Holey

// SMI(small integer)
// Packed element
// Double (float, string, function)

// array -> element

const arrTwo = [1,2,3,4,5,6,7,8] 
// PACKED_SMI_ELEMENT

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENT

arrTwo.push('7')
//PACKED_ELEMENT

arrTwo[10] = 11
// HOLEY_ELEMENTS


// bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// holes are very expenive in js

const arrThree = [1,2,3,4]

//SMI > DOUBLE > PACKED

//H_SMI > H_DOUBLE > H_PACKED

//once downgrade no upgrade possible


const arrFour = new Array(3)
// just 3 holes, HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1,2,3,4]

arrSix.push(Infinity) 

//for, for-of, forEach => use this