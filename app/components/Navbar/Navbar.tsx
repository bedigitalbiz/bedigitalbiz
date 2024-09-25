import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Registerdialog from "./Registerdialog";
import Signdialog from "./Signdialog";



interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '../#Home', current: true },
    { name: 'Service', href: '../#Service', current: false },
    { name: 'Site Reference', href: '../#Reference', current: false },
    
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar navbar-blur" >

            <>
                <div className="mx-auto max-w-7xl px-6 md:py-4 lg:px-8  " >
                <div className="relative flex h-10 md:h-3 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start" >

                            {/* LOGO */}
                            
                            <div className="flex flex-shrink-0 items-center">
                            <a href="../#Home">
                                <img
                                    className="block h-5 w-20 lg:hidden"
                                    src={'/assets/logo/BE.png'}
                                    alt="bedigitalbiz-logo"
                                />
                            </a>
                                <a href="../#Home">
                                    <img
                                        className="hidden h-10 w-full lg:block"
                                        src={'/assets/logo/BE.png'}
                                        alt="bedigitalbiz-logo"
                                    />
                                    </a>

                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block ml-20">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-75' : 'hover:text-blueGray hover:opacity-75',
                                                'px-3 py-4 text-sm font1 text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata/>
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
