import React, { useEffect, useState } from 'react'
import './PageProfileClient.css'
import { useSelector, useDispatch } from 'react-redux'
// import { Update } from '../../redux/actions/Action'
import { update } from '../../redux/reducers/dbReducer'
import FormChangePass from '../../components/FormChangePass/FormChangePass'
import { ErreurForm, Success } from '../../components/FormChangePass/Notifications'
import Layout from '../../layouts/main';


const PageProfilClient = () => {

    const Client = useSelector(state => state.dbSlice.User1)
    const { connected_user } = useSelector(state => state.Auth)
    console.log('C', connected_user)
    console.log(Client)
    const dispatsh = useDispatch()


    const [ShowFormpassword, setShowFormpassword] = useState(false)
    const [MsgChangePass, setMsgChangePass] = useState(false)
    const [ButtonColor, setButtonColor] = useState('blue')

    const [NomButton, setNomButton] = useState('Update')
    const [DisabledBoolean, setDisabledBoolen] = useState(true)



    useEffect(() => {
        console.log('---------client------', Client)
    }, [Client])

    useEffect(() => {
        // console.log(Client)
        setUser(Client)
    }, [Client])


    const [User, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        Adresse: "",
        gender: "",
        imgUrl: "",
    })

    const handelChange = (e) => {
        const { name, value } = e.target;
        const { name2, value2 } = e.currentTarget.value;
        setUser({ ...User, [name]: value, [name2]: value2 })

    }

    const UploadImg = (e) => {
        const file = e.target.files[0]
        const img = URL.createObjectURL(file)
        setUser({ ...User, imgUrl: img })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setNomButton('Save')
        setDisabledBoolen(false)
        setMsgChangePass(prev => !prev)

        const valid = Validation(User)
        if (valid.valfullName && valid.valEmail && valid.valNumberPhone && NomButton === 'Save') {
            dispatsh(update(User))
            Success()
            setNomButton('Update')
            setDisabledBoolen(true)
            setButtonColor('blue')
        } else {
            setNomButton('Save')
            setDisabledBoolen(false)
            setMsgChangePass(true)
            setButtonColor('green')
        }


    }

    const Validation = (value) => {
        var valfullName = true
        var valEmail = true
        var valNumberPhone = true
        var valAdresse = true
        const regexfullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(.[a-zA-Z]+)*$/;
        const regexPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

        if (!value.fullName) {
            ErreurForm('fullname is required')
            valfullName = false
        } else if (!regexfullName.test(value.fullName)) {
            ErreurForm('Invalid fullname')
            valfullName = false
        } else {
            valfullName = true
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

        // if (!value.Adresse) {
        //     valAdresse = true
        // } else if (!regexPhoneNumber.test(value.Adresse)) {
        //     ErreurForm('Invalid phone number format !')
        //     valAdresse = false
        // } else {
        //     valAdresse = true
        // }

        return { valEmail, valfullName, valNumberPhone, valAdresse }

    }

    return (
        <Layout>

            <div className='pageProfileClient'>

                {
                    ShowFormpassword && <FormChangePass Show={setShowFormpassword} password={Client.password} />
                }

                <form onSubmit={handelSubmit}>

                    <div className='Section-img'>
                        <div className='border-img'>
                            <img src={Client?.imgUrl} alt='img' />
                            <input type='file' name='imgUrl' onChange={UploadImg} disabled={DisabledBoolean} />
                        </div>
                    </div>

                    <div className='Section-info'>
                        <div className='section-left'>
                            <div>
                                <label> full name </label>
                                <input type='text' name='fullName' className='input' disabled={DisabledBoolean} value={connected_user?.full_name} onChange={handelChange} />
                            </div>

                            <div>
                                <label> Email </label>
                                <input type='email' name='email' className='input' disabled={DisabledBoolean} value={connected_user?.email} onChange={handelChange} />
                            </div>

                            <div>
                                <label> Password </label>
                                <input className='input' name='password' type='password' disabled={true} value={User?.password} onChange={handelChange} />
                                <p className='chngPass' onClick={() => setShowFormpassword((prev) => !prev)} style={{ display: MsgChangePass ? 'block' : 'none' }}> Chnage password </p>
                            </div>

                        </div>

                        <div className='section-right'>
                            <div>
                                <label> Phone number </label>
                                <input className='input' name='phoneNumber' type='tele' disabled={DisabledBoolean} value={connected_user?.tel} onChange={handelChange} />
                            </div>

                            <div>
                                <label> Adresse </label>
                                <input className='input' name='Adresse' type='text' disabled={DisabledBoolean} value={connected_user?.Adresse} onChange={handelChange} />
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
                </form >

            </div>

        </Layout>
    )
}

export default PageProfilClient



