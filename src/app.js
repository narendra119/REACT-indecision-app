class IndecisionApp extends React.Component {
    render() {
        return <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
        </div>
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <p>Put your hands in the life of a computer.</p>
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
                <h3>Count: []</h3>
                <Option />
                <Option />
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>Option Text Here.</p>
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
