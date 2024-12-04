class Header extends React.Component {
    render(){
        return <p>Hey this is from Header Component</p>
    }
}

const jsx = (
    <div>
        <h1>Hello World!</h1>
        <Header />
        <Header />
        <Header />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
