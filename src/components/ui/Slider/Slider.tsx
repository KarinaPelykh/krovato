import { ReactNode } from 'react'
import { Swiper } from 'swiper/react'
import { SwiperModule } from 'swiper/types'
import './slider.css'
import clsx from 'clsx'
type ModulesConfiguration = SwiperModule[]

type BreakpointType = Record<number, { slidesPerView: number }>

type PaginationOptions = {
  clickable?: boolean
  el?: string
  type?: 'progressbar' | 'custom'
}

type SliderProps = {
  breakpoint?: BreakpointType
  paginationSetting?: PaginationOptions
  modulesConfiguration: ModulesConfiguration
  children: ReactNode
  slidesPerView?: number
  sliderClassName?: string
}

export const Slider = ({
  breakpoint,
  paginationSetting = { clickable: true },
  modulesConfiguration,
  children,
  slidesPerView = 3,
  sliderClassName
}: SliderProps) => {
  return (
    <Swiper
      className={clsx('slider ', sliderClassName)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      slidesPerView={slidesPerView}
      pagination={paginationSetting}
      modules={modulesConfiguration}
      spaceBetween={30}
      navigation={true}
      breakpoints={breakpoint}>
      {children}
    </Swiper>
  )
}
