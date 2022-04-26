import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { player, quadradoInfo as quadradoInfoInterface } from '../../interfaces'
import api from '../../pages/api/api'
import SmallButton from '../SmallButton'
import toast, { Toaster } from 'react-hot-toast'

interface props {
    quadradoInfo: quadradoInfoInterface,
    atualizarQuadrado: () => void,
    informacoesPlayer: player,
    quadradoId: Number,
    atacarZumbi: boolean,
    setAtacarZumbi: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Terminal({ quadradoInfo, atualizarQuadrado, informacoesPlayer, quadradoId, atacarZumbi, setAtacarZumbi }: props) {

    const [resumoLuta, setResumoLuta] = useState<string>('')
    const [danoRecebido, setDanoRecebido] = useState<Number>(0)
    const [morte, setMorte] = useState<boolean>(false)

    const pegarItens = async () => {
        await api.post('/quadrado/pega-todos-itens', {
            id_quadrado: quadradoId,
            id_bolsa: informacoesPlayer.bolsa
        }).then(() => toast.success('Itens adicionados a bolsa!'))
            .catch(() => toast.error("Erro ao adicionar os itens, tente novamente :("))
        atualizarQuadrado()
    }

    const pegarItem = async (id: Number) => {
        await api.post('/quadrado/pega-item', {
            id_bolsa: informacoesPlayer.bolsa,
            id_instancia_item: id
        }).then(() => toast.success('Item adicionado a bolsa!'))
            .catch(() => toast.error("Erro ao adicionar o item, tente novamente :("))
        atualizarQuadrado()
    }

    const pegarMoedas = async () => {
        await api.post('/quadrado/dinheiro-quadrado', {
            id_player: informacoesPlayer.id,
            id_quadrado: quadradoId
        }).then(() => toast.success('Moedas adicionadas a bolsa!'))
            .catch(() => toast.error("Erro ao adicionar as moedas, tente novamente :("))
        atualizarQuadrado()
    }

    const atacarZumbiFunc = async () => {
        if (Number(informacoesPlayer.dano) >= ((2.5 / Number(informacoesPlayer.velocidade)) * Number(quadradoInfo?.zumbi[0].dano))) {
            await api.post('/zumbi/matar', {
                id_player: informacoesPlayer.id,
                zumbi_id: quadradoInfo?.zumbi[0].instancia_zumbi_id,
                idNovoQuadrado: quadradoId
            }).then((res) => {
                console.log(res)
                setResumoLuta(`${quadradoInfo?.zumbi[0].tipoespecializacao} morto`)
                setTimeout(function () {
                    setAtacarZumbi(false)
                }, 5000);
            })
            .catch(() => toast.error("Erro ao matar zumbi, tente novamente :("))
            
        } else {
            setMorte(true)
            setResumoLuta('Você morreu')
            setTimeout(function () {
                setAtacarZumbi(false)
            }, 5000);
        }
        setDanoRecebido((Number(quadradoInfo?.zumbi[0].vida_atual)/Number(informacoesPlayer.dano))*0.4 * Number(quadradoInfo?.zumbi[0].dano))
    }

    useEffect(() => {
        if (atacarZumbi === true) {
            atacarZumbiFunc()
        }
    }, [atacarZumbi])

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
                            <>
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
                            </>
                        ) : null}
                        {quadradoInfo.moedas && quadradoInfo.moedas.length && quadradoInfo.moedas[0].qtd ? (
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
                                    <div key={`${value.id}-${index}`} className={styles.textBodyItemSolo}>
                                        <li key={`${value.id}-${index}`}>
                                            {value.nome}
                                        </li>
                                        <SmallButton onClick={()=>pegarItem(value.id)}>
                                            Pegar item
                                        </SmallButton>
                                    </div>
                                ))}
                                </ul>
                            </div>
                        ) : null}
                        {atacarZumbi &&
                            <div style={{textAlign: 'center'}}>
                                <p>{resumoLuta}</p>
                                {!morte && <p>{`você recebeu ${((Number(quadradoInfo?.zumbi[0].vida_atual) / Number(informacoesPlayer.dano)) - 1) * 0.4 * Number(quadradoInfo?.zumbi[0].dano)} de dano`}</p>}
                            </div>
                        }
                    </div>
                ) : null}
            </div>
            <Toaster/>
        </div>
    )
}