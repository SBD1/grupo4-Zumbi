import React from 'react'
import styles from './styles.module.css'

interface buttonProps{
    color?: 'primary' | 'secondary',
    children: string,
    onclick?: (() => void) | undefined
}

export default function Button({color, children, onclick}:buttonProps) {
    return (
        <button onClick={onclick} className={styles.container} style={{backgroundColor: color==="primary"?"#F26D6D":"#BF6743"}}>
            {children}
        </button>
    )
}