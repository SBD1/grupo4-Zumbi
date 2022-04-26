/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useState, useEffect, SetStateAction } from 'react'
import Button from '../components/Button'
import MoveButton from '../components/MoveButton'
import Terminal from '../components/Terminal'
import styles from '../styles/home.module.css'
import api from './api/api'
import { player, quadrado, quadradoInfo } from '../interfaces'
import ModalBolsa from '../components/ModalBolsa'

const Home: NextPage = () => {
  
  const [heroPosition, setHeroPosition] = useState<Number>(0)
  const [zone, setZone] = useState<Array<quadrado>>([])
  const [quadradoInfo, setQuadradoInfo] = useState<quadradoInfo>({} as quadradoInfo)
  const [playerInfo, setPlayerInfo] = useState<player>({} as player)
  const [disabledMove, setDesabledMove] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [atacarZumbi, setAtacarZumbi] = useState<boolean>(false)

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
    setDesabledMove(false)
  }

  const getPlayer = async () => {
    const response = await api.get('/player/1')
    setPlayerInfo(response.data?.[0] || [])
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  useEffect(() => {
    console.log( quadradoInfo)
  }, [quadradoInfo])

  useEffect(() => {
    getZona()
  }, [])

  useEffect(() => {
    getPlayer()
  }, [])

  useEffect(() => {
    if (heroPosition) {
      getCurrentPosition()
    }
  }, [heroPosition])

  function moveRight() {
    if (currentPosition.lado_leste) {
      setHeroPosition(currentPosition.lado_leste)
      setDesabledMove(true)
    }
  }
  function moveLeft() {
    if (currentPosition.lado_oeste) {
      setHeroPosition(currentPosition.lado_oeste)
      setDesabledMove(true)
    }
  }

  function moveUp() {
    if (currentPosition.lado_norte) {
      setHeroPosition(currentPosition.lado_norte)
      setDesabledMove(true)
    }
  }

  function moveDown() {
    if (currentPosition.lado_sul) {
      setHeroPosition(currentPosition.lado_sul)
      setDesabledMove(true)
    }
  }

  return (
    <div className={styles.container}>
      <Terminal
        quadradoInfo={quadradoInfo}
        quadradoId={heroPosition}
        atualizarQuadrado={getCurrentPosition}
        informacoesPlayer={playerInfo}
        atacarZumbi={atacarZumbi}
        setAtacarZumbi={setAtacarZumbi}
      />
        <div  className={styles.containerMap} style={{gridTemplateColumns: `repeat(${Math.sqrt(zone.length)}, 1fr)`}}>
          {zone.map((res: any, index1: number) =>
            <div key={`${index1}${res}`} className={styles.divPositionMap}>
              {res.id === heroPosition ? "P" : null}
            </div>
          )}
        </div>

      <div className={styles.buttons}>
        <MoveButton moveLeft={moveLeft} moveRight={moveRight} moveDown={moveDown} moveUp={moveUp} disabledWait={disabledMove}/>
        <Button disabled={quadradoInfo?.zumbi?.length === 0} onclick={()=> setAtacarZumbi(true)} color="primary" >
          Atacar
        </Button>
        <Button onclick={()=>setModalOpen(true)} color="primary">
          Bolsa
        </Button>
        <Button color="secondary">
          Recarregar
        </Button>
      </div>
      
      <ModalBolsa openModal={modalOpen} closeModal={closeModal}/>
    </div>
  )
}

export default Home
