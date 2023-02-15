import React from 'react'
import { useGlobalContext } from '../contextAPI/context'


const ModalButton = () => {
    const { openModal } = useGlobalContext();

    return (
        <section className='container'>
            <button className='btn' onClick={openModal} >Show Modal</button>
        </section>
    )
}

export default ModalButton