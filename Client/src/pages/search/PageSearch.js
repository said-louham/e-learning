import React, { useState } from 'react'
import AsideSearch from '../../components/AsideSearch/AsideSearch'
import SearchContent from '../../components/SearchContent/SearchContent'
import './PageSearch.css'
import Layout from '../../layouts/main'
import { useSelector } from "react-redux"



const PageSearch = () => {
    const [search,setSearch]=useState('')
    const theme = useSelector(state => state.theme)

    return (
        <Layout>

        <div className={`PageSearch ${theme} `}>
            <div className='Content'>

                <div className='section-Aside'>
                    <AsideSearch sr={setSearch}/>
                </div>

                <div className='section-content'>
                    <SearchContent sr={search}/>
                </div>

            </div>
        </div>
        </Layout>

    )
}

export default PageSearch