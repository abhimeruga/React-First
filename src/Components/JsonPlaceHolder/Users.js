import React, { useState, useEffect } from 'react';
import APICalls from './APICalls'
import {Link} from 'react-router-dom';
import '../../App.css';
const URL = 'https://jsonplaceholder.typicode.com/users';
function Users(props) {
    const { data, loading } = props;
    const [details, setDetails] = useState({});
    const [detailsToggle, setDetailsToggle] = useState(false);
    function showDetails(data1) {
        setDetailsToggle(true)
        setDetails(data1);
    }

    return (
        <div>
                    <Link to="/"><button className="btn btn-danger mn-btn" > Main </button> </Link><br/>
                    <br/>
            {!loading ? <div className="user-list"><div className="spinner-border text-primary"></div> <h3>loading...</h3></div>:<div className="user-list">
                <h3>Names</h3><hr/>{
                data.map(d => <div key={d.id}><h4>
                    <a href="#!" onClick={() => showDetails(d)} className="user-name text-warning"> {d.name} </a>
                </h4>
                <hr/>
                </div>
                )
            }
            </div>}
            
            <div className="user-details">

                {detailsToggle && <h5 className="user-details-individual">ID: {details.id}</h5>}
                {detailsToggle && <h5 className="user-details-individual">Name: {details.name}</h5>}
                {detailsToggle && <h5 className="user-details-individual">User name: {details.username}</h5>}
                {detailsToggle && <h5 className="user-details-individual">Email: {details.email}</h5>}

            </div>
        </div>
    )
}

export default APICalls(Users, URL)
