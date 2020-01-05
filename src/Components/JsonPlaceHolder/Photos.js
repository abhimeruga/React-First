import React, { useState, useEffect } from 'react';
import APICalls from './APICalls'
import {Link} from 'react-router-dom';
import '../../App.css';
const URL = 'https://jsonplaceholder.typicode.com/photos';
function Photos(props) {
    const { data, loading } = props;
    return (
        <div>
            <Link to="/"><button className="btn btn-danger mn-btn" > Main </button> </Link>
            <br/>
            <br/>
            {!loading ? <div ><div className="spinner-border text-primary"></div><h3>loading...</h3></div> :
                <span>{
                    data.map(d => <div className="photos-grid" key={d.id}>
                        <a target="_blank" href="img_5terre.jpg">
                        <img src={d.url} alt="Smiley face" height="150" width="150" />
                        </a>
                        <hr/>
                        <div className="desc">Fig {d.id}.</div>
                    </div>

                    )
                }
                </span>
            }


        </div>
    )
}

export default APICalls(Photos, URL)