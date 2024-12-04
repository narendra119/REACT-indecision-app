
class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, branch) {
        super(name, age)
        this.branch = branch
    }
    hasBranch() {
        return !!this.branch
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasBranch()) {
            description = description + ` And, my branch is ${this.branch}`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homelocation) {
        super(name, age)
        this.homelocation = homelocation
    }
    hasHomeLocation() {
        return !!this.homelocation
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasHomeLocation()) {
            description += ` And my home location is ${this.homelocation}`
        }
    }
}

const tobj = new Traveller("Naren", 30, "Bangalore")
console.log(tobj)
console.log(tobj.getDescription())
console.log(tobj.hasHomeLocation())

const tobjEmpty = new Traveller()
console.log(tobj)
console.log(tobj.getDescription())
console.log(tobj.hasHomeLocation())
