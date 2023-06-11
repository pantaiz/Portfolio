import React from 'react';
import styles from './Project.module.scss';
import {BlackWhiteButton} from "../../common/component/Button/Button";

export type ProjectType = {
    title: string,
    img: string,
    description: string
    url: string
}
export const Project = ({title, description, img, url}: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer} style={{backgroundImage: `url(${img})`}}>
            </div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
            <div className={styles.button}><BlackWhiteButton title={'Watch'} href={url}/></div>
        </div>
    )
}
