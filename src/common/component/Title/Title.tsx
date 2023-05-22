import React from 'react';
import styles from './Title.module.scss';


type TitlePropsType = {
    title: string
}

export const Title = ({title}: TitlePropsType) => {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>
                {title}
            </h2>
        </div>
    )

}