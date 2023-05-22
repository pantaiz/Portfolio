import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from "../common/styles/container.module.css";
import {ReactComponent as GitIcon} from '../assets/img/iconfooter/github.svg'
import {ReactComponent as CodewarsIcon} from '../assets/img/iconfooter/codewars.svg'
import {ReactComponent as LinkidnIcon} from '../assets/img/iconfooter/linkedn.svg'
import {ReactComponent as TelegramIcon} from '../assets/img/iconfooter/telegram.svg'
import {ReactComponent as EmailIcon} from '../assets/img/iconfooter/email.svg'

type socialNetworkState = Array<{ icon: string, href: string }>
/*const socialNetworkState: socialNetworkState = [
    {icon: githubIcon, href: 'https://github.com/pantaiz',},
    {icon: emailIcon, href: 'mailto:pantaiz@yandex.ru',},
    {icon: codewarsIcon ,href: 'https://www.codewars.com/users/pantaiz',},
    {icon: telegramIcon ,href: 'https://t.me/pantaiz',},
    {icon: linIcon ,href: 'https://www.linkedin.com/in/ivan-svitsich-87561a206/',},
]*/


export const Footer = () => {


    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.footer}`}>
                <div className={styles.socialNetworkBlock}>
                    <div className={styles.iconContainer}>
                        <GitIcon className={styles.icon}/>
                    </div>
                    <div className={styles.iconContainer}>
                        <CodewarsIcon className={styles.icon}/>
                    </div>
                    <div className={styles.iconContainer}>
                        <LinkidnIcon className={styles.icon}/>
                    </div>
                    <div className={styles.iconContainer}>
                        <EmailIcon className={styles.icon}/>
                    </div>
                    <div className={styles.iconContainer}>
                        <TelegramIcon className={styles.icon}/>
                    </div>
                    {/*   {socialNetworkState.map(s => <a className={styles.icon} href={s.href}>
                        <svg style={{width:'50px',height:'50px'}} src={s.icon}/>
                    </a>)}*/}
                </div>
            </div>
        </div>
    )
}

