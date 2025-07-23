"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [indicatorStyle, setIndicatorStyle] = useState({ left: '0px', width: '0px' });
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (!pathname) return false;
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    useEffect(() => {
        const activeLink = document.querySelector('nav a[aria-current="page"]');
        if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink as HTMLElement;
            setIndicatorStyle({
                left: `${offsetLeft}px`,
                width: `${offsetWidth}px`
            });
        }
    }, [pathname]);

    const handleThemeToggle = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsDarkMode(!isDarkMode);
            setIsRotating(false);
        }, 300); // Half of the rotation duration
    };

    return (
        <header>
            <div className="flex flex-row md:space-x-30 space-x-6 py-6 md:py-10 justify-between md:justify-center items-center px-4 md:px-0">
                <h1 className="logo cursor-pointer" onClick={() => router.push("/")}>
                    <img src="/drawable/triangleLogo.png" alt="logo" className="w-10 h-10" />
                </h1>
                {!mobileMenuOpen && (
                  <button
                    className="md:hidden ml-auto text-white focus:outline-none z-30"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open navigation menu"
                  >
                    <HiMenu size={32} />
                  </button>
                )}
                <nav className="relative md:flex hidden items-center space-x-4">
                    <div 
                        className="absolute h-full bg-[#333333] rounded-lg transition-all duration-300 ease-in-out"
                        style={indicatorStyle}
                    />
                    <Link 
                        className={`relative transition-colors duration-200 rounded-lg px-4 py-3
                            ${isActive('/') ? "text-white" : "text-gray-400 hover:text-white"}`} 
                        href="/"
                        aria-current={isActive('/') ? "page" : undefined}
                    >
                        Home
                    </Link>
                    <Link 
                        className={`relative transition-colors duration-200 rounded-lg px-4 py-3
                            ${isActive('/pages/about') ? "text-white" : "text-gray-400 hover:text-white"}`} 
                        href="/pages/about"
                        aria-current={isActive('/pages/about') ? "page" : undefined}
                    >
                        About
                    </Link>
                    <Link 
                        className={`relative transition-colors duration-200 rounded-lg px-4 py-3
                            ${isActive('/pages/project') ? "text-white" : "text-gray-400 hover:text-white"}`} 
                        href="/pages/project"
                        aria-current={isActive('/pages/project') ? "page" : undefined}
                    >
                        Project
                    </Link>
                    <Link 
                        className={`relative transition-colors duration-200 rounded-lg px-4 py-3
                            ${isActive('/pages/gear') ? "text-white" : "text-gray-400 hover:text-white"}`} 
                        href="/pages/gear"
                        aria-current={isActive('/pages/gear') ? "page" : undefined}
                    >
                        Gear
                    </Link>
                    <Link 
                        className={`relative transition-colors duration-200 rounded-lg px-4 py-3
                            ${isActive('/pages/contact') ? "text-white" : "text-gray-400 hover:text-white"}`} 
                        href="/pages/contact"
                        aria-current={isActive('/pages/contact') ? "page" : undefined}
                    >
                        Contact
                    </Link>
                </nav>
                <h1 
                    className={`modeToggle cursor-pointer transition-transform duration-600 ${isRotating ? 'rotate-180' : ''}`}
                    onClick={handleThemeToggle}
                >
                    <img 
                        src={isDarkMode ? "/drawable/modeToggleDark.png" : "/drawable/modeToggleLight.png"} 
                        alt="theme toggle" 
                        width={28} 
                        height={28}
                        className="w-7 h-7"
                    />
                </h1>
                {/* Mobile nav dropdown */}
                {mobileMenuOpen && (
                  <nav className="absolute top-16 right-4 w-56 bg-black bg-opacity-95 rounded-xl shadow-lg flex flex-col items-start p-6 z-20 md:hidden transition-all">
                    <button
                      className="absolute top-3 right-3 text-white"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Close navigation menu"
                    >
                      <HiX size={28} />
                    </button>
                    <Link onClick={() => setMobileMenuOpen(false)} className={`text-lg font-bold mb-4 mt-2 ${isActive('/') ? "text-white" : "text-gray-400 hover:text-white"}`} href="/" aria-current={isActive('/') ? "page" : undefined}>Home</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} className={`text-lg font-bold mb-4 ${isActive('/pages/about') ? "text-white" : "text-gray-400 hover:text-white"}`} href="/pages/about" aria-current={isActive('/pages/about') ? "page" : undefined}>About</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} className={`text-lg font-bold mb-4 ${isActive('/pages/project') ? "text-white" : "text-gray-400 hover:text-white"}`} href="/pages/project" aria-current={isActive('/pages/project') ? "page" : undefined}>Project</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} className={`text-lg font-bold mb-4 ${isActive('/pages/gear') ? "text-white" : "text-gray-400 hover:text-white"}`} href="/pages/gear" aria-current={isActive('/pages/gear') ? "page" : undefined}>Gear</Link>
                    <Link onClick={() => setMobileMenuOpen(false)} className={`text-lg font-bold mb-2 ${isActive('/pages/contact') ? "text-white" : "text-gray-400 hover:text-white"}`} href="/pages/contact" aria-current={isActive('/pages/contact') ? "page" : undefined}>Contact</Link>
                  </nav>
                )}
            </div>
        </header>
    );
}