import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github/ldunhao.png" alt="Lucas Dunhão"/>

            <div>
                <strong>Lucas Dunhão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    level 1
                </p>
            </div>

        </div>
    );
}