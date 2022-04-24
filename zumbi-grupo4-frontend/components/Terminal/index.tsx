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
                    <div className={styles.textBody}>
                        {quadradoInfo.zumbi && quadradoInfo.zumbi.length ? (
                            <div>
                                <div>
                                    Zumbis no quadrado!
                                </div>
                                {quadradoInfo.zumbi.map(value => (
                                    <p key={`${value.instancia_zumbi_id}`}>
                                        {value.tipoespecializacao}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                        {quadradoInfo.moedas && quadradoInfo.moedas.length ? (
                            <div>
                                <div>
                                    Moedas no quadrado!
                                </div>
                                {quadradoInfo.moedas.map((value, index) => (
                                    <p key={`${value.qtd}-${index}`}>
                                        {value.qtd}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                        {quadradoInfo.npcs && quadradoInfo.npcs.length ? (
                            <div>
                                <div>
                                    NPCs no quadrado!
                                </div>
                                {quadradoInfo.npcs.map((value, index) => (
                                    <p key={`${value.instancia_npc_id}-${index}`}>
                                        {value.tipo_especializacao}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                        {quadradoInfo.itens && quadradoInfo.itens.length ? (
                            <div>
                                <div>
                                    Itens no quadrado!
                                </div>
                                {quadradoInfo.itens.map((value, index) => (
                                    <p key={`${value.id}-${index}`}>
                                        {value.nome}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    )
}