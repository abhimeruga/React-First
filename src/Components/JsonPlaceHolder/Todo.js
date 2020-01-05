import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APICalls from './APICalls'
import Pagination from "react-pagination-library";
import '../../App.css'
const URL = 'https://jsonplaceholder.typicode.com/todos';
function Todo(props) {
    const { data, loading } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const [initialData, setInitialData] = useState([]);
    const [showPagination, setShowPagination] = useState(true);
    let i = 0;
    const [pageIncrement, setPageIncrement] = useState(0)
    const [pageItems, setPageItems] = useState([]);
    useEffect(() => {
        setInitialData(data.slice(0, 10));

    }, [data]);

    function handleChange(numPage){
        const num = parseInt(numPage.target.innerText)-1
        setCurrentPage(num);
        setInitialData(data.slice(num * 10, (num * 10) + 10))
    }
    const pagination = () => {
        setShowPagination(false)
        let copy = [];
        let pageIncrement = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i].id % 10 == 0) {
                pageIncrement++
                copy.push({ id: pageIncrement, value: pageIncrement });
            }
        }
        setPageItems(copy)
        console.log(copy);
        console.log(pageItems);
    }
    return (<div>
        <Link to="/"><button className="btn btn-danger mn-btn" > Main </button> </Link>
        <br />
        <br />
        {!loading ? <div className=""><div className="spinner-border text-primary"></div> <h3>loading...</h3></div> : <div className="cards">{
            initialData.map(d =>
                <div key={d.id} className="card card-style">
                    <div className="card-body">
                        <h5 className="card-title">{d.id}</h5>
                        <p className="card-text"> {d.title}</p>
                    </div>
                    <div className="card-footer"><progress value={d.completed ? "10" : "0"} max="10" /></div>
                </div>
            )
        }

            {
                data.length > 10 && showPagination && <button className="btn btn-warning"
                 onClick={pagination}>load Pagination</button>
            }
<div>
            <div className=" pagination-stlye pagination">
                <ul className="page-item ul-list">
                {
                    pageItems.map(p =>
                        <li onClick={(e)=>handleChange(e)} className="page-link li-list" key={p.id}>{p.value}</li>
                    )
                }
                </ul>
            </div>
            </div>


            {/* <Pagination
                currentPage={currentPage}
                totalPages={data.length / 10}
                changeCurrentPage={handleChange}
                theme="bottom-border"
            /> */}




        </div>}

    </div>
    )
}

export default APICalls(Todo, URL)