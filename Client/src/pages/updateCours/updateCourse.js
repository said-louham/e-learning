import React from 'react'
import { useSelector } from "react-redux"
import Layout from '../../layouts/main'
import Update_Course from '../../components/updateCours/Update';



const UpdateCourse = () => {

  
    const theme = useSelector(state => state.theme)
    return (
        <Layout>
            <div className={`updatePage ${theme} `}>
                <Update_Course/>
            </div>
        </Layout>

    )
}

export default UpdateCourse