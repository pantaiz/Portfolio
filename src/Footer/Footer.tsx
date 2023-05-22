import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from "../common/styles/container.module.css";

type socialNetworkState = Array<{ icon: string, src: string }>
const socialNetworkState: socialNetworkState = [
    {icon: 'tg', src: '',},
    {icon: 'git', src: '',},
    {icon: 'codewars', src: '',},
]


export const Footer = () => {

    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.footer}`}>
                <h2>Ivan Svitsich</h2>
                <div className={styles.socialNetworkBlock}>
                    {socialNetworkState.map(s => <a href={s.src}>{s.icon}</a>)}
                </div>
            </div>
        </div>
    )
}

