import styles from './Buton.module.scss';

type BlackWhiteButtonProps={
    title:string,
    href:string,
    onClick?:()=>void
}

export const BlackWhiteButton = ({href,title,onClick}:BlackWhiteButtonProps) => {
    return(
        <div className={styles.buttonWrapper}>
        <a onClick={onClick} href={href} className={styles.blackWhite}>
            {title}
        </a></div>
    )
}