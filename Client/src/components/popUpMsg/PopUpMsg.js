import React ,{useEffect} from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { GetCourses } from '../../redux/reducers/CoursesSlice';
import { useNavigate } from 'react-router-dom';

function PopUpMsg({ hidden }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    setTimeout(()=>{
        hidden()
        navigate('/mes-cours')

    }, 4000);
    useEffect(_=>{
        dispatch(GetCourses())
      },[])
    return (
        <div className='popUpMsgContainer'>

            <div className='PopUpMsg'>
                <h2>Amazing </h2>
                <p>course added seccessfully</p>
            </div>
        </div>
    )
}

export default PopUpMsg