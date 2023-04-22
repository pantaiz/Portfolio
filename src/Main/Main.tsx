import React from 'react';
import styles from './Main.module.css';
import styleContainer from './../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hi text</span>
                    <h1>I am Ivan Svitsich</h1>
                    <p>I'am frontend developer</p>
                </div>
                <div className={styles.photo}>photo</div>
            </div>
        </div>
    )
}

