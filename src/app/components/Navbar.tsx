'use client'
import React, { useState } from 'react'
import { Home, User, Play, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setMobile] = useState(false);

    function toggleMobileMenu() {
        setMobile(!isMobileMenuOpen);
    }
    const Navlinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: User },
        { href: "/start-tour", label: "Tour", icon: Play },
    ]
    return (
        <header className='bg-[#FFFBE9] px-6 w-screen sticky top-0'>

            {/* Desktop Navbar */}
            <div className='w-full flex justify-between items-center h-16 sm:justify-between'>
                <Link href='/' className='text-3xl text-[#AD8B73]'>EverTour</Link>
                <div className='flex items-center justify-around w-1/2'>
                    {Navlinks.map((link) => {
                        const Icon = link.icon
                        const isActive = pathname === link.href;

                        return (
                            <Link key={link.href} href={link.href} className={`${isActive ? 'text-[#FFFBE9] bg-[#CEAB93] p-2 rounded-md' : 'text-[#CEAB93]'} items-center justify-around gap-2  hidden sm:flex`}>
                                <Icon />
                                {link.label}
                            </Link>
                        )
                    }
                    )}
                </div>
                <button className='sm:hidden p-2 rounded-lg transition-all' aria-label="Toggle mobile menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 cursor-pointer" />
                    ) : (
                        <Menu className="w-6 h-6 cursor-pointer" />
                    )}
                    {/* <Menu className='w-6 h-6'/> */}
                </button>
            </div>
            {/* Mobile Navbar */}
            {isMobileMenuOpen &&(
                <div className='sm:hidden border-t border-[#393E46] py-4 bg-[#222831]'>
                    <nav className='flex flex-col space-y-2 items-start gap-4'>
                        {Navlinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href
                            return (
                                <Link onClick={toggleMobileMenu} href={link.href} key={link.href} className={`${isActive ? 'text-[#00ADB5]' : 'text-[#EEEEEE]'} flex items-center justify-center gap-6`}>
                                    <Icon />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
           ) }
        </header>
    )
}

export default Navbar