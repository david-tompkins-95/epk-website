import ArtistTitle from "@/components/ArtistTitle";
import styles from "../css/Home.module.css"
import ArtistMusic from "@/components/ArtistMusic";

export default function Home() {
  return (
    <div className={styles.head}>
      <main className={styles.headContainer}>
        <div className={styles.titleContainer}>
            <ArtistTitle />
        </div>
        <div className={styles.musicContainer}>
            <ArtistMusic />
        </div>
      </main>
    </div>
  );
}
