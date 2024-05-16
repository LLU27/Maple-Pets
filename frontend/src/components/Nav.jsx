import React, { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
import { Link } from 'react-router-dom'

import Logo from '../assets/Images/logo.svg'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { PiChatCircleBold } from 'react-icons/pi'
import { IoPricetagsOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'

const Nav = () => {
  const routes = [
    {
      title: 'Home',
      path: '/',
      Icon: BiHomeAlt2,
    },
    {
      title: 'Shop',
      path: '/shop',
      Icon: IoPricetagsOutline,
    },
    {
      title: 'Explore',
      path: '/explore',
      Icon: FiSearch,
    },
    {
      title: 'About',
      path: '/about',
      Icon: PiChatCircleBold,
    },
  ]

  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setOpen(false))

  return (
    <div className='bg-[#333333]'>
      <nav className='flex justify-between items-center px-4 lg:px-10 container mx-auto'>
        <Link to='/'>
          <img className='py-2 hover:opacity-75' src={Logo} />
        </Link>
        {/* Hamburger Icon */}
        <div ref={ref} className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} color='#f68d12' label='Show menu' />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed left-0 shadow-4xl right-0 top-[8rem] p-5 pt-0 '
              >
                <ul className='grid gap-2'>
                  {routes.map((route, idx) => {
                    //destructure
                    const { Icon, title, path } = route
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={idx}
                        className='w-full p-[0.08rem] rounded-xl '
                      >
                        <Link
                          to={path}
                          onClick={() => setOpen(prev => !prev)}
                          className={'flex items-center justify-between w-full p-5 rounded-xl bg-[#f68d12] '}
                        >
                          <span className='flex gap-1 text-lg text-white '>{title}</span>
                          <Icon className='text-xl text-white' />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className='hidden md:flex items-center gap-4 my-7'>
          <ul className='flex items-center gap-10 text-md lg:text-lg'>
            {routes.map((route, index) => {
              //destructured
              const { Icon, path, title } = route
              return (
                <li key={index}>
                  <Link to={path} className='flex items-center gap-1 hover:text-neutral-400 transition-all text-white hover:scale-110 '>
                    <Icon />
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <Link className='hidden md:flex' to='/play'>
          <button className='bg-[#f68d12] border-2 px-10 py-2 font-bold text-[17px] text-white rounded-[5rem] hover:bg-[#e07a0e]  hover:scale-105 transform transition-transform duration-300 ease-in-out '>
            Play Now
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Nav
