import React ,{useEffect} from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { GetCourses } from '../../redux/reducers/CoursesSlice';
import { useNavigate } from 'react-router-dom';

function PopUpMsg({ hidden }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(GetCourses())

            hidden()
        }, 2000);
    }, [])
    return (
        <div className='popUpMsgContainer'>

            <div className='PopUpMsg'>
                <p>comment delete seccessfully</p>
            </div>
        </div>
    )
}

export default PopUpMsg