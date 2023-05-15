import React from 'react';
import styles from './Skills.module.css';
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./Skill/Skill";
import {v1} from "uuid";
import reactIcon from "../common/assets/img/iconskill/react.png"
import reduxIcon from "../common/assets/img/iconskill/redux.png"
import tsIcon from "../common/assets/img/iconskill/typescript.png"
import jsIcon from "../common/assets/img/iconskill/js.png"
import storybookIcon from "../common/assets/img/iconskill/storybook.png"
import gitIcon from "../common/assets/img/iconskill/git.png"
import MUIIcon from "../common/assets/img/iconskill/MUI.png"
import HTML from "../common/assets/img/iconskill/html.png"
import CSS from "../common/assets/img/iconskill/css.png"
import Rest from "../common/assets/img/iconskill/rest-api.png"
import unit from "../common/assets/img/iconskill/unit.png"
import ant from "../common/assets/img/iconskill/ant-design.png"


type TempInitialSkilStateType = Array<{ title: string, icon: string }>
const TempInitialSkilState: TempInitialSkilStateType = [
    {title: 'HTML', icon: HTML, },
    {title: 'CSS', icon: CSS, },
    {title: 'React', icon: reactIcon},
    {title: 'Redux', icon: reduxIcon, },
    {title: 'TypeScript', icon: tsIcon, },
    {title: 'JavaScript', icon: jsIcon, },
    {title: 'Storybook', icon: storybookIcon, },
    {title: 'GIT', icon: gitIcon, },
    {title: 'MUI', icon: MUIIcon, },
    {title: 'Rest API', icon: Rest, },
    {title: 'Unit tests', icon: unit, },
    {title: 'Ant Design', icon: ant, },
]
export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My Skills</h2>

                <div className={styles.skills}>
                    {TempInitialSkilState.map(s =>
                        <Skill key={v1()}
                               title={s.title}
                               icon={s.icon}
                        />)}
                </div>

            </div>
        </div>
    )
}

