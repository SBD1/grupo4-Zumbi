/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { missao, player, produto, quadradoInfo as quadradoInfoInterface } from '../../interfaces'
import api from '../../pages/api/api'
import SmallButton from '../SmallButton'
import toast, { Toaster } from 'react-hot-toast'
import ModalVendedor from '../ModalVendedor'

interface props {
    quadradoInfo: quadradoInfoInterface,
    atualizarQuadrado: () => void,
    informacoesPlayer: player,
    quadradoId: Number,
    atacarZumbi: boolean,
    setAtacarZumbi: React.Dispatch<React.SetStateAction<boolean>>,
    openModalVendedor: boolean,
    setModalOpenVendedor: React.Dispatch<React.SetStateAction<boolean>>,
    getPlayer: () => void,
    setHeroPosition: (arg0 : Number) => void
}

export default function Terminal({ quadradoInfo, atualizarQuadrado, informacoesPlayer, quadradoId, atacarZumbi, setAtacarZumbi, openModalVendedor, setModalOpenVendedor, getPlayer, setHeroPosition }: props) {

    const [resumoLuta, setResumoLuta] = useState<string>('')
    const [danoRecebido, setDanoRecebido] = useState<Number>(0)
    const [morte, setMorte] = useState<boolean>(false)
    const [missoes, setMissoes] = useState<Array<missao>>([] as Array<missao>)
    const [missoesPlayer, setMissoesPlayer] = useState<Array<missao>>([] as Array<missao>)
    const [listaVendedor, setListaVendedor] = useState<Array<produto>>([])
    const [vidaPlayer, setVidaPlayer] = useState<Number>(informacoesPlayer.vida)

    const pegarItens = async () => {
        await api.post('/quadrado/pega-todos-itens', {
            id_quadrado: quadradoId,
            id_bolsa: informacoesPlayer.bolsa
        }).then(() => toast.success('Itens adicionados a bolsa!'))
            .catch(() => toast.error("Erro ao adicionar os itens, tente novamente :("))
        atualizarQuadrado()
    }

    const pegarItem = async (id: Number) => {
        await api.post('/bolsa/pega-item', {
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
        getPlayer()
    }

    const getMissoes = async () => {
        const response = await api.get('/missoes/1')
        setMissoesPlayer(response.data)
    }

    const atacarZumbiFunc = async () => {
        if (Number(informacoesPlayer.dano) >= 0.4 * (Number(quadradoInfo?.zumbi[0].dano))) {
            if ((Number(vidaPlayer) - ((Number(quadradoInfo?.zumbi[0].vida_atual) / Number(informacoesPlayer.dano)) - 1) * 0.4 * Number(quadradoInfo?.zumbi[0].dano)) > 0) {
                await api.post('/zumbi/matar', {
                    id_player: informacoesPlayer.id,
                    zumbi_id: quadradoInfo?.zumbi[0].instancia_zumbi_id,
                    idNovoQuadrado: quadradoId
                }).then((res) => {
                    console.log(res)
                    setVidaPlayer(Number(vidaPlayer) - ((Number(quadradoInfo?.zumbi[0].vida_atual) / Number(informacoesPlayer.dano)) - 1) * 0.4 * Number(quadradoInfo?.zumbi[0].dano))
                    setResumoLuta(`${quadradoInfo?.zumbi[0].tipoespecializacao} morto`)
                    setTimeout(function () {
                        setAtacarZumbi(false)
                    }, 5000);
                })
                    .catch(() => toast.error("Erro ao matar zumbi, tente novamente :("))
            } else {
                setMorte(true)
                setResumoLuta('Você morreu')
                setVidaPlayer(informacoesPlayer.vida)
                setHeroPosition(1)
                setTimeout(function () {
                    setAtacarZumbi(false)
                }, 5000);
            }
            
        } else {
            setMorte(true)
            setResumoLuta('Você morreu')
            setVidaPlayer(informacoesPlayer.vida)
            setHeroPosition(1)
            setTimeout(function () {
                setAtacarZumbi(false)
            }, 5000);
        }
        setDanoRecebido((Number(quadradoInfo?.zumbi[0].vida_atual)/Number(informacoesPlayer.dano))*0.4 * Number(quadradoInfo?.zumbi[0].dano))
    }

    const getNPC = async (id: Number) => {
        const response = await api.get('/npc/' + id)
        setListaVendedor(response.data.estoque)
        setMissoes(response.data.missoes)
        setModalOpenVendedor(true)
        atualizarQuadrado()
    }

    useEffect(() => {
        if (vidaPlayer === undefined) {
            setVidaPlayer(informacoesPlayer.vida)
        }
        console.log(informacoesPlayer.vida)
        if (atacarZumbi === true) {
            atacarZumbiFunc()
        }
    }, [atacarZumbi, informacoesPlayer])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Terminal
            </div>
            <div className={styles.body}>
                <div className={styles.textBody}>
                    - Você iniciou sua jornada contra os zumbis!
                </div>
                <div className={styles.textBodyInfo}>
                    <p><b>Nome: </b>{informacoesPlayer.nome}</p>
                    <p><b>Dinheiro: </b>{informacoesPlayer.dinheiro}</p>
                    <p><b>Vida: </b>{vidaPlayer}</p>
                    <p><b>Dano: </b>{informacoesPlayer.dano}</p>
                </div>

                {missoesPlayer && missoesPlayer.length ? (
                    <>
                        <div>
                            <div className={styles.textBody}>
                                Missões
                            </div>
                            <ul>
                            {missoesPlayer.map(value => (
                                <li key={`${value.titulo}`}>
                                    <div>
                                        {value.titulo}
                                    </div>
                                    <div>
                                        {value.descricao}
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </>
                ) : null}
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
                                            <SmallButton onClick={()=>{getNPC(value.instancia_npc_id)}}>
                                                {(value.tipo_especializacao === 'vendedor')?
                                                    'comprar':
                                                    'Pegar missão'
                                                }
                                            </SmallButton>
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
                                {!morte && <p>{`você recebeu ${Number(informacoesPlayer.vida)-Number(vidaPlayer)} de dano`}</p>}
                            </div>
                        }
                    </div>
                ) : null}
            </div>
            <Toaster />
            <ModalVendedor openModal={openModalVendedor} closeModal={() => setModalOpenVendedor(false)} missoes={missoes} listaVendedor={listaVendedor} informacoesPlayer={informacoesPlayer} quadradoInfo={quadradoInfo}/>
        </div>
    )
}