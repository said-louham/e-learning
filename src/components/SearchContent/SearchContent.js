import React, { useState } from 'react'
import './SearchContent.css'
import Card from '../cardsShop/card'
import { useSelector } from 'react-redux'


const SearchContent = (props) => {
    const [fProduct,setFProduct]=useState()
    const data = useSelector(state => state.productsSlice)
    const {Courses} = useSelector(state => state.Courses)
    const {search_list}=useSelector(state=>state.search)


    let cour =null
    if (!props.sr.price?.from && props.sr.categ?.length){
        cour=Courses.filter(cours => props.sr.categ.includes(cours.category_id))

    }else if(props.sr.categ?.length  > 0 && props.sr?.price){
        cour=Courses.filter(cours => props.sr.categ.includes(cours.category_id) &&
        parseFloat(cours.price) >= props.sr.price.from &&
        parseFloat(cours.price) <= props.sr.price.to)

    }else if(props.sr?.price && !props.sr.categ?.length){
        cour=Courses.filter(cours => parseFloat(cours.price) >= props.sr.price.from &&
        parseFloat(cours.price) <= props.sr.price.to)
    }

    return (
        <div className='SearchContent'>
            <div className='Cards'>
                {    
                  cour &&  cour?.length ?
                    cour.map(item =>
                            <Card
                                key={item.id}
                                picture={item.image}
                                title={item.title}
                                users={item.users}
                                price={item.price}
                                id={item.id}
                            />
                        ) :search_list?.map(item =>
                            <Card
                                key={item.id}
                                picture={item.image}
                                title={item.title}
                                users={item.users}
                                price={item.price}
                                id={item.id}
                            />)
                }
            </div>


        </div>
    )
}

export default SearchContent

