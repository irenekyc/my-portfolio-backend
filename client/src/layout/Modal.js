import React from 'react'
import ModalMenu from '../components/ModalMenu'
import ModalPortfolio from '../components/ModalPortfolio'
const Modal = ()=>{
    return(
        <section className="modal" id="modal">
            <ModalMenu />
            <ModalPortfolio />
        </section>
    )
}

export default Modal