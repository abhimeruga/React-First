import React, { useState } from 'react'

const updatedComponent = (OrigialComponent) => {

    function HOC() {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(prev => prev + 1)
        }
        return (
            <OrigialComponent count={count} incrementCount={incrementCount} />
        )
    }

    return (HOC)
}

export default updatedComponent
