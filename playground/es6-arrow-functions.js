function square(x) {
    return x * x
}

console.log(square(3))

const squareArrow = (x) => x * x

console.log(squareArrow(3, 8))

const getFirstName = (firstName) => {
    if (firstName) {
        return firstName.split(" ")[0]
    }
}

const getFirstNameShort = firstName => firstName.split(" ")[0]

console.log(getFirstName("Johnny Depp"))
console.log(getFirstNameShort("Johnny Depp"))
