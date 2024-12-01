let count = 0;
const addOne = () => {
    count += 1
    renderCounterApp()
}
const minusOne = () => {
    count -= 1
    renderCounterApp()
}
const resetCount = () => {
    count = 0
    renderCounterApp()
}


const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id="incr-button" onClick={addOne}>+1</button>
            <button id="decr-button" onClick={minusOne}>-1</button>
            <button id="reset-button" onClick={resetCount}>Reset</button>
        </div>
    )
        
    ReactDOM.render(templateThree, appRoot)
}

renderCounterApp()
// ReactDOM.render(templateTwo, appRoot)
