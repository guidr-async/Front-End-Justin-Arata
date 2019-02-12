import React from 'react'

const Type = props => {
    return (
        <div
            onClick={() => {
                props.selectTypeHandler(props.type);
            }}
        >
            {props.type}
        </div>
    )
}

export default Type;