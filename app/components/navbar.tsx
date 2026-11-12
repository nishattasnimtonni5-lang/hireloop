'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavBarPage = () => {
    const [signIn,setSignIn]=useState(true);
    return (
        <div className='flex justify-between px-5'>
            <div className="pl-10">
            <Image src={'/image/logo.png' } alt="logoImage" width={40} height={20} className=" w-25"/>
        </div>
        <div className="flex gap-5  items-center">
        <ul className="flex gap-5 border-r-2 " >
        <li>Browse Jobs</li>
        <li>Company</li>
        <li>Pricing</li>
        
        </ul>
<div className="flex gap-5">
       <Link href='/signin'>
        <button
        onClick={()=>
            setSignIn(true)
        }
        className={` px-2 py-1 rounded-lg
        ${
        signIn? "bg-blue-500 text-white" :"bg-white text-black"
        }`}>Sign in</button>
       </Link> 
       <Link href="/signup">
       <button
         onClick={()=>
            setSignIn(false)
        }
        className={` px-2 py-1 rounded-lg
        ${
        !signIn? "bg-blue-500 text-white" :"bg-white text-black"
        }`}
        >Get Started</button>
        </Link>
    </div>
    </div>
        </div>
    );
};

export default NavBarPage;