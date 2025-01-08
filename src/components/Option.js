import React from 'react';

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

export default Option;
