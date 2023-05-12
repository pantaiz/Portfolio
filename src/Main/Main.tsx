import React from 'react';
import styles from './Main.module.css';
import styleContainer from './../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>

            <div className={styleContainer.container}>

                <div className={styles.text}>
                    <div className={styles.nameText}><div>Ivan</div> <div>Svitsich</div></div>
                    <p>I'am frontend developer</p>
                </div>
                <div className={styles.photo}>photo</div>
            </div>
        </div>
    )
}

