// Visibility Toggle in React Component Style

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            toggle : false
        }
    }

    toggleVisibility () {
        console.log("Visibility Toggle!!!")
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }

        })
    }

    render() {
        return (
            <div>
                <h1>VisibilityToggle: {this.state.toggle.toString()}</h1>
                {this.state.toggle? <p>hello world!</p>: <p>toggle switched off!</p>}
                <button onClick={this.toggleVisibility}>Toggle</button>
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));


// let toggle = true;
// const changeToggle = () => {
//     toggle = !toggle
//     console.log("toggle", toggle)
//     render()
// };

// const app = document.getElementById("app")


// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeToggle} toggle={true}>{toggle ? 'Show Details' : 'Hide Details'}</button>
//             <p hidden={toggle}>Hey, this is the magic text that gets hidden and appear everytime you click the button above.</p>
//         </div>
//     )

//     ReactDOM.render(template, app)
// }

// render();
