import React, { useEffect, useState } from 'react'
import './PageProfileClient.css'
import { useSelector, useDispatch } from 'react-redux'
// import { Update } from '../../redux/actions/Action'
// import { update } from '../../redux/reducers/dbReducer'
// import FormChangePass from '../../components/FormChangePass/FormChangePass'
// import { ErreurForm,Success } from '../../components/FormChangePass/Notifications'
import FormChangePass from '../../components/FormChangePass/FormChangePass'
import { ErreurForm, Success } from '../../components/FormChangePass/Notifications'

import { UpdateUser } from '../../redux/reducers/UsersSlice'
import userEvent from '@testing-library/user-event'
import Layout from '../../layouts/main'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilClient = () => {

    // const Client = useSelector(state => state.dbSlice.User1)
    const Client = JSON.parse(localStorage.getItem('user'))
    // console.log(Client.image)

    const dispatsh = useDispatch()


    const [ShowFormpassword, setShowFormpassword] = useState(false)
    const [MsgChangePass, setMsgChangePass] = useState(false)
    const [ButtonColor, setButtonColor] = useState('blue')
    const [NomButton, setNomButton] = useState('Update')
    const [DisabledBoolean, setDisabledBoolen] = useState(true)
    const [image, setImage] = useState(null);


    useEffect(() => {
        setUser(Client)
        // console.log('---------client------', Client)
    }, [])



    const [User, setUser] = useState({
        full_name: "",
        email: "",
        password: "",
        phoneNumber: "",
        adress: "",
        gender: "",
        image: "",
    })

    const handelChange = (e) => {
        const { name, value } = e.target;
        const { name2, value2 } = e.currentTarget.value;
        setUser({ ...User, [name]: value, [name2]: value2 })
    }

    // const UploadImg = (e) => {
    //     const file = e.target.files[0]
    //     // const img = URL.createObjectURL(file)
    //     setUser({ ...User, image : file })
    // }

    const handelSubmit = (e) => {
        e.preventDefault()
        setNomButton('Save')
        setDisabledBoolen(false)
        setMsgChangePass(prev => !prev)
        //  check validation next dispatch 
        const newUser = new FormData();
        newUser.append('full_name', User.full_name)
        newUser.append('email', User.email)
        newUser.append('tel', User.phoneNumber)
        newUser.append('sex', User.gender)
        newUser.append('adress', User.adress)
        newUser.append('_method', 'PATCH')
        if (image !== null) {
            newUser.append('image', image)
            console.log('image_____', image);

        }

        const id = Client.id
        console.log('User--------------->>', User)
        console.log('is--------------->>', id)
        if (NomButton === 'Save') {
            dispatsh(UpdateUser({ id, newUser }))
        }
        // dispatsh(UpdateUser(newUser))
        //   setNomButton('Update')
        //         setDisabledBoolen(true)
        //         setButtonColor('blue')

        // const valid = Validation(User)
        // if (valid.valfull_name && valid.valEmail && valid.valNumberPhone && NomButton === 'Save') {
        //     // dispatsh(update(User))
        //     Success()
        //     setNomButton('Update')
        //     setDisabledBoolen(true)
        //     setButtonColor('blue')
        // console.log('valiadte')
        // } else {
        // console.log(' NOT valiadte')
        //     setNomButton('Save')
        //     setDisabledBoolen(false)
        //     setMsgChangePass(true)
        //     setButtonColor('green')
        // }


    }

    const Validation = (value) => {
        var valfull_name = true
        var valEmail = true
        var valNumberPhone = true
        var valadress = true
        const regexfull_name = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(.[a-zA-Z]+)*$/;
        const regexPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

        if (!value.full_name) {
            ErreurForm('full_name is required')
            valfull_name = false
        } else if (!regexfull_name.test(value.full_name)) {
            ErreurForm('Invalid full_name')
            valfull_name = false
        } else {
            valfull_name = true
        }

        if (!value.email) {
            ErreurForm('email is required')
            valEmail = false
        } else if (!regexEmail.test(value.email)) {
            ErreurForm('Invalid email format !')
            valEmail = false
        } else {
            valEmail = true
        }

        if (!value.phoneNumber) {
            valNumberPhone = true
        } else if (!regexPhoneNumber.test(value.phoneNumber)) {
            ErreurForm('Invalid phone number format !')
            valNumberPhone = false
        } else {
            valNumberPhone = true
        }

        // if (!value.adress) {
        //     valadress = true
        // } else if (!regexPhoneNumber.test(value.adress)) {
        //     ErreurForm('Invalid phone number format !')
        //     valadress = false
        // } else {
        //     valadress = true
        // }

        return { valEmail, valfull_name, valNumberPhone, valadress }
    }

    return (
        <Layout>

            <div className='pageProfileClient '>

                {
                    ShowFormpassword && <FormChangePass Show={setShowFormpassword} password={Client.password} />
                }

                <form onSubmit={handelSubmit}>

                    <div className='Section-img'>
                        <div className='border-img'>
                            <img src={`http://127.0.0.1:8000/Users/${Client?.image}`} alt="" />

                            <input type='file' name='image' onChange={(e) => setImage(e.target.files[0])} disabled={DisabledBoolean} />
                        </div>
                    </div>

                    <div className='Section-info row'>
                        <div className='section-left col-md-3'>
                            <div>
                                <label> full name </label>
                                <input type='text' name='full_name' className='input form-control' disabled={DisabledBoolean} value={User?.full_name} onChange={handelChange} />
                            </div>

                            <div>
                                <label> Email </label>
                                <input type='email' name='email' className='input form-control' disabled={DisabledBoolean} value={User?.email} onChange={handelChange} />
                            </div>

                            <div>
                                <label> Password </label>
                                <input className='input form-control' name='password' type='password' disabled={true} value={User?.password} onChange={handelChange} />
                                <p className='chngPass' onClick={() => setShowFormpassword((prev) => !prev)} style={{ display: MsgChangePass ? 'block' : 'none' }}> Chnage password </p>
                            </div>
                        </div>

                        <div className='section-right col-md-2'>
                            <div className='form-group'>
                                <label> Phone number </label>
                                <input className='input form-control' name='phoneNumber' type='tele' disabled={DisabledBoolean} defaultValue={User?.tel} onChange={handelChange} />
                            </div>

                            <div>
                                <label> adress </label>
                                <input className='input form-control' name='adress' type='text' disabled={DisabledBoolean} value={User?.adress} onChange={handelChange} />
                            </div>

                            <div className='gender'>
                                <div>
                                    <input type='radio' id='Man' checked={User?.gender === 'Man' ? true : false} name='gender' value='Man' disabled={DisabledBoolean} onChange={handelChange} />
                                    <label htmlFor='Man' > Man </label>
                                </div>
                                <div>
                                    <input type='radio' id='Women' checked={User?.gender === 'Women' ? true : false} name='gender' value='Women' disabled={DisabledBoolean} onChange={handelChange} />
                                    <label htmlFor='Women' > Women </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='section-button'>
                        <button type='submit' style={{ backgroundColor: ButtonColor }}>
                            {NomButton}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ProfilClient



