import React, { useState } from 'react'
import './AsideSearch.css'
import { useDispatch } from 'react-redux'
import { search } from '../../redux/reducers/Reducer'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'




const AsideSearch = (props) => {

    const data = useSelector(state => state)
    // console.log('uyt',data)
    const Dispatch = useDispatch()
    const { category } = useParams();


    useEffect(() => {
        props.sr({categ : [parseFloat(category)] , price : priceSearch}) 
      }, [category]);

    const [priceSearch, setPriceSearch] = useState({})

    const [checked, setChecked] = useState([]);
    const checkList = ["Development", "Design", "Business", "Marketing", "Management",];

    const handelSubmit = (e) => {
        const payload = {categ : checked , price : priceSearch}
        e.preventDefault()
        props.sr({categ : checked , price : priceSearch}) 
        // console.log('payload----',payload)
    }

    const handelChange = (e) => {
        const {name , value} = e.target
        setPriceSearch({...priceSearch , [name] : (+value)})
    }

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked,parseFloat(event.target.value) ];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

   
    return (
        <div className='AsideSearch'>
            <form onSubmit={handelSubmit}>
                <div className='first-Section'>
                    <h3> Categories </h3>
                    {
                        checkList.map((item, index) => (
                            <div className='inputs' key={index}>
                                <input value={index+1} id={item} type="checkbox" onChange={handleCheck} />
                                <label htmlFor={item}> {item} </label>
                            </div>
                        ))
                    }

                </div>

                <div className='second-Section'>
                    <h3> Price </h3>
                    <div className='inputs'>
                        <label> from </label>
                        <input type='number' name='from' onChange={handelChange} />
                    </div>

                    <div className='inputs'>
                        <label> to </label>
                        <input type='number' name='to' onChange={handelChange} />
                    </div>

                </div>

                <div className='Section-button'>
                    <button> Search </button>
                </div>

            </form>
        </div>
    )
}

export default AsideSearch