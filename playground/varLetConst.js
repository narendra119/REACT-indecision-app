var testVar = "Var Value"
testVar = "Var Value - Changed"
console.log(testVar)

let testLet = "Let Value"
testLet = "Let Value - Changed"
console.log(testLet)

const testConst = "Const Value"
// testConst = "Const Value - Changed" This wont work
console.log(testConst)

let letInsideIf
// const constInsideIf

if (6 === 6) {
    var varInsideIf = "Var inside if"
    let letInsideIf = "Let inside if"
    const constInsideIf = "Const Inside If"
    console.log(varInsideIf)
    console.log(letInsideIf)
}

console.log(varInsideIf)
console.log(letInsideIf)
// console.log(constInsideIf)
