import React from 'react';
import styles from './Skill.module.css';

type propsType = {
    title: string,
    icon: string,
}
export const Skill = ({title, icon}: propsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}><img  alt={title} src={icon} style={{width:'50px',height:'50px'}}/></div>
            <h3 className={styles.skillTitle}>{title}</h3>
        </div>
    )
}

