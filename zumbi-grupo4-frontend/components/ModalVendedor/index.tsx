import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal';
import Button from '../Button';
import toast, { Toaster } from 'react-hot-toast';
import { player, produto, quadradoInfo as quadradoInfoInterface } from '../../interfaces';
import SmallButton from '../SmallButton';
import api from '../../pages/api/api';

interface boolProps {
    openModal: boolean,
    closeModal: () => void,
    listaVendedor: Array<produto>,
    informacoesPlayer: player,
    quadradoInfo: quadradoInfoInterface
}

export default function ModalVendedor({ openModal, closeModal, listaVendedor, informacoesPlayer, quadradoInfo}: boolProps) {
    
    const comprarItem = async (id_item: Number) => {
        await api.post('/npc/comprar', {
            item_id: id_item,
            id_player: informacoesPlayer.id,
            id_vendedor: quadradoInfo?.npcs[0]?.instancia_npc_id
        }).then((res) => {
            if (res.data.message === "Ocorreu um erro ao tentar comprar item") {
                toast.error("Erro ao comprar o item, tente novamente :(")
            } else {
                toast.success('Compra realizada com sucesso!')
            }
            console.log(res)
        })
        .catch(() => toast.error("Erro ao comprar o item, tente novamente :("))
        
    }
  
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
                            <SmallButton onClick={()=>comprarItem(item.id_item)}>
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