/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import { useState, useEffect, SetStateAction } from 'react'
import Button from '../components/Button'
import MoveButton from '../components/MoveButton'
import Terminal from '../components/Terminal'
import styles from '../styles/home.module.css'
import api from './api/api'

const Home: NextPage = () => {
  
  const [heroPosition, setHeroPosition] = useState(0)
  const [zone, setZone] = useState([])
  const [currentPosition, setCurrentPosition] = useState({})

  const getZona = async () => {
    const response = await api.get('/quadrado/zona/1')
    console.log(response)
    setZone(response.data || [])
    setHeroPosition(response.data[0].id)
  }

  const getCurrentPosition = () => {
    zone.some(value => {
      if (value.id === heroPosition) {
        setCurrentPosition(value)
        return true
      }
      return false
    })
  }

  useEffect(() => {
    getZona()
  }, [])

  useEffect(() => {
    getCurrentPosition()
  }, [heroPosition])
  

  const positionX= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const positionY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
        <div  className={styles.containerMap} >
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
