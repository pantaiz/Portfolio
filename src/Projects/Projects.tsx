import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/container.module.css'
import {Project, ProjectType} from "./Project/Project";
import {v1} from "uuid";

type TempInitialSkilStateType = Array<ProjectType>
const TempInitialSkilState: TempInitialSkilStateType = [
    {title: 'HTML', img: 'icon', description: 'description', url: ''},
    {title: 'HTML', img: 'icon', description: 'description', url: ''},
]
export const Projects = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills</h2>

                <div className={styles.skills}>
                    {TempInitialSkilState.map(s =>
                        <Project key={v1()}
                                 title={s.title}
                                 description={s.description}
                                 img={s.img}
                                 url={s.url}
                        />)}
                </div>

            </div>
        </div>
    )
}

