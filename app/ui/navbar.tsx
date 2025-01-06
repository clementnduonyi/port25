'use client'

import { useState } from "react";
import Link from "next/link";
import NavLinks from '@/app/ui/nav-links'


export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return(
        
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">CLEMENT NDUONYI</Link>

            {/* Hamburger Menu for Mobile */}
            <button
                className="block lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>

            {/* Navbar Links */}
            <NavLinks isMenuOpen={isMenuOpen} />
        </div>
    )
}
