/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useState, useEffect, SetStateAction } from 'react'
import Button from '../components/Button'
import MoveButton from '../components/MoveButton'
import Terminal from '../components/Terminal'
import styles from '../styles/home.module.css'
import api from './api/api'

interface quadrado {
  lado_leste: Number,
  lado_oeste: Number,
  lado_sul: Number,
  lado_norte: Number,
  id: Number
}

interface zumbi {
  instancia_zumbi_id: Number,
  vida_atual: Number,
  dinheiro: Number,
  tipoespecializacao: string
}

interface moedas {
  qtd: Number,
}

interface itens {
  id: Number,
  player: Number | null,
  bolsa: Number | null,
  quadrado: Number | null,
  id_item: Number,
  tipo_especializacao: string,
  nome: string,
  preco: Number | null
}

interface npcs {
  instancia_npc_id: Number,
  tipo_especializacao: string
}

interface quadradoInfo {
  zumbi: Array<zumbi>,
  moedas: Array<moedas>,
  itens: Array<itens>,
  npcs: Array<npcs>
}

const Home: NextPage = () => {
  
  const [heroPosition, setHeroPosition] = useState<Number>(0)
  const [zone, setZone] = useState<Array<quadrado>>([])
  const [quadradoInfo, setQuadradoInfo] = useState<quadradoInfo>({} as quadradoInfo)

  const [currentPosition, setCurrentPosition] = useState<quadrado>({
    lado_leste: 0,
    lado_oeste: 0,
    lado_sul: 0,
    lado_norte: 0,
    id: 0
  })

  const getZona = async () => {
    const response = await api.get('/quadrado/zona/1')
    console.log(response)
    setZone(response.data || [])
    setHeroPosition(response.data[0].id)
  }

  const getCurrentPosition = async () => {
    zone.some(value => {
      if (value.id === heroPosition) {
        setCurrentPosition(value)
        return true
      }
      return false
    })
    const response = await api.get(`/quadrado/${heroPosition}`)
    setQuadradoInfo(response.data)
  }

  useEffect(() => {
    console.log(quadradoInfo)
  }, [quadradoInfo])

  useEffect(() => {
    getZona()
  }, [])

  useEffect(() => {
    if (heroPosition) {
      getCurrentPosition()
    }
  }, [heroPosition])

  function moveRight() {
    if (currentPosition.lado_leste) {
      setHeroPosition(currentPosition.lado_leste)
    }
  }
  function moveLeft() {
    if (currentPosition.lado_oeste) {
      setHeroPosition(currentPosition.lado_oeste)
    }
  }

  function moveUp() {
    if (currentPosition.lado_norte) {
      setHeroPosition(currentPosition.lado_norte)
    }
  }

  function moveDown() {
    if (currentPosition.lado_sul) {
      setHeroPosition(currentPosition.lado_sul)
    }
  }

  return (
    <div className={styles.container}>
      <Terminal />
        <div  className={styles.containerMap} style={{gridTemplateColumns: `repeat(${Math.sqrt(zone.length)}, 1fr)`}}>
          {zone.map((res: any, index1: number) =>
            <div key={`${index1}${res}`} className={styles.divPositionMap}>
              {res.id === heroPosition ? "P" : null}
            </div>
          )}
        </div>
      
      <div className={styles.buttons}>
        <MoveButton moveLeft={moveLeft} moveRight={moveRight} moveDown={moveDown} moveUp={moveUp}/>
        <Button color="primary">
          Atacar
        </Button>
        <Button color="secondary">
          Recarregar
        </Button>
        <Button color="secondary">
          Pegar
        </Button>
      </div>
      
    </div>
  )
}

export default Home
