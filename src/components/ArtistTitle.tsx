import styles from '../css/EpkContent.module.css'

export default function ArtistTitle() {
    return (
        <div className={styles.textContainer}>
            <div>
                <text className={styles.artistWelcome}>
                    Introducing
                </text>
            </div>
                <text className={styles.artistName}>
                    Jamsheddy
                </text>
        </div>

    )
}