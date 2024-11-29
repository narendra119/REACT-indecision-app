
console.log("Hello World from /script/app.js")

function renderOptions (options) {
    if (options && options.length > 0) {
        return "Here are some options"
    } else {
        return "No options left"
    }

}

// JSX - JavaScript XML
var pageData = {
    'title' : "Indecision App",
    'subtitle' : "The most needed Decision App",
    'options' : ["One", "Two"]
};
var template = (
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
var user = {
    name: 'Mr. Narendra Babu',
    age: 30,
    location: 'Bengaluru East'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

// COMMAND: babel src/app.js --out-file=public/script/app.js --presets=env,react --watch


var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo, appRoot)
