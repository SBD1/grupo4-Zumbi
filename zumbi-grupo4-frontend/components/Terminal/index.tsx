import React from 'react'
import styles from './styles.module.css'
import { player, quadradoInfo as quadradoInfoInterface } from '../../interfaces'
import api from '../../pages/api/api'
import SmallButton from '../SmallButton'

interface props {
    quadradoInfo: quadradoInfoInterface,
    atualizarQuadrado: () => void,
    informacoesPlayer: player,
    quadradoId: Number
}

export default function Terminal({ quadradoInfo, atualizarQuadrado, informacoesPlayer, quadradoId }: props) {

    const pegarItens = async () => {
        await api.post('/quadrado/pega-todos-itens', {
            id_quadrado: quadradoId,
            id_bolsa: informacoesPlayer.bolsa
        })
        atualizarQuadrado()
    }

    const pegarItem = async (id: Number) => {
        await api.post('/quadrado/pega-item', {
            id_bolsa: informacoesPlayer.bolsa,
            id_instancia_item: id
        })
        atualizarQuadrado()
    }

    const pegarMoedas = async () => {
        await api.post('/quadrado/dinheiro-quadrado', {
            id_player: informacoesPlayer.id,
            id_quadrado: quadradoId
        }).then((res) => {
            console.log(res)
        })
        atualizarQuadrado()
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Terminal
            </div>
            <div className={styles.body}>
                <div className={styles.textBody}>
                    - Você iniciou sua jornada contra os zumbis!
                </div>
                {quadradoInfo ? (
                    <div>
                        {quadradoInfo.zumbi && quadradoInfo.zumbi.length ? (
                            <div>
                                <div className={styles.textBody}>
                                    Zumbis
                                </div>
                                <ul>
                                {quadradoInfo.zumbi.map(value => (
                                    <li key={`${value.instancia_zumbi_id}`}>
                                        {value.tipoespecializacao}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ) : null}
                        {quadradoInfo.moedas && quadradoInfo.moedas.length ? (
                            <div>
                                <div className={styles.textBody}>
                                    Moedas
                                    <SmallButton onClick={pegarMoedas}>
                                        Pegar moedas
                                    </SmallButton>
                                </div>
                                <ul>
                                    {quadradoInfo.moedas.map((value, index) => (
                                        <li key={`${value.qtd}-${index}`}>
                                            {value.qtd}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        {quadradoInfo.npcs && quadradoInfo.npcs.length ? (
                            <div>
                                <div className={styles.textBody}>
                                    NPCs
                                </div>
                                <ul>
                                    {quadradoInfo.npcs.map((value, index) => (
                                        <li key={`${value.instancia_npc_id}-${index}`}>
                                            {value.tipo_especializacao}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        {quadradoInfo.itens && quadradoInfo.itens.length ? (
                            <div>
                                <div className={styles.textBody}>
                                    Itens
                                    <SmallButton onClick={pegarItens}>
                                        Pegar todos
                                    </SmallButton>
                                </div>
                                <ul>
                                    {quadradoInfo.itens.map((value, index) => (
                                    <div className={styles.textBodyItemSolo}>
                                        <li key={`${value.id}-${index}`}>
                                            {value.nome}
                                        </li>
                                        <SmallButton onClick={()=>pegarItem(value.id_item)}>
                                            Pegar item
                                        </SmallButton>
                                    </div>
                                ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    )
}