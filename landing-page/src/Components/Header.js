import React from 'react'
import './Header.css'
import ModalForm from './ModalForm'
import { useModalForm } from '../Hooks/useModalForm'
import Form from './Form'

const Header = () => {
  const [isOpenModal1,openModal1,closeModal1 ] = useModalForm(false);

  return (
    <header>
        <div class="wrap-header">
            <a href="holajuniors.com" className='link-title'>Holajuniors.com</a>
            <button onClick={openModal1}>Email</button>
            <ModalForm isOpen={isOpenModal1} closeModal={closeModal1}>
              <Form/>
              
            </ModalForm>
        </div>
    </header>
  )
}

export default Header