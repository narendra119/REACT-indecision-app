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


// Options -> Options Component Here
class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Count: {this.props.optionsArray.length}</h3>
                <p>Here are your options:</p>
                <ol>
                    {this.props.optionsArray.map((option) => <Option optionText={option}/>)}
                </ol>
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        console.log()
        return (
            <li>{this.props.optionText}</li>
        )
    }
}


// AddOption -> AddOption Component Here
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
