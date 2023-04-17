import React, { useEffect, useState } from 'react'
import './buyCoins.css';
import { FaCoins } from "react-icons/fa";
import ButtonConi from '../../components/BuyCoins/ButtonConi';
import Paymment from '../../components/paymment/paymment';
import Layout from '../../layouts/main';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

function PageBuyCoins() {
  const [price, setPrice] = useState(null);
  const [inputprice, setInputPrice] = useState(null);
  const [message, setMessage] = useState('');
  const [globalPrice, setGlobalPrice] = useState(null);
  const [isSend, setissend] = useState(false);
  const getPrice = (newPrice) => {
    setPrice(newPrice)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    setissend(true);
    if (inputprice != null) {
      setGlobalPrice(inputprice)
      setPrice(null);
    }
  }
  const user= useSelector(state => state.Auth.connected_user)
  console.log(user?.solde)
  console.log(user.id)

  // const { loading, data, error } = useFetch('http://127.0.0.1:8000/api/users/2')

  // console.log('res', data);




  useEffect(() => {
    if (isSend === true) {
      if (globalPrice === null) {
        setMessage('select  coins first');
      }
      if (globalPrice != null) {
        setMessage('');
        console.log('global', globalPrice);
        // hna ghadi tsyft globalprice l paypal dyalk asi ahmed 
      }
    }
  }, [globalPrice, isSend])

  return (
    <Layout>

      <div className='pageBuyCoins'>
        {!globalPrice && !price && <div className='BuyCoins'>

          <div className="mySold">
            <h2>My Sold:</h2>
             <button className='sold'>
            <h1>
            {user?.solde || '0' } 
            <FaCoins style={{ marginLeft:"18px"}}
                              size={30}
                              color={'#D8D243'}
                        />
            </h1>
                      
                </button>
          </div>
          <hr style={{width:'77%'}} />

          <div>
            <div className='shose_option'>
              <div className="heading">
                <h2>Buy coins</h2>
                <FaCoins style={{ marginInline: 'auto' }}
                  size={35}
                  color={'#D8D243'}
                />
              </div>
              <div className='alloptions'>
                <div className='ontion'>
                  <ButtonConi price={10} Quntity={100} setPr={setGlobalPrice} getPrice={getPrice}  />
                  <ButtonConi price={24} Quntity={300} setPr={setGlobalPrice} getPrice={getPrice} />
                  <ButtonConi price={35} Quntity={500} setPr={setGlobalPrice} getPrice={getPrice} />

                  <form className='Contity' onSubmit={handelSubmit}>
                    <p htmlFor="">Coins</p><br />
                    <input type="number" min="1" onChange={(e) => setInputPrice(e.target.value)} /><br />
                    <button >Buy</button>
                  </form>
                  {/* <Paymment/> */}
                  <small style={{ color: 'red' }}>{message}</small>

                </div>
              </div>
            </div>
          </div>
        </div>}
        {(globalPrice || price) && <Paymment sold={price} coins={globalPrice} soldUser={user?.solde} idUsers={user?.id} 
        />}
      </div>
    </Layout>
  )
}

export default PageBuyCoins