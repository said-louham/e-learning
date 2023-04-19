import React, { useState } from "react";
import {  useSelector } from "react-redux";


const data = [
    {
        picture: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
        name: 'Full Stack',
        category: 'Devloppement web',
        owner: 'John Doe',
        price: 150,
        language: 'English',
        objective: 'Learn how to build complete web applications using modern technologies',
        description: 'This course covers all the essential skills needed to become a full stack web developer, including HTML, CSS, JavaScript, and back-end technologies such as Node.js, Express, and MongoDB.',
    },
    {
        picture: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
        name: 'Data Science',
        category: 'Data analysis',
        owner: 'Alex Ray',
        price: 200,
        language: 'English',
        objective: 'Learn how to analyze and visualize data using Python',
        description: 'This course covers the fundamental concepts and techniques of data science, including statistical analysis, machine learning, and data visualization using Python.',
    },
    {
        picture: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
        name: 'Design thinking',
        category: 'Product design',
        owner: 'Kate Hunington',
        price: 100,
        language: 'English',
        objective: 'Learn how to design user-centered products and services',
        description: 'This course covers the principles of design thinking and how to apply them to the development of innovative products and services that meet the needs of users.',
    },
    {
        picture: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
        name: 'Design thinking',
        category: 'Product design',
        owner: 'Kate Hunington',
        price: 100,
        language: 'English',
        objective: 'Learn how to design user-centered products and services',
        description: 'This course covers the principles of design thinking and how to apply them to the development of innovative products and services that meet the needs of users.',
    },
    {
        picture: 'https://mdbootstrap.com/img/new/avatars/1.jpg',
        name: 'Design thinking',
        category: 'Product design',
        owner: 'Kate Hunington',
        price: 100,
        language: 'English',
        objective: 'Learn how to design user-centered products and services',
        description: 'This course covers the principles of design thinking and how to apply them to the development of innovative products and services that meet the needs of users.',
    },
];

const Table = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const {users} =useSelector(state=>state.UsersSlice)
    console.log('users----->',users)



    const handleMoreClick = (course) => {
        setSelectedCourse(course);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div >

            <table className="table align-middle w-100 p-3  bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Picture</th>
                        <th>Full Name</th>
                        <th>Email Adresse</th>
                        <th>Phone number</th>
                        <th>Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={item.image || 'https://mdbootstrap.com/img/new/avatars/8.jpg'} alt="" style={{ width: '90px', height: '90px' }} />
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{item.full_name}</p>
                            </td>
                            <td>
                                <span className="fw-normal mb-1">{item.email}</span>
                            </td>
                            <td>{item.owner}</td>
                            <td >
                                <button type="button" className="btn btn-success  btn-rounded p-2">
                                    delet
                                </button>
                                {/* <button type="button" className="btn btn-danger btn-rounded p-2">
                                    Reject
                                </button> */}
                            </td>
                            
                            {/* <td>{item.price}</td> */}
                            {/* <td>
                                <button type="button" className="btn btn-info  btn-rounded p-2"
                                    onClick={() => handleMoreClick(item)}
                                >
                                    More
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPopup && <div className="p-4"
                style={{
                    width: '90%', height: '70%', position: 'fixed',
                    top: '50%',
                    left: '50%',
                    backgroundColor: '#b0dfe9',
                    color: 'black',
                    transform: 'translate(-50%, -50%)',
                }}>
                <dl>
                    <dt>description</dt>
                    <dd>{selectedCourse.description}</dd>
                    <dt>objective</dt>
                    <dd>{selectedCourse.objective}</dd>
                    <dt>language</dt>
                    <dd>{selectedCourse.language}</dd>
                </dl>
                <button type="button" className="btn btn-danger  position-absolute bottom-0 start-50 translate-middle-x"
                onClick={() => handleClosePopup()}>
                    close
                </button>
            </div>}
        </div>
    );
};

export default Table;
