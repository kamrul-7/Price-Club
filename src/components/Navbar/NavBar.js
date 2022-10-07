import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/Home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/Orders' },
        { id: 4, name: 'Contract', path: '/Contract' },
        { id: 5, name: 'About', path: '/About' },
    ]
    return (
        <nav className='bg-blue-300 p-3'>
            <div onClick={() => setOpen(!open)} className="h-10 w-10 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <ul className={`bg-blue-300 md:flex w-full justify-center absolute md:static duration-500 ease-in ${open ? 'top-16' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;