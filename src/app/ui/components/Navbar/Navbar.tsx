'use client'
import Link from "next/link"
import { kanit, inconsolata } from "../../fonts"
import { useState } from "react"
import clsx from "clsx"
import './navbar.css'
import { usePathname } from "next/navigation"

export function Navbar(){

    const path = usePathname()
    const [burgerBtn, setBurgerBtn] = useState<boolean>(false)

    const handleBtnLink = () => {
        setBurgerBtn(!burgerBtn)
    }

    return(
        <header className='w-full fixed top-0 z-50 bg-dark-bg  max-w-screen-2xl'>
            
            {/* only mobile */}
            
            <div className="flex justify-between items-center px-2 py-4 sm:hidden">
                
                <div className={`${kanit.className} flex text-mark-text2 text-[32px] tracking-[0.04em] ml-4`}>
                    <p>&lt;/E</p>
                    <p className="text-text">duard</p>
                    <p>o&gt;</p>
                </div>
                
                <div 
                    className={clsx(
                        "flex flex-col justify-around items-center w-12 h-12 py-1 rounded",
                        {
                            'border border-white': burgerBtn === false,
                            'border-0': burgerBtn
                        })}
                    onClick={handleBtnLink}
                    >
                    <div className={clsx(
                        "w-4/5 h-1 bg-white rounded-full",
                    {
                        'rotate-45 origin-top-left ': burgerBtn
                    })}></div>
                    <div className={clsx(
                        "w-4/5 h-1 bg-white rounded-full",
                    {
                        'opacity-0': burgerBtn
                    })}></div>
                    <div className={clsx(
                        "w-4/5 h-1 bg-white rounded-full",
                    {
                        'rotate-[-45deg] origin-bottom-left': burgerBtn
                    })}></div>
                </div>
            
            </div>
        
            {burgerBtn && <nav className={clsx(
                "w-full bg-[#21201D] absolute z-10",
                {
                    'menu-animation-in border-2 border-mark-text2 rounded-lg' : burgerBtn
                }
                )}>
                <ul className={`flex flex-col justify-center items-center ${inconsolata.className} text-text text-2xl`}>
                    <li className="py-[38px]">
                        <Link 
                            href={'/'}
                            onClick={handleBtnLink}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/about'}
                            onClick={handleBtnLink}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/skills'}
                            onClick={handleBtnLink}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/projects'}
                            onClick={handleBtnLink}    
                        >
                            Pet-Projects
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/contact'}
                            onClick={handleBtnLink}
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>}

            {/* tablet desktop */}

            <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center lg:flex-row lg:px-[120px]">

                <div className={`${kanit.className} flex text-mark-text2 text-[32px] tracking-[0.04em] ml-4 sm:mx-auto sm:mt-4 lg:mt-0 lg:text-4xl lg:w-1/2`}>
                    <p>&lt;/E</p>
                    <p className="text-text">duard</p>
                    <p>o&gt;</p>
                </div>

                <nav className="w-full lg:w-1/2">

                <ul className={`flex justify-center items-center ${inconsolata.className} text-text text-2xl sm:text-xl sm:w-full sm:justify-around sm:px-20 lg:px-0 lg:w-full lg:text-base `}>
                    <li className={clsx("py-[38px] sm:py-4",{'text-mark-text2': path === '/'})}>
                        <Link 
                            href={'/'}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={clsx("py-[38px] sm:py-4",{'text-mark-text2': path === '/about'})}>
                        <Link 
                            href={'/about'}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className={clsx("py-[38px] sm:py-4",{'text-mark-text2': path === '/skills'})}>
                        <Link 
                            href={'/skills'}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className={clsx("py-[38px] sm:py-4",{'text-mark-text2': path === '/projects'})}>
                        <Link 
                            href={'/projects'}    
                        >
                            Pet-Projects
                        </Link>
                    </li>
                    <li className={clsx("py-[38px] sm:py-4",{'text-mark-text2': path === '/contact'})}>
                        <Link 
                            href={'/contact'}
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>

                </nav>
            </div>
       
        </header>
    )
}
