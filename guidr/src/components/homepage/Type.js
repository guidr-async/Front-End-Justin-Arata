import React from 'react'

const Type = props => {
    return (
        <div
            onClick={() => {
                props.changeSelected(props.type);
            }}
        >
            {props.type}
        </div>
    )
}

export default Type;