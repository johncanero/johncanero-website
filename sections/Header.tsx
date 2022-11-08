import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='h-16 flex items-center justify-between bg-red-50'>
        <ul className='flex gap-4'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </ul> 
        <button>Icon</button>
    </header>
  )
}

export default Header