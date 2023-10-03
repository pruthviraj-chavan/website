import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "pruthvirajchavan2002@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>DYP ECOMMERCE</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'pruthvirajchavan2002@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar