import { Button, Logo } from '../../ui'
import { ButtonsControls } from './ButtonsControls'
import { Form } from './Form'
import { Select } from './Select'
import { useState } from 'react'
import { BurgerMenu } from '../BurgerMenu'
import { CatalogMenu } from '../catalog-menu/CatalogMenu'

export const MainControls = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)

  const handleCloseCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }

  document.body.style.overflow = isOpenCatalog ? 'hidden' : 'auto'

  return (
    <div className='items-center desktop:flex gap-5 container desktop:!py-[25px]'>
      <div className='flex justify-between items-center py-[33px] desktop:p-0'>
        <BurgerMenu />
        <Logo
          nameLogo='logo'
          className='!w-[215]'
        />

        <Button
          buttonClassName='desktop:hidden !bg-transparent !p-0'
          iconName='tel'
        />
      </div>
      <div
        className='flex items-center py-[12px] border border-t-white-light border-b-0 border-x-0
          desktop:p-0 desktop:border-0 desktop:gap-5'>
        <CatalogMenu />
        <Form />
        {isOpenCatalog && (
          <div
            className='fixed z-50 w-full h-full top-[200px] tablet:top-[100px] left-0 bg-black/80
              desktop:hidden'>
            <div className='bg-white p-[35px]'>
              <Form className='!flex !w-full' />
            </div>
          </div>
        )}

        <Select />

        <ButtonsControls
          isOpenCatalog={isOpenCatalog}
          onClick={handleCloseCatalog}
        />
      </div>
    </div>
  )
}
