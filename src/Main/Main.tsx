import React from 'react';
import styles from './Main.module.scss';
import styleContainer from './../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.texPhotoWrapper}>

                    <div className={styles.text}>
                        <div className={styles.nameText}>
                            <div>Ivan</div>
                            <div>Svitsich</div>
                        </div>
                        <div>I'am frontend developer</div>
                    </div>

                    <div className={styles.photo}>
                        {/*here my img*/}
                    </div>

                </div>
            </div>
        </div>
    )
}

