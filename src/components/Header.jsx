import { useState } from 'react'
import logo from '../media/french-fries.png'
import { Link } from 'react-router-dom';


const Header = () =>{ 
   const [logToggle, setLogToggle] = useState("Login");
   
   return (
   <div className= 'flex p-4 justify-between border-b-2 border-b-slate-400 sm:flex gap-6'  >
      
      <div className= 'items-center' >
         <Link to="/" className='flex gap-3 align-middle font-semibold'> <img 
         className='line-height-10'
         src={logo}/> 
         <h2 className='line-height-10'>J.A.F.A [Just Another Food App]</h2></Link>
      </div>
      <div className= "" > 
         <ul className='md:flex gap-4 items-center ' >
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/">Home</Link></li>
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/about">About</Link></li>
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/contact">Contact</Link></li>         
            <li className='list-item line-height-10  hover:text-orange-500'><Link to="/grocery">Grocery</Link></li>         
            <li className='list-item line-height-10  hover:text-orange-500'>Cart</li>
            <li className='list-item line-height-10'>
               <button 
                  className="bg-orange-400 px-3 py-1 rounded-full font-medium hover:bg-blue-500"
                  onClick={() => {
                     logToggle === 'Login' ? setLogToggle('Logout') : setLogToggle('Login')
                  }}
               >
                  {logToggle}
               </button>
            </li>
         </ul>
      </div>
   </div>
);
}

export default Header