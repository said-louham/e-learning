import React from 'react'
import './BuyCoins.css';
import { FaCoins } from "react-icons/fa";
function ButtonConi({price,Quntity,getPrice,setPr}) {

  const show=()=>{
    getPrice(price)
    setPr(Quntity)
    // console.log('price from button', price);
  }
  return (
    
    <div className='ButtonCoin'>
            <h1>{Quntity} <FaCoins style={{ marginLeft:"8px"}}
                              size={30}
                              color={'#D8D243'}
                        /></h1>
            <button className='price' onClick={()=>show()}>{price}$</button>
    </div>      

  )
}

export default ButtonConi