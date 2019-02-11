import React from 'react'
import Type from './Type'

const TypeList = props => {
    console.log(props)
    return (
        <div>
            {props.types.map(type => {
                return <Type key={type} type={type} selectTypeHandler={props.selectTypeHandler} selectedType={props.selectedType} />
            })}
        </div>
    )
}
export default TypeList;