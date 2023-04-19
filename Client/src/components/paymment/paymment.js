import React, { useEffect,useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import './paymment.css'
import axios from 'axios';


function Paymment(props) {
    const [sold,setSold]=useState(props.sold)
    const [coins,setCoins]=useState(props.coins)
    console.log(sold)
    console.log('idUsers',props.idUsers)
    console.log('coins',coins)
    const u=JSON.parse( localStorage.getItem('user'))
    
    console.log('user',u.solde)
    useEffect(() => {
    if(coins){
        coins<300?setSold(coins*0.1)
        :coins<499?setSold((coins*0.084).toFixed(2))
        :setSold((coins*0.07).toFixed(2))
    }
    }, [])
    console.log('coins----->',parseFloat(props.soldUser)+parseFloat(coins) )
    const soldFinal=parseFloat(props.soldUser)+parseFloat(coins)
    const addCoins =()=>{
        axios.put('http://127.0.0.1:8000/api/update_Solde/'+props.idUsers+'?solde='+soldFinal)
        .then(u.solde=parseFloat(props.soldUser)+parseFloat(coins))
        localStorage.setItem('user', JSON.stringify(u));



    }
    return (
        <div className='paymment ' style={{backgroundColor :"rgba(19, 45, 70, 1)",color:'white',paddingTop:"70px",borderRadius:"15px",margin:'40px 0px 40px 0px',width:'50%',marginInline:"auto"}}>
            <h3>price :{sold} $</h3>
            <h3>coins :{coins} </h3>
            <h2 className='mb-4'>Chose a paymment methode</h2>
            <PayPalScriptProvider className='paypal' options={{ "client-id": "Ack_Y7Coy-Sx3boq18SE7F7z7bgs6RZI-SUdJx47nlc22nil3VlB3_IiIsFu3QkqCZ0GVVHHHSv-eYAl" }}>
                <PayPalButtons createOrder={(data, action) => {
                    return action.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: sold
                                }
                            }
                        ]
                    })
                }}
                    onApprove={(data, action) => {
                        return action.order.capture().then(function (details) {
                            console.log(details)
                            console.log(details.payer.name)
                            console.log(data)
                            addCoins()
                            alert('Transaction completed successfully ,balance'+  sold +'coins :'+coins
                            
                            );
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    )
}

export default Paymment


