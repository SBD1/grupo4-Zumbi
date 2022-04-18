import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '../components/Button'
import MoveButton from '../components/MoveButton'
import Terminal from '../components/Terminal'
import styles from '../styles/home.module.css'

const Home: NextPage = () => {
  
  const [heroPositionX, setHeroPositionX] = useState(0)
  const [heroPositionY, setHeroPositionY] = useState(0)

  const positionX= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const positionY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  function moveRight() {
    if (heroPositionX < 20) {
      setHeroPositionX(heroPositionX+1)
    }
  }
  function moveLeft() {
    if (heroPositionX > 0) {
      setHeroPositionX(heroPositionX-1)
    }
  }

  function moveUp() {
    if (heroPositionY > 0) {
      setHeroPositionY(heroPositionY-1)
    }
  }

  function moveDown() {
    if (heroPositionY < 20) {
      setHeroPositionY(heroPositionY+1)
    }
  }

  return (
    <div className={styles.container}>

      <Terminal />

      {positionY.map((resx: number)=>
        <div className={styles.containerMap} >
          {positionX.map((resy: number) =>
            <div className={styles.divPositionMap}>
              {resx === heroPositionX && resy === heroPositionY? "P": null}
            </div>
          )}
        </div>
      )}
      
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
