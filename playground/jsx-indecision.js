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
    'options' : []
};

const onFormSubmit = (e) => {
    e.preventDefault()
    const element = e.target.elements[0].value
    if (element) {
        pageData.options.push(element)
        e.target.elements[0].value = ''
        console.log(pageData.options)
        renderOptionsApp()
    }
}

const emptyArray = () => {
    pageData.options = []
    renderOptionsApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * pageData.options.length)
    if (pageData.options.length > 0) {
        alert(pageData.options[randomNum])
    }
}

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


// COMMAND: babel src/app.js --out-file=public/script/app.js --presets=env,react --watch

const appRoot = document.getElementById('app')


const renderOptionsApp = () => {

    const template = (
        <div>
            <h1>{pageData.title}</h1>
            {pageData.subtitle && <p>{pageData.subtitle}</p>}
            <p>{renderOptions(pageData.options)}</p>
            <p>{pageData.options.length}</p>
            {
                renderOptions(pageData.options) &&
                <div>
                    {pageData.options.length >= 1 && <button onClick={emptyArray}>Remove All</button>}
                    <button disabled={pageData.options.length === 0} onClick={onMakeDecision} >What should I do?</button>
                    <ol>
                        {(pageData.options.length >= 1) && pageData.options.map(
                            (option) => <li>{option}</li>
                        )}
                    </ol>
                    <form onSubmit={onFormSubmit}>
                        <input type="text" name="option" />
                        <button>Add Option</button>
                    </form>
                </div>
            }
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderOptionsApp()