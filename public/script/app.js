"use strict";

console.log("Hello World from /script/app.js");

function renderOptions(options) {
    if (options && options.length > 0) {
        return "Here are some options";
    } else {
        return "No options left";
    }
}

// JSX - JavaScript XML
var pageData = {
    'title': "Indecision App",
    'subtitle': "The most needed Decision App",
    'options': ["One", "Two"]
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        pageData.title
    ),
    pageData.subtitle && React.createElement(
        "p",
        null,
        pageData.subtitle
    ),
    React.createElement(
        "p",
        null,
        renderOptions(pageData.options)
    ),
    renderOptions(pageData.options) && React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// Render templatetwo instead of template
var user = {
    name: 'Mr. Narendra Babu',
    age: 30,
    location: 'Bengaluru East'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

// COMMAND: babel src/app.js --out-file=public/script/app.js --presets=env,react --watch


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot)
