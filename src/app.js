class IndecisionApp extends React.Component {
    constructor () {
        super();
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : ['learn react', 'learn gen ai', 'go to swim', 'revel in yourself']
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ options: []}))
    }

    handleRemoveOne(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNum])
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter Valid Value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({options : prevState.options.concat(option)}))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer."

        return <div>
            <Header subtitle={subtitle}/>
            <Action
                handlePick = {this.handlePick}
            />
            <Options
                optionsArray={this.state.options}
                handleRemoveAll = {this.handleRemoveAll}
                handleRemoveOne = {this.handleRemoveOne}
            />
            <AddOption
                handleAddOption = {this.handleAddOption}
            />
        </div>
    }
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.subtitle}</p>
//             </div>
//         )
//     }
// }

// Functional Based Component for Header
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }

// Functional Based Component for Action
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}


// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h3>Count: {this.props.optionsArray.length}</h3>
//                 <p>Here are your options:</p>
//                 <div>
//                     {this.props.optionsArray.map((option) => <Option key={option} optionText={option}/>)}
//                 </div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//             </div>
//         )
//     }

// }


// Functional Component for Options
const Options = (props) => {
    return (
        <div>
            <h3>Count: {props.optionsArray.length}</h3>
            <p>Here are your options:</p>
            <div>
                {props.optionsArray.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleRemoveOne={props.handleRemoveOne}
                    />
                ))}
            </div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div key={this.props.optionText}>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

// Functional Component for Option
const Option = (props) => {
    return (
        <div key={props.optionText}>
            {props.optionText}
            <button
                onClick={(e) => {props.handleRemoveOne(props.optionText)}}
            >
                remove
            </button>
        </div>
    )
}


// AddOption -> AddOption Component Here
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value

        const error = this.props.handleAddOption(option)

        this.setState(() => ({error}))
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// Sample Functional Based Components
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
