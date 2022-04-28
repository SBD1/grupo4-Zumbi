import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal';
import Button from '../Button';
import { player, itens } from '../../interfaces';
import api from '../../pages/api/api';
import SmallButton from '../SmallButton';
import toast, { Toaster } from 'react-hot-toast';

interface boolProps {
    openModal: boolean,
    closeModal: () => void,
    heroPosition: Number,
    informacoesPlayer: player,
    atualizarQuadrado: () => void
}


export default function ModalBolsa({ openModal, closeModal, heroPosition, informacoesPlayer, atualizarQuadrado}: boolProps) {
    
    const [bolsaInfo, setBolsaInfo] = useState<Array<itens>>([])
    const [itemInfo, setItemInfo] = useState<boolean>(false)

    const getBolsaItens = async () => {
        const response = await api.get(`bolsa/${informacoesPlayer.bolsa}`)
        setBolsaInfo(response.data)
    }

    const droparItem = async (id_item: Number) => {
        await api.post('/item/dropar', {
            item_id: id_item,
            quadrado_id: heroPosition
        }).then(() => toast.success('Item dropado com sucesso!'))
        .catch(() => toast.error("Erro ao dropar o item, tente novamente :("))
        
        getBolsaItens()
        atualizarQuadrado()
    }

    useEffect(() => {
        getBolsaItens()
    }, [openModal])
    
    return (
        <Modal isOpen={openModal} className={styles.container}>
            <div className={styles.bolsaTitle}>
                Bolsa
            </div>

            <div className={styles.bolsaItens}>
                {bolsaInfo !== null ? 
                bolsaInfo.map((item, index) =>
                    <div className={styles.divButton}>
                        <div >
                            <button onClick={() => setItemInfo(!itemInfo)} key={index} className={styles.bolsaItem}>
                                {index + 1}. {item.nome}
                            </button>
                        </div>
                        {itemInfo && <div className={styles.divDescription}>
                            <p><b>Preço:</b> {item.preco} moedas</p>
                            <p><b>Tipo de arma:</b> {item.tipo_especializacao}</p>
                            <SmallButton onClick={()=>droparItem(item.id)}>
                                Dropar item
                            </SmallButton>
                        </div>}
                    </div>
                ): <div>Sua bolsa está vazia</div>}
            </div>

            <Button onclick={closeModal} color="secondary">
                Fechar
            </Button>
            <Toaster/>
        </Modal>
    )
}