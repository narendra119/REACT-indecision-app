
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)

        if (!isNaN(count)) {
            this.setState((prevState) => { return { count } })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('count', this.state.count)
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
        localStorage.setItem('count', this.state.count)
    }

    handleMinusOne() {
        this.setState((prevState) => {return {count: prevState.count - 1};})

        localStorage.setItem('count', this.state.count)
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })

        localStorage.setItem('count', this.state.count)
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )

    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
//     count += 1
//     renderCounterApp()
// }
// const minusOne = () => {
//     count -= 1
//     renderCounterApp()
// }
// const resetCount = () => {
//     count = 0
//     renderCounterApp()
// }


// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="incr-button" onClick={addOne}>+1</button>
//             <button id="decr-button" onClick={minusOne}>-1</button>
//             <button id="reset-button" onClick={resetCount}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateThree, appRoot)
// }

// renderCounterApp()
// // ReactDOM.render(templateTwo, appRoot)
