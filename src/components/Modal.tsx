import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './_modal.module.scss'

type ModalProps = {
  isVisible: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  const containerVariants = {
    end: {
      opacity: 0,
    },
    start: {
      opacity: 1,
    },
  }

  const modalVariants = {
    end: {
      y: 50
    },
    start: {
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          className={styles.container}
          initial="end"
          whileInView="start"
          exit="end"
          variants={containerVariants}
        >
          <div className={styles.overlay} onClick={onClose} />
          <motion.div
            className={styles.modal}
            initial="end"
            whileInView="start"
            exit="end"
            variants={modalVariants}
          >
            <div className={styles.close} onClick={onClose} />
            {children}
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
