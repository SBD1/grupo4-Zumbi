import React from 'react'
import styles from './styles.module.css'

interface buttonProps{
    color?: 'primary' | 'secondary',
    children: string
}

export default function Button({color, children}:buttonProps) {
    return (
        <button className={styles.container} style={{backgroundColor: color==="primary"?"#F26D6D":"#BF6743"}}>
            {children}
        </button>
    )
}