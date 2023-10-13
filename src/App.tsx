import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/Modal'
import FaqList from './components/FaqList'
import CarouselList from './components/CarouselList'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="wrapper">
      <section className="content">
        <h2>Modal</h2>
        <Button label='open modal' size='large' primary onClick={() => setIsVisible(true)} />
        <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
          <div>Modal</div>
        </Modal>
      </section>
      <section className="content">
        <h2>Accordion</h2>
        <FaqList />
      </section>
      <section className="content">
        <h2>Carousel</h2>
        <CarouselList />
      </section>
    </div>
  )
}

export default App
