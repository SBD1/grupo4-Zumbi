import React from 'react'
import styles from './styles.module.css'

interface MoveButtonProps{
    moveLeft: () => void,
    moveRight: () => void,
    moveUp: () => void,
    moveDown: () => void,
    disabledWait: boolean
}

export default function MoveButton({moveLeft, moveRight, moveUp, moveDown, disabledWait}:MoveButtonProps) {
    return (
        <div className={styles.container}>

            <button disabled={disabledWait} className={styles.buttonSize} onClick={moveUp}>
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0L27.8564 24H0.143594L14 0Z" fill="black"/>
                </svg>
            </button>

            <div className={styles.middleButtons}>

                <button disabled={disabledWait}  className={styles.buttonSize} onClick={moveLeft}>
                    <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14.5L24.75 0.210581L24.75 28.7894L0 14.5Z" fill="black"/>
                    </svg>
                </button>

                <div className={styles.divSize} />
                
                <button disabled={disabledWait}  className={styles.buttonSize} onClick={moveRight}>
                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 14.5L0 28.7894L0 0.210581L24 14.5Z" fill="black"/>
                    </svg>
                </button>

            </div>

            <button disabled={disabledWait}  className={styles.buttonSize} onClick={moveDown}>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 25L0.143593 0.25L27.8564 0.25L14 25Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}