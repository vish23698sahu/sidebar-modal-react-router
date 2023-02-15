import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../contextAPI/context'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""} `} >
    <div className='modal-container'>
      <h3>Modal Content</h3>
      <p>Click on close to close the Modal</p>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
