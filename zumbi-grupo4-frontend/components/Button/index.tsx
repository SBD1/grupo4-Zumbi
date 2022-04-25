import React from 'react'
import styles from './styles.module.css'

interface buttonProps{
    color?: 'primary' | 'secondary',
    children: string,
    onclick?: (() => void) | undefined
    disabled?: boolean
}

export default function Button({color, children, onclick, disabled}:buttonProps) {
    return (
        <button disabled={disabled }onClick={onclick} className={styles.container} style={{backgroundColor: color==="primary"?"#F26D6D":"#BF6743"}}>
            {children}
        </button>
    )
}