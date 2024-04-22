import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Logo/ByeBurns-logo.png'
import { toast } from 'react-toastify';

const NavBar = (props) => {
    
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='Logo' className=" w-24 h-12 mr-2 bg-slate-300 rounded-md hover:cursor-pointer" loading='lazy' />
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/"}>About</Link>
                </li>
                <li>
                    <Link to={"/"}>Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex ml-5 gap-3'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        SignUp
                    </button>
                </Link>
            }
            {  isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out",{
                            position: "bottom-left",
                        });
                    }}>
                        log Out
                    </button>
                </Link>
            }
            {  isLoggedIn &&
                <Link to="/patientdetails">
                    <button>
                        Details
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default NavBar
