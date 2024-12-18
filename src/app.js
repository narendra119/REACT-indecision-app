class IndecisionApp extends React.Component {
    constructor () {
        super();
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ['naren', 'web-dev', 'orator', 'to-be']
        }
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                options : []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value
        this.setState((prevState) => {
            prevState.options.push(option)
            return {
                options : prevState.options
            }
        })

    }

    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer."

        return <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
                handlePick = {this.handlePick}
            />
            <Options
                optionsArray={this.state.options}
                handleRemoveAll = {this.handleRemoveAll}
            />
            <AddOption
                handleAddOption = {this.handleAddOption}
            />
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
                <button onClick={this.props.handlePick}>What should I do?</button>
            </div>
        )
    }
}


class Options extends React.Component {

    render() {
        return (
            <div>
                <h3>Count: {this.props.optionsArray.length}</h3>
                <p>Here are your options:</p>
                <div>
                    {this.props.optionsArray.map((option) => <Option key={option} optionText={option}/>)}
                </div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        return (
            <div key={this.props.optionText}>
                {this.props.optionText}
            </div>
        )
    }
}


// AddOption -> AddOption Component Here
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value

        if (option) {
            this.props.handleAddOption(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
