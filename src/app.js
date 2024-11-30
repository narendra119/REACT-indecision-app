
console.log("Hello World from /script/app.js")

function renderOptions (options) {
    if (options && options.length > 0) {
        return "Here are some options"
    } else {
        return "No options left"
    }

}

// JSX - JavaScript XML
const pageData = {
    'title' : "Indecision App",
    'subtitle' : "The most needed Decision App",
    'options' : ["One", "Two"]
};
const template = (
    <div>
        <h1>{pageData.title}</h1>
        {pageData.subtitle && <p>{pageData.subtitle}</p>}
        <p>{renderOptions(pageData.options)}</p>
        {
            renderOptions(pageData.options) &&
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        }
    </div>
)


// Render templatetwo instead of template
const user = {
    name: 'Mr. Narendra Babu',
    age: 30,
    location: 'Bengaluru East'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)


let count = 0;
const addOne = () => {
    console.log("Add One")
}
const minusOne = () => {
    console.log("Minus One")
}
const resetCount = () => {
    console.log("Reset Count")
}

const templateThree = (
    <div>
        <h1>Count: {count}</h1>
        <button id="incr-button" onClick={addOne}>+1</button>
        <button id="decr-button" onClick={minusOne}>-1</button>
        <button id="reset-button" onClick={resetCount}>Reset</button>
    </div>
)

// COMMAND: babel src/app.js --out-file=public/script/app.js --presets=env,react --watch


const appRoot = document.getElementById('app')

ReactDOM.render(templateThree, appRoot)
// ReactDOM.render(templateTwo, appRoot)
