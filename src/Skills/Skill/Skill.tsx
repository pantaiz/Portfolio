import React from 'react';
import styles from './Skill.module.scss';

type propsType = {
    title: string,
    icon: string,
}
export const Skill = ({title, icon}: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img  alt={title} src={icon}/>
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>

        </div>
    )
}

