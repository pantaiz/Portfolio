import React from 'react';
import styles from './Contact.module.css';
import styleContainer from './../common/styles/container.module.css'

export const Contact = () => {
    return (
        <div className={styles.mainBlock}>
                <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                    <h2 className={styles.title}>Contact</h2>
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

