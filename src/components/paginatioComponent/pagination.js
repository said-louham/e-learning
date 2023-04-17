import React, { useState, useEffect, useReducer } from 'react';
import Pagination from 'reactjs-hooks-pagination';
import axios from 'axios';

function Paginations(props) {

    const [totalRecords, setTotalRecords] = useState();
    

    // Know the number of courses
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setTotalRecords(response.data.length)
            }).catch(_ => {
                console.log("error from pagination")
            })

    }, []);
    return (
        <Pagination className="secondary"
            totalRecords={totalRecords}
            pageLimit={props.nbCoursPerPage}
            pageRangeDisplayed={1}
            onChangePage={props.setCurrentPage}
        />
    )
}

export default Paginations