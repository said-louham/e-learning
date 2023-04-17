import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../layouts/main';

function Search() {
    const { category } = useParams();
    return (
        <Layout>

            <div style={{minHeight:'50vh'}}>
                <h1>Search</h1>
                <h1>{category}</h1>


            </div>
        </Layout>
    )
}

export default Search