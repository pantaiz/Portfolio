import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from './../common/styles/container.module.css'
import {Skill} from "./Skill/Skill";
import {v1} from "uuid";
import reactIcon from "../assets/img/iconskill/react.png"
import reduxIcon from "../assets/img/iconskill/redux.png"
import tsIcon from "../assets/img/iconskill/typescript.png"
import jsIcon from "../assets/img/iconskill/js.png"
import storybookIcon from "../assets/img/iconskill/storybook.png"
import gitIcon from "../assets/img/iconskill/git.png"
import MUIIcon from "../assets/img/iconskill/MUI.png"
import HTML from "../assets/img/iconskill/html.png"
import CSS from "../assets/img/iconskill/css.png"
import Rest from "../assets/img/iconskill/rest-api.png"
import unit from "../assets/img/iconskill/unit.png"
import ant from "../assets/img/iconskill/ant-design.png"
import {Title} from "../common/component/Title/Title";


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
                <Title title={'My Skills'}/>
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

