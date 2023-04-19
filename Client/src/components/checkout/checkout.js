import React, { useState } from 'react'
import './checkout.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import {removeFromPanier} from '../../redux/reducers/reducerPanier'
import { FaCoins } from "react-icons/fa";



function Checkout(props) {
    const dispatch=useDispatch()

    const { solde } = useSelector(state => state.Auth.connected_user ||0)
    const { id } = useSelector(state => state.Auth.connected_user || 0)
    const [user_id, setTitle] = useState(2);
    const [course_id, setSubtitle] = useState(2);
    const u=JSON.parse( localStorage.getItem('user'))
    // u.solde=parseFloat(solde))parseFloat(props?.totalePrice)
    // localStorage.setItem('user', JSON.stringify(u));
    const Update = async () => {
        props.coursesId.map(cours => {
            const course = new FormData()
            course.append('_method', 'POST')
            course.append('user_id', id)
            course.append('course_id', cours)
            axios.post('http://127.0.0.1:8000/api/Command', course)
            dispatch(removeFromPanier(cours)) 
        })
           const soldFinal=parseFloat(solde)-parseFloat(props?.totalePrice)

          u.solde=soldFinal
            localStorage.setItem('user', JSON.stringify(u));
            axios.put('http://127.0.0.1:8000/api/update_Solde/'+id+'?solde='+soldFinal)

    }

    const check = () => {
        console.log('sold------------', parseFloat(solde))
        console.log('price------------', props?.totalePrice)
        console.log('mesCours------------', props.coursesId)
        console.log('s------------', id)

        if (solde > props?.totalePrice && props?.totalePrice != 0) {
            Update()
        } else {
            console.log('no')

        }
        // const res= axios.post('http://127.0.0.1:8000/api/Command')

    }
    return (
        <div className={`  ` } >
            {/* <div>
                <h1 >{props?.totalePrice || 0} coins</h1>
                {solde > props?.totalePrice ?
                    <button className='check btn btn-warning' onClick={check} >Checkout</button> :
                    <h2>you need bay more coins</h2>
                    }
            </div> */}

            <div class="card card-body shadow text-center p-md-5 w-50 m-auto">
            <div className='d-flex justify-content-center '>
                        <h2 className='me-3'>Total Amount :</h2>
                        <h3 className='' style={{}}>{props?.totalePrice || 0}  
                        <FaCoins style={{ marginLeft:'15px', marginInline: 'auto' }}
                            size={30}
                            color={'#D8D243'}
                        />   
                        
                         </h3>
            </div>

            {solde > props?.totalePrice ?
                    <button className='check btn btn-warning' onClick={check} >Checkout</button> :
                    <h2>You  Need To buy More Coins To Pass The Order</h2>
            }

                {/* <h4>No items in Cart to checkout</h4>
                <a href="" class="btn btn-warning">check out</a> */}
            </div> 

        </div>
    )
}

export default Checkout