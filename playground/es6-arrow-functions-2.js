// argument object - not bound to arrow function and anonymous function too
// this keyword - no longer bound to arrow function and anonymous function too


const user = {
    name: 'Mr. Narendra Babu',
    cities: ['Bangalore', 'Mumbai', 'Pune'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        })
        console.log("city messages: ", cityMessages)
    }
}

const multiplier = {
    numbers : [1,2,3,4,5,6,7,8,9,10],
    multiplyBy : 6,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())

// user.printPlacesLived()
