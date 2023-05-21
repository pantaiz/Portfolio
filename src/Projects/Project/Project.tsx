import React from 'react';
import styles from './Project.module.css';

export type ProjectType = {
    title: string,
    img: string,
    description: string
    url: string
}
export const Project = ({title, description, img, url}: ProjectType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer} style={{backgroundImage:`url(${img})`}}>
                <a href={url}>Click me</a>
            </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )
}
