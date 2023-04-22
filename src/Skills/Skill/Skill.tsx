import React from 'react';
import styles from './Skill.module.css';

type propsType = {
    title: string,
    icon: string,
    description: string
}
export const Skill = ({title, description, icon}: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )
}

