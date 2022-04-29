import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal';
import Button from '../Button';
import toast, { Toaster } from 'react-hot-toast';
import { missao, player, produto, quadradoInfo as quadradoInfoInterface } from '../../interfaces';
import SmallButton from '../SmallButton';
import api from '../../pages/api/api';

interface boolProps {
    openModal: boolean,
    closeModal: () => void,
    listaVendedor: Array<produto>,
    informacoesPlayer: player,
    quadradoInfo: quadradoInfoInterface,
    missoes: Array<missao>
}

export default function ModalVendedor({ openModal, closeModal, listaVendedor, informacoesPlayer, quadradoInfo, missoes}: boolProps) {
    
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

    const pegarMissao = async (id: Number) => {
        await api.post('/npc/nova-missao', {
            id_npc: quadradoInfo?.npcs[0]?.instancia_npc_id,
            id_player: informacoesPlayer.id
        }).then((res) => {
            if (res.data.message === "Ocorreu um erro ao tentar comprar item") {
                toast.error("Erro ao comprar o item, tente novamente :(")
            } else {
                toast.success('Nova missão!')
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
                    <div key={`${item.id_item}-${index}`} className={styles.divButton}>
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
                {missoes.map((item, index) =>
                    <div key={`${item.id}-${index}`} className={styles.divButton}>
                        <div>
                            <button onClick={() => console.log('comprei')} key={index} className={styles.bolsaItem}>
                                {index + 1}. {item.titulo}
                            </button>
                        </div>
                        <div className={styles.divDescription}>
                            <p><b>Preço:</b> {item.descricao} moedas</p>
                            <p><b>Nome:</b> {item.titulo}</p>
                            <SmallButton onClick={()=>pegarMissao(item.id)}>
                                Pegar missão
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