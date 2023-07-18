import React from 'react'
import { NavLink } from 'react-router-dom'

const UserManu = () => {
  return (
    <>
        <div className="text-center">
            <div className="list-group bg-black text-white">
                <h2>Dashboard</h2>
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
                <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
            </div>
        </div>
    </>
  )
}

export default UserManu