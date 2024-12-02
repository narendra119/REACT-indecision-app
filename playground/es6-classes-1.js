
class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
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
}

const me = new Student('naren', 30, "Computer Science")

console.log(me)
console.log(me.hasBranch())
// console.log(me.getGreeting())
// console.log(me.getDescription())

const other = new Student()

console.log(other.hasBranch())
// console.log(other.getGreeting())
// console.log(other.getDescription())
