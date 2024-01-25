import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// reference: https://tailwindflex.com/@oliver-hansen/fixed-navbar

const Navbar = () => {
    return (
        <header
            className="fixed inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg">
            {/* className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"> */}
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <Link aria-current="page" className="flex items-center" href="/">
                            <Image className="h-7 w-auto" src="/logo.svg" alt="" width={30} height={30} />
                            <p className="sr-only">Website Title</p>
                        </Link>
                        <h2 className=' text-xl font-bold leading-7 text-gray-900 sm:block'>Tenant</h2>
                    </div>
                 
                    <div className="flex items-center justify-end gap-3">
                        <Link className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/sign-in">Login</Link>
                        <Link className="items-center justify-center rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-slate-600 sm:inline-flex"
                            href="/sign-up">Sign Up</Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar