import styles from './_carouselItem.module.scss'

type CarouselProps = {
  image: string
  title: string
  text: string
}

const CarouselItem = ({ image, title, text }: CarouselProps) => {
  return (
    <div className={styles.item}>
      <img src={image} alt="title" />
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default CarouselItem
