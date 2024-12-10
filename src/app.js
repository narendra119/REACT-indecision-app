class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer."
        const options = ["First Option", "Second Option", "Third Option"]

        return <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options optionsArray={options}/>
            <AddOption />
        </div>
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}


class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}


class Options extends React.Component {
    constructor() {
        super();
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert("Alert! Remove all!")
    }
    render() {
        return (
            <div>
                <h3>Count: {this.props.optionsArray.length}</h3>
                <p>Here are your options:</p>
                <div>
                    {this.props.optionsArray.map((option) => <Option optionText={option}/>)}
                </div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        console.log()
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}


// AddOption -> AddOption Component Here
class AddOption extends React.Component {
    constructor() {
        super();
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault()

        const option = e.targer.elements.option.value

        if (option) {
            alert("Alert! Add Option!")
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option" />
                    <button key="submitButton" onSubmit={this.handleAddOption}>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
