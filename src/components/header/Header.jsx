import React, { Component } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoHome, IoLogIn } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import './header.css'
import AddCart from './AddCart'
import { CiHeart } from 'react-icons/ci';


import favicon from '../../images/favicon.ico'

export class Header extends Component {

  render() {
    return (<>
        <header className='header-t-b' >
     <nav className='navbar nav-b-t'>
        <ul className='nav-links'>
           <li>
              
            <HiMenuAlt1 className='icon-hrader' />
            </li>
            <li className='nav-link'>
             <h2>Yeshetry</h2>
            </li>
            <li className='nav-link'>
            </li>

        </ul>
    
    </nav>
     <nav className='navbar nav-b-t'>
       
    
    </nav>
     <nav className='navbar nav-b-t'>
        <ul className='nav-links'>
           <li className='nav-link'>
            <FiPhoneCall  className=".icon-smell"  />
            <span className=' span-li'>
            Countect Us
            </span>
            
            </li>
            <li className='nav-link'>
            <FiShoppingCart  className=".icon-smell"  />
            <span className=' span-li'>
            Truack Order
            </span>
            </li>
            <li className='nav-link'>
              <IoLocationOutline className='.icon-smell' />
              <span className=' span-li'>
            Find A Store
            </span>
            </li>

        </ul>
    
    </nav>
    
    </header>
    <header className='headero-o' >
     <nav className='navbar nav-b-t'>
        <input 
        type="text"
        placeholder='Search'
        className='search-inp' />
    
    </nav>
     <nav className='navbar nav-b-t'>
      <img className='Logo-header' src={favicon} alt='Addidas'  />
      
    </nav>
     <nav className='navbar nav-b-t'>
        <ul className='nav-links'>
            <li onClick={() => this.props.handleViwList()} className='nav-link'>
              <AddCart name={this.props.name} />
            </li>
            <li className='nav-link'>
              
            <IoLogIn  className="icon-hrader"  />
            </li>
            <li className='nav-link'>
            <CiHeart  className="icon-hrader"  />
            </li>
            <li className='nav-link'>
            </li>

        </ul>
    
    </nav>
    </header>
    <header className=' header-b' >
     <nav className='navbar'>
        <ul className='nav-links'>
         
            <li className='nav-link'>
              <h4 className='hclas'>
                Men
              </h4>
            </li>
         
            <li className='nav-link'>
              <h4 className='hclas'>
                Women
              </h4>
            </li>
         
            <li className='nav-link'>
              <h4 className='hclas'>
                Kids
              </h4>
            </li>
         
            <li className='nav-link'>
              <h4 className='hclas'>
                Offers
              </h4>
            </li>
         
            <li className='nav-link'>
              <h4 className='hclas'>
                Best Sellers
              </h4>
            </li>
         

        </ul>
    
    </nav>
    </header>

    </>
    )
  }
}

export default Header