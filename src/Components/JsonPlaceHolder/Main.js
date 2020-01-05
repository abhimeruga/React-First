import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
                <div>
                    <hr />
                    <h3 className="text-warning">Users</h3>
                    <Link to="users"><button className="btn btn-secondary">Show Users </button></Link>
                    <hr />
                    <h3 className="text-info">Photos</h3>
                    <Link to="photos"><button className="btn btn-warning">Show Photos </button></Link>
                    <hr />
                    <h3 className="text-secondary">Todo List</h3>
                    <Link to="todo"><button className="btn btn-info">Show TODO </button></Link>
                    <hr />
                </div>

    )
}

export default Main
