import ArtistTitle from "@/components/ArtistTitle";
import styles from "../css/Home.module.css"
import ArtistMusic from "@/components/ArtistMusic";
import ArtistBio from "@/components/ArtistBio";
import ArtistGallery from "@/components/ArtistGallery";

export default function Home() {
  return (
    <div className={styles.head}>
      <main className={styles.headContainer}>
        <div className={styles.titleContainer}>
            <ArtistTitle />
        </div>
        <div className={styles.bioContainer}>
            <ArtistBio />
        </div>
        <div className={styles.galleryContainer}>
            <ArtistGallery />
        </div>
        <div className={styles.musicContainer}>
            <ArtistMusic />
        </div>
      </main>
    </div>
  );
}
