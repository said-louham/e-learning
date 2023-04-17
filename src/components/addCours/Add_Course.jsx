import React, { useEffect, useState } from 'react'
import './form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useModal } from 'react-modal-hook';
import PopUpMsg from '../popUpMsg/PopUpMsg';
import { useDispatch } from 'react-redux';
import { GetCourses } from '../../redux/reducers/CoursesSlice';

function Add_Course({id_uesr}) {

    const [show, hide] = useModal(() => (<PopUpMsg hidden={hide} />));
    const dispatch = useDispatch();



    const [title, setTitle] = useState(null);
    const [subtitle, setSubtitle] = useState(null);
    const [language, setLanguage] = useState(null);
    const [discription, setdiscription] = useState(null);
    const [price, setPrice] = useState(null);
    const [category_id, setCategory] = useState(null);
    const [image, setImage] = useState(null);
    const [objectifs, setObjectifs] = useState(null);
    const [target, setTarget] = useState(null);

    
    console.log(image);


    const handelSubmit = async (e) => {
        e.preventDefault();
        const course = new FormData()
        title && course.append('title', title)
        subtitle && course.append('subtitle', subtitle)
        language && course.append('language', language)
        discription && course.append('discription', discription)
        category_id && course.append('category_id', category_id)
        objectifs && course.append('objectifs', objectifs)
        target && course.append('Target', target)
        price && course.append('price', price)
        image && course.append('image', image)
        course.append('user_id', id_uesr)
        console.log('c', course)
        await axios.post('http://127.0.0.1:8000/api/course', course).then(
            show ,
        ).catch(
            err => console.log('er', err)
        )

    }

    return (
        <div className='d-flex justify-content-center mt-5 '>
            <Form className='w-50' onSubmit={(e) => handelSubmit(e)}>

                <h1> Ajouter cource</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label' >Title:</Form.Label>
                    <Form.Control type="text" placeholder="title" onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                    <Form.Label style={{ paddingRight: '85%' }} className='label' >Target course:</Form.Label>
                    <Form.Control type="text" placeholder="find cource" onChange={e => setTarget(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label'>subtitle:</Form.Label>
                    <Form.Control type="text" placeholder="subtitle" onChange={e => setSubtitle(e.target.value)} />
                </Form.Group>

                <Form.Label style={{ paddingRight: '94%' }} className='label'>Language:</Form.Label>
                <Form.Select className="mb-3" aria-label="Default select example" onChange={e => setLanguage(e.target.value)}>
                    <option value='English'>English</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Hindi">Hindi</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label'>discription:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="discription" onChange={e => setdiscription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label'>Price:</Form.Label>
                    <Form.Control type="number" placeholder="price" onChange={e => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Label style={{ paddingRight: '94%' }} className='label' >Category:</Form.Label>
                <Form.Select className="mb-3" aria-label="Default select example" onChange={e => setCategory(e.target.value)}>
                    <option value="3">Marketing</option>
                    <option value="4">Management</option>
                    <option value='6'>Developpement</option>
                    <option value="7">Design</option>
                    <option value="8">Business</option>
                </Form.Select>

                <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label'  >Image:</Form.Label>
                    <Form.Control type="file" placeholder="image" onChange={e => setImage(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ paddingRight: '94%' }} className='label'>Objectifs:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Objectifs" onChange={e => setObjectifs(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-between " controlId="exampleForm.ControlIput1" >
                    <Button variant="info" type='submit' className='px-4'>Save</Button>
                    <Button variant="secondary" type='reset' className='px-4'>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Add_Course