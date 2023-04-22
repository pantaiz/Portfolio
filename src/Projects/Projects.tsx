import React from 'react';
import styles from './Projects.module.css';
import styleContainer from './../common/styles/container.module.css'
import {Project, ProjectType} from "./Project/Project";
import {v1} from "uuid";

type TempInitialSkilStateType = Array<ProjectType>
const TempInitialSkilState: TempInitialSkilStateType = [
    {title: 'todolist', img: 'icon', description: 'description', url: 'https://pantaiz.github.io/samurai-way/'},
    {title: 'social network', img: 'icon', description: 'description', url: 'https://pantaiz.github.io/todolist/'},
    {title: 'counter', img: 'icon', description: 'description', url: 'https://pantaiz.github.io/Counter/'},
]
export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My Projects</h2>

                <div className={styles.projects}>
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

