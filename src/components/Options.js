import React from 'react';
import Option from './Option';

// Functional Component for Options
const Options = (props) => {
    return (
        <div>
            {props.optionsArray.length === 0 && <p>Please add something to get started.</p>}
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

export default Options;
