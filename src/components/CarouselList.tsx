import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import CarouselItem from './CarouselItem'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './_carouselList.module.scss'

type CarouselProps = {
  id: number
  image: string
  title: string
  text: string
}

const CarouselList = () => {
  const carouselList = [
    {
      id: 1,
      image: 'http://placekitten.com/150/200',
      title: 'Milo',
      text: 'Risk-taking traveler with love for tree-scaling and butterfly-hunting.'
    },
    {
      id: 2,
      image: 'http://placekitten.com/g/150/200',
      title: 'Charlie',
      text: 'Powerful and autonomous soul that enjoys basking, sunbathing, and stalking phantom prey.'
    },
    {
      id: 3,
      image: 'http://placekitten.com/150/200',
      title: 'Parsley',
      text: 'Soft, caring nature that adores curling up in laps and being cherished lovingly.'
    },
    {
      id: 4,
      image: 'http://placekitten.com/g/150/200',
      title: 'Callie',
      text: 'Puckish prankster who is a Hide-and-seek enthusiast and lays siege to toys.'
    },
    {
      id: 5,
      image: 'http://placekitten.com/150/200',
      title: 'Cappuccino',
      text: 'Dignified and stylish ally with a flawless snowy coat and a passion for cozy winter snuggles.'
    },
  ]

  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={3}
        navigation={{
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        }}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {carouselList.map(
          (carousel: CarouselProps) =>
          <SwiperSlide key={carousel.id} className={styles.slide}>
            <CarouselItem
              image={carousel.image}
              title={carousel.title}
              text={carousel.text}
            />
          </SwiperSlide>
        )}
      </Swiper>
      <div className={`swiper-button-prev ${styles.prev}`}></div>
      <div className={`swiper-button-next ${styles.next}`}></div>
    </div>
  )
}

export default CarouselList
