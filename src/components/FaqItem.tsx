import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './_faqItem.module.scss'

type FaqProps = {
  question: string
  answer: string
}

const FaqItem = ({ question, answer }: FaqProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleFaq = () => setIsVisible(!isVisible)

  const answerVariants = {
    open: {
      opacity: 1,
      height: 'auto'
    },
    collapsed: {
      opacity: 0,
      height: 0
    }
  }


  return (
    <li className={styles.item}>
      <div className={`${styles.question} ${styles[isVisible ? 'open' : '']}`} onClick={toggleFaq}>
        <p>{question}</p>
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.answer}
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={answerVariants}
            transition={{ duration: 0.2 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default FaqItem
