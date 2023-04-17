import React, { useEffect, useState } from 'react'
// import './form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { GetCourses } from '../../redux/reducers/CoursesSlice';
import { useModal } from 'react-modal-hook';
import PopUpMsg from '../popUpMsg/PopUpMsg';





function Update_Course(){

    const [show, hide] = useModal(() => (<PopUpMsg hidden={hide} />));
    const checkList = ["Marketing", "Management", "Developpement", "Design", "Business"];



    const [title,setTitle]=useState(null);
    const [subtitle,setSubtitle]=useState(null);
    const [language,setLanguage]=useState(null);
    const [discription,setdiscription]=useState(null);
    const [price,setPrice]=useState(null);
    const [category_id,setCategory]=useState(null);
    const [image,setImage]=useState(null);
    const [objectifs,setObjectifs]=useState(null);
    const [Target,setTarget]=useState(null);
    const [item,setItem]=useState([]) 
    const {idMyCours}=useParams();

    const dispatch = useDispatch();
    const {id} =useSelector(state=> state.Auth.connected_user || 0)
    
    useEffect(_=>{
      dispatch(GetCourses())
    },[item])


    const Update=async(e)=>{
         e.preventDefault();
            const course=new FormData()
             course.append('_method', 'PATCH')
             course.append('title',title)
             course.append('subtitle',subtitle)
             course.append('language',language)
             course.append('discription',discription)
             course.append('category_id',category_id)
             course.append('objectifs',objectifs)
             course.append('Target',Target)
             course.append('price',price)
             course.append('user_id',id)

             if (image !== null) {
                course.append('image',image)
            }

        //    const config = {
        //       headers: {
        //        "content-type": "multipart/form-data",
               
        //     } };     
       await axios.post(`http://127.0.0.1:8000/api/course/${idMyCours}`,course).then(
        show ,
    )

    console.log('title',title);
    console.log('subtitle',subtitle);
    console.log('language',language);
    console.log('discription',discription);
    console.log('category_id',category_id);
    console.log('objectifs',objectifs);
    console.log('Target',Target);
    console.log('price',price);
    console.log('image',image);
    }
 // ------------------------------------------------------------------

    useEffect(()=>{
        const get_Cource=async()=>{
           const res = await axios.get(`http://127.0.0.1:8000/api/course/${idMyCours}`)
           .then(dispatch(GetCourses())) 
           setItem(res.data.data)
                const data=res.data.data;
           setTitle(data.title);
           setSubtitle(data.subtitle);
           setCategory(data.category_id);
           setLanguage(data.language);
           setObjectifs(data.objectifs);
           setPrice(data.price);
           setTarget(data.Target);
           setdiscription(data.discription);
        }
        get_Cource();
    },[])
    console.log(item.category_id)
    if (id  === undefined) return(<Navigate to="/er" />)


      
  return (
    <div className='d-flex justify-content-center mt-5'>
  <Form className='w-50' onSubmit={(e)=>Update(e)}>
                <h1> Update cource</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
            <Form.Label style={{paddingRight:'94%'}} className='label' >Title:</Form.Label>
            <Form.Control type="text" placeholder="title" defaultValue={item.title}  onChange={e=>setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
            <Form.Label style={{paddingRight:'85%'}} className='label' >Target course:</Form.Label>
            <Form.Control type="text" placeholder="find cource"  defaultValue={item.Target}  onChange={e=>setTarget(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
                <Form.Label style={{paddingRight:'94%'}}  className='label'>subtitle:</Form.Label>
                <Form.Control type="text" placeholder="subtitle" defaultValue={item.subtitle}  onChange={e=>setSubtitle(e.target.value)}/>
            </Form.Group>

            <Form.Label style={{paddingRight:'94%'}}  className='label'>Language:</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example"  defaultValue={item.language}   onChange={e=>setLanguage(e.target.value)}>
            <option value='English'>English</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
            <option value="Hindi">Hindi</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{paddingRight:'94%'}}  className='label'>discription:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="discription"  defaultValue={item.discription}    onChange={e=>setdiscription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
            <Form.Label style={{paddingRight:'94%'}} className='label'>Price:</Form.Label>
                <Form.Control type="number" placeholder="price"  defaultValue={item.price}    onChange={e=>setPrice(e.target.value)} />
            </Form.Group>

            <Form.Label style={{paddingRight:'94%'}}  className='label' >Category:</Form.Label>
            <Form.Select className="mb-3" aria-label="Default select example" defaultValue={item?.category_id}  onChange={e=>setCategory(e.target.value)}>
            <option value="5">Marketing</option>
            <option value="4">Management</option>
            <option value='3'>Developpement</option>
            <option value="1">Design</option>
            <option value="2">Business</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="exampleForm.ControlIput1">
            <Form.Label style={{paddingRight:'94%'}} className='label'  >Image:</Form.Label>
            <Form.Control type="file" placeholder="image"  onChange={e=>setImage(e.target.files[0])} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{paddingRight:'94%'}} className='label'>Objectifs:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Objectifs" defaultValue={item.objectifs}   onChange={e=>setObjectifs(e.target.value)}  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex justify-content-between " controlId="exampleForm.ControlIput1" >
                    <Button variant="info"  type='submit' className='px-4'>Save</Button> 
                     <Button variant="secondary" type='reset' className='px-4'>Cancel</Button>
            </Form.Group>
    </Form>
    </div>
  )
}

export default Update_Course;