import clsx from 'clsx'
import { NavList } from './nav/NavList'
import { SpecialOfferList } from './SpecialOfferList'
import { Button, Logo } from '../ui'
import { useState } from 'react'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button
        onClick={handleCloseMenu}
        buttonClassName='desktop:hidden !bg-transparent'
        iconName='menu'
      />

      <div
        className={clsx(
          ` size-full bg-black/80 fixed top-0 left-0 transform-all duration-300 delay-300
          ease-out z-50 desktop:hidden`,
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
        <div className='bg-white max-h-[640px] overflow-auto'>
          <div
            className='flex justify-between py-[27px] px-[15px] border border-b-white-light border-t-0
              border-l-0 border-r-0'>
            <Button
              onClick={handleCloseMenu}
              buttonClassName='desktop:hidden !bg-transparent !p-0'
              iconName='close'
            />

            <Logo
              nameLogo='logo'
              className='!w-[215]'
            />
            <Button
              onClick={handleCloseMenu}
              buttonClassName='!bg-transparent !p-0'
              iconName='tel'
            />
          </div>
          <div className='p-9'>
            <NavList className='flex-col gap-10 !items-start text-black mb-10' />
            <SpecialOfferList className='flex-col-reverse !gap-10' />
          </div>
        </div>
      </div>
    </>
  )
}
