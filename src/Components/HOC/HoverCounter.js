import React from 'react'
import updatedComponent from './HOC'

function HoverCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Count-{count} </h2>
            
        </div>
    )
}

export default updatedComponent(HoverCounter)
