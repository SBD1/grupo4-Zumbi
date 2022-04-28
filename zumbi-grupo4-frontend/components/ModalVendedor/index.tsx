import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal';
import Button from '../Button';
import toast, { Toaster } from 'react-hot-toast';
import { produto } from '../../interfaces';
import SmallButton from '../SmallButton';

interface boolProps {
    openModal: boolean,
    closeModal: () => void,
    listaVendedor: Array<produto>
}

export default function ModalVendedor({ openModal, closeModal, listaVendedor}: boolProps) {
  
    return (
        <Modal isOpen={openModal} className={styles.container}>
            <div className={styles.bolsaTitle}>
                Vendedor
            </div>
            <div style={{overflowY: 'scroll', marginBottom: '2rem'}} >
                {listaVendedor.map((item, index) =>
                    <div className={styles.divButton}>
                        <div>
                            <button onClick={() => console.log('comprei')} key={index} className={styles.bolsaItem}>
                                {index + 1}. {item.nome}
                            </button>
                        </div>
                        <div className={styles.divDescription}>
                            <p><b>Preço:</b> {item.preco} moedas</p>
                            <p><b>Nome:</b> {item.nome}</p>
                            <p><b>Tipo de arma:</b> {item.tipo_especializacao}</p>
                            <SmallButton onClick={()=>console.log('comprar')}>
                                Comprar
                            </SmallButton>
                        </div>
                    </div>)
                }
            </div>

            <Button onclick={closeModal} color="secondary">
                Fechar
            </Button>
            <Toaster/>
        </Modal>
    )
}