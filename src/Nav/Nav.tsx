import React from 'react';
import {Link} from 'react-scroll';
import styles from './Nav.module.scss';

const pages = [
    {name: 'Главная', to: 'main', offset: 0, duration: 500},
    {name: 'Скиллы', to: 'skills', offset: -150, duration: 500},
    {name: 'Проекты', to: 'projects', offset: -80, duration: 500},
    {name: 'Контакты', to: 'contact', offset: -150, duration: 500},
]

export const Nav = () => {
    return (
        <div className={styles.nav}>
            {
                pages.map(page => {
                    return <Link activeClass={styles.active}
                          to={page.to}
                          spy={true}
                          smooth={true}
                          offset={page.offset}
                          duration={page.duration}
                    >
                        {page.name}
                    </Link>
                })

            }


        </div>
    )
}

