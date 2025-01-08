import React from 'react';

import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";


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

    componentDidMount() {
        const options = JSON.parse(localStorage.getItem('options'));
        if (options) {
            this.setState(() => ({ options }))
        }
    }

    componentDidUpdate() {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
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

export default IndecisionApp;
