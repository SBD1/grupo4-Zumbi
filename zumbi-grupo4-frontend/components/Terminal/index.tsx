import React from 'react'
import styles from './styles.module.css'
import { quadradoInfo as quadradoInfoInterface } from '../../interfaces'

interface props {
    quadradoInfo: quadradoInfoInterface
}

export default function Terminal({ quadradoInfo }: props) {
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
                                </div>
                                <ul>
                                {quadradoInfo.itens.map((value, index) => (
                                    <li key={`${value.id}-${index}`}>
                                        {value.nome}
                                    </li>
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