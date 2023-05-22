import React from 'react';
import styles from './Projects.module.scss';
import styleContainer from './../common/styles/container.module.css'
import {Project, ProjectType} from "./Project/Project";
import {v1} from "uuid";
import todoIMG from "../assets/img/project/todolist.png"
import socialIMG from "../assets/img/project/socialNetwork.png"
import tetrisIMG from "../assets/img/project/tetris.jpg"
import mapSVG from "../assets/img/project/map2k.png"
import {Title} from "../common/component/Title/Title";

type TempInitialSkilStateType = Array<ProjectType>
const TempInitialSkilState: TempInitialSkilStateType = [
    {title: 'Todolist', img: todoIMG, description: 'description', url: 'https://github.com/pantaiz/todolist'},
    {title: 'Social Network', img: socialIMG, description: 'description', url: 'https://github.com/pantaiz/samurai-way'},
    {title: 'Tetris', img: tetrisIMG, description: 'description', url: 'https://pantaiz.github.io/tetris/'},
    {title: 'Search Map', img:mapSVG, description: 'description', url: 'http://x29206hr.beget.tech/'},
]
export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'My Projects'}/>

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

