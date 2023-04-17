import React from 'react'
import Header from '../../components/adminHeader/header'
import MenuAdmin from '../../components/menuAdmin/MenuAdmin'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

function MainAdmin({ children }) {
  const { connected_user } = useSelector(state => state.Auth)
  if (connected_user?.role == 'admin')
    return (
      <div style={{ display: 'flex' }}>

        <div style={{ width: '25%', backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
          <MenuAdmin />
        </div>
        <div style={{ backgroundColor: '#F5F5F5' }}>
          <Header />
          <main style={{ width: '100%', height: '85%', backgroundColor: '#F5F5F5' }}>{children}</main>
        </div>
      </div>
    )
  return (<Navigate to="/er" />)
}

export default MainAdmin