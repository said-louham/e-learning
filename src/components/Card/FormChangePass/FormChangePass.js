import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { ChangePass } from '../../redux/actions/Action'
// import { changePass } from '../../redux/reducers/dbReducer';
import { ErreurFormEmpty, Success, WarrningConfirmPass, WarrningCurrentPass } from './Notifications'
import { IoMdClose } from "react-icons/io";
// import Zoom from 'react-reveal/Zoom';


const FormChangePass = ({ password, Show }) => {

    const dispatsh = useDispatch()


    const [Password, setPassword] = useState({
        CurrentPass: "",
        NewPass: "",
        ConfPass: "",
    })
    console.log("pas",password)

    const handelChange = (e) => {
        const { name, value } = e.target;
        setPassword({ ...Password, [name]: value })
        console.log("name",value)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if (Password.CurrentPass) {
            if (Password.CurrentPass === password) {
                if (Password.NewPass) {
                    if (Password.NewPass === Password.ConfPass) {
                        // dispatsh(changePass(Password.NewPass))
                        Success()
                        Show((prev) => !prev)
                    } else {
                        WarrningConfirmPass()
                    }
                } else {
                    ErreurFormEmpty()
                }
            } else {
                WarrningCurrentPass()
            }
        } else {
            ErreurFormEmpty()
        }
        Success()

    }

    return (
        <div className='FormChangePass'>
            {/* <Zoom top cascade> */}

                <form onSubmit={handelSubmit}>

                    <div className='section-top'>
                        <IoMdClose className='Icon-close' onClick={() => Show((prev) => !prev)} />
                    </div>

                    <div>
                        <label> Current password </label>
                        <input type='password' name='CurrentPass' value={Password.CurrentPass} className='input' onChange={handelChange} />
                    </div>

                    <div>
                        <label> New password </label>
                        <input type='password' name='NewPass' value={Password.NewPass} className='input' onChange={handelChange} />
                    </div>

                    <div>
                        <label>  Confirm new password </label>
                        <input type='password' name='ConfPass' value={Password.ConfPass} className='input' onChange={handelChange} />
                    </div>

                    <div className='div-button'>
                        <button type='submit'> Save </button>
                    </div>

                </form>
            {/* </Zoom> */}
        </div>
    )
}

export default FormChangePass