
let toggle = true;
const changeToggle = () => {
    toggle = !toggle
    console.log("toggle", toggle)
    render()
};

const app = document.getElementById("app")


const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeToggle} toggle={true}>{toggle ? 'Show Details' : 'Hide Details'}</button>
            <p hidden={toggle}>Hey, this is the magic text that gets hidden and appear everytime you click the button above.</p>
        </div>
    )

    ReactDOM.render(template, app)
}

render();
