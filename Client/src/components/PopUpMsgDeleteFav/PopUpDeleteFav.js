import React ,{useEffect} from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { GetFavorite } from '../../redux/reducers/favoriteSlice';
import { useNavigate } from 'react-router-dom';

function PopUpMsg({ hidden }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(GetFavorite())
            hidden()
            navigate('/favorite')
        }, 3000);
    }, [])
    return (
        <div className='popUpMsgContainer'>

            <div className='PopUpMsg'>
                <h2>Amazing </h2>
                <p>course delete seccessfully</p>
            </div>
        </div>
    )
}

export default PopUpMsg