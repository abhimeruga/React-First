import React, { useEffect, useState } from 'react'
import axios from 'axios';

const APICalls = (OriginalComponent, URL) => {

    function NewComponent() {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false)
        useEffect(() => {
            axios.get(URL).
                then(res => {
                    setData(res.data);
                    console.log(res.data);
                    setLoading(true);

                }).
                catch(err => {
                    console.log(err)
                })
        },[])
        return (
            <OriginalComponent data={data} loading={loading}/>
        )
    }
    return (
        NewComponent
    )
}

export default APICalls
