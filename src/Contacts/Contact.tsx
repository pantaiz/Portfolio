import React from 'react';
import styles from './Contact.module.scss';
import styleContainer from './../common/styles/container.module.css'
import {Title} from "../common/component/Title/Title";

export const Contact = () => {
    return (
        <div className={styles.mainBlock}  id={'contact'}>
                <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                    <Title title={'Contact'}/>
                    <form className={styles.form}>
                        <label>Send me:</label>
                        <input placeholder={'email'} type="text" name="email"/>
                        <input placeholder={'name'} type="text" name="name"/>
                        <textarea placeholder={'type you message'}  className={styles.contactTextarea} name="name"/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
        </div>
    )
}

