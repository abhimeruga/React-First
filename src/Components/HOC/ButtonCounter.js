import React, { useState } from 'react'
import updatedComponent from './HOC'
function ButtonCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}> Count- {count}</button>
        </div>
    )
}

export default updatedComponent(ButtonCounter)
