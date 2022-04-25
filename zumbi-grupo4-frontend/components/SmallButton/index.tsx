import React from 'react'
import styles from './styles.module.css'

interface buttonProps{
    color?: 'primary' | 'secondary',
    children: string,
    onClick: () => void
}

export default function SmallButton({color, children, onClick}:buttonProps) {
    return (
        <button className={styles.container} onClick={onClick} style={{backgroundColor: color==="primary"?"#F26D6D":"#BF6743"}}>
            {children}
        </button>
    )
}