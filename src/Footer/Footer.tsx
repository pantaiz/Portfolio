import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from "../common/styles/container.module.css";
import {ReactComponent as GitIcon} from '../assets/img/iconfooter/github.svg'
import {ReactComponent as CodewarsIcon} from '../assets/img/iconfooter/codewars.svg'
import {ReactComponent as LinkidnIcon} from '../assets/img/iconfooter/linkedn.svg'
import {ReactComponent as TelegramIcon} from '../assets/img/iconfooter/telegram.svg'
import {ReactComponent as EmailIcon} from '../assets/img/iconfooter/email.svg'

type socialNetworkState = Array<{ icon: string, href: string }>



export const Footer = () => {


    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.footer}`}>
                <div className={styles.socialNetworkBlock}>
                    <a href={'https://github.com/pantaiz'}>
                        <div className={styles.iconContainer}>
                            <GitIcon className={styles.icon}/>
                        </div>
                    </a>
                    <a href={'https://www.codewars.com/users/pantaiz'}>
                        <div className={styles.iconContainer}>
                            <CodewarsIcon className={styles.icon}/>
                        </div>
                    </a>
                    <a href={'https://www.linkedin.com/in/ivan-svitsich-87561a206/'}>
                        <div className={styles.iconContainer}>
                            <LinkidnIcon className={styles.icon}/>
                        </div>
                    </a>
                    <a href={'mailto:pantaiz@yandex.ru'}>
                        <div className={styles.iconContainer}>
                            <EmailIcon className={styles.icon}/>
                        </div>
                    </a>
                    <a href={'https://t.me/pantaiz'}>
                        <div className={styles.iconContainer}>
                            <TelegramIcon className={styles.icon}/>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    )
}

