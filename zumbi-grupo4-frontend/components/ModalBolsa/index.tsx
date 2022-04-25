import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Modal from 'react-modal';
import Button from '../Button';
import { player, itens } from '../../interfaces';
import api from '../../pages/api/api';

interface boolProps {
    openModal: boolean,
    closeModal: () => void
}


export default function ModalBolsa({ openModal, closeModal }: boolProps) {
    
    const [playerInfo, setPlayerInfo] = useState<player>({} as player)
    const [bolsaInfo, setBolsaInfo] = useState<Array<itens>>([])
    const [itemInfo, setItemInfo] = useState<boolean>(false)

    const getPlayer = async () => {
        const response = await api.get('/player/1')
        setPlayerInfo(response.data?.[0] || [])
    }

    const getBolsaItens = async () => {
        const response = await api.get(`bolsa/${playerInfo.bolsa}`)
        setBolsaInfo(response.data || [])
    }

    useEffect(() => {
        getPlayer()
        getBolsaItens()
    }, [])
    
    return (
        <Modal isOpen={openModal} className={styles.container}>
            <div className={styles.bolsaTitle}>
                Bolsa
            </div>

            <div className={styles.bolsaItens}>
                {bolsaInfo.map((item, index) =>
                    <div className={styles.divButton}>
                        <button onClick={() => setItemInfo(!itemInfo)} key={index} className={styles.bolsaItem}>
                            {index + 1}. {item.nome}
                        </button>
                        {itemInfo && <div className={styles.divDescription}>
                            <p><b>Preço:</b> {item.preco} moedas</p>
                            <p><b>Tipo de arma:</b> {item.tipo_especializacao}</p>
                        </div>}
                    </div>
                )}
            </div>

            <Button onclick={closeModal} color="secondary">
                Fechar
            </Button>
        </Modal>
    )
}