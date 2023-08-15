import React from 'react';
import './Myaccount.css';
import {BiSolidShoppingBagAlt, BiSolidUserAccount, BiSolidLogIn, BiSolidLogOut} from 'react-icons/bi';
import {FaAddressBook} from 'react-icons/fa';
import {MdManageAccounts} from 'react-icons/md';
import {SiGnuprivacyguard} from 'react-icons/si';
import {NavLink} from 'react-router-dom';

const Myaccount = () => {
    
  return (
    <>
      <div className="my-account">
        <h1>Hello Mr. Your Name</h1>
        <div className="cards">
            <NavLink to="./login" className="card">
                <h3> <BiSolidLogIn /> Login</h3>
                <p>Login into account</p>
            </NavLink>
            <NavLink to="./signup" className="card">
                <h3> <SiGnuprivacyguard />Sign Up</h3>
                <p>Sign Up for Shopping</p>
            </NavLink>
            <NavLink to="./orders" className="card">
                <h3> <BiSolidShoppingBagAlt /> My Orders</h3>
                <p>View and Track</p>
            </NavLink>
            <NavLink to="./address" className="card">
                <h3> <FaAddressBook /> My Address</h3>
                <p>Set your current delivery address</p>
            </NavLink>
            <NavLink to="./orders" className="card">
                <h3> <MdManageAccounts /> Manage Address</h3>
                <p>manage or change your delivery addressk</p>
            </NavLink>
            <NavLink to="./orders" className="card">
                <h3> <BiSolidUserAccount /> My Account</h3>
                <p>Update Your profile and preferences</p>
            </NavLink>
        </div>
      </div>
    </>
  )
}

export default Myaccount