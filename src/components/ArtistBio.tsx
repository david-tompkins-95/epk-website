import styles from '../css/EpkContent.module.css'
import TextFieldLoader from './TextFieldLoader'

export default function ArtistBio() {
    return (
        <div className={styles.bioContainer}>
          <div className={styles.bioTextBox}>
            <div className={styles.bioText}>
              <TextFieldLoader/>
            </div>
          </div>
        </div>
    )
}