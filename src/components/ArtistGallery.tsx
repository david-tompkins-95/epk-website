import styles from '../css/EpkContent.module.css'
import Image from 'next/image'

export default function ArtistGallery() {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.imageOne}>
                <Image width={400} height={400} src={'/images/jam1.jpeg'} alt={'bau1'}></Image>
            </div>
            <div className={styles.imageTwo}>
                <Image width={400} height={400} src={'/images/jam2.jpeg'} alt={'bau1'}></Image>
            </div>
        </div>

    )
}