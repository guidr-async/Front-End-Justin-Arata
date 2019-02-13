import React from 'react'

const Type = props => {
    // console.log(props.type)
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