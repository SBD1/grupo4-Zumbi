import React from 'react'
import styles from './styles.module.css'

export default function Terminal() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Terminal
            </div>
            <div className={styles.body}>
                <div className={styles.textBody}>
                    - Você iniciou sua jornada contra os zumbis!
                </div>
            </div>
        </div>
    )
}