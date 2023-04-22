import React from 'react';
import styles from './Skills.module.css';
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./Skill/Skill";
import {v1} from "uuid";

type TempInitialSkilStateType = Array<{ title: string, icon: string, description: string }>
const TempInitialSkilState: TempInitialSkilStateType = [
    {title: 'HTML', icon: 'icon', description: 'description'},
    {title: 'CSS', icon: 'icon', description: 'description'},
    {title: 'React', icon: 'icon', description: 'description'},
    {title: 'React', icon: 'icon', description: 'description'},
    {title: 'React', icon: 'icon', description: 'description'},
    {title: 'React', icon: 'icon', description: 'description'},
    {title: 'Redux', icon: 'icon', description: 'description'}]
export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills</h2>

                <div className={styles.skills}>
                    {TempInitialSkilState.map(s =>
                        <Skill key={v1()}
                               title={s.title}
                               description={s.description}
                               icon={s.icon}
                        />)}
                </div>

            </div>
        </div>
    )
}

