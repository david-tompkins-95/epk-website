import styles from '../css/EpkContent.module.css'

export default function ArtistMusic() {
  return (
    <div  className={styles.mainMusic}>
      <div className={styles.musicContainer}>
        <div className={styles.sampleOne}>
          <iframe width="100%" height="166" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2090542089&color=%238d00ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
          <div className={styles.scFirstDiv}>
            <a href="https://soundcloud.com/jamsheddy" title="Jamsheddy" target="_blank" className={styles.scArtistLink}>
              Jamsheddy
            </a>
            · <a href="https://soundcloud.com/jamsheddy/rozz-is-still-lost-in-wonderland" title="Melodic Mondays Ep. 01: Rozz is Still Lost in Wonderland" target="_blank">
              Melodic Mondays Ep. 01: Rozz is Still Lost in Wonderland
            </a>
          </div>
        </div>
        <div className={styles.sampleOne}>
          <iframe width="100%" height="166" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2147489847&color=%238d00ff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
          <div className={styles.scFirstDiv}>
            <a href="https://soundcloud.com/jamsheddy" title="Jamsheddy" target="_blank" className={styles.scArtistLink}>
              Jamsheddy
            </a>
            · <a href="https://soundcloud.com/jamsheddy/ep-11-live-opening-set-for" title="Melodic Mondays Ep. 11: Live Opening Set for Marsh at Bauhaus Houston (08-02-2025)" target="_blank">
              Melodic Mondays Ep. 11: Live Opening Set for Marsh at Bauhaus Houston (08-02-2025)
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sampleTwo}>
        <iframe width="100%" height="166" allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1862575047&color=%2306056a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
        <div className={styles.scFirstDiv}>
          <a href="https://soundcloud.com/jamsheddy" title="Jamsheddy" target="_blank" className={styles.scArtistLink}>
            Jamsheddy
          </a>
          · <a href="https://soundcloud.com/jamsheddy/opening-support-for-grum-bauhaus-houston-06-15-2024" title="Opening Support Live Set for Grum - Bauhaus Houston (06-15-2024)" target="_blank">
            Opening Support Live Set for Grum - Bauhaus Houston (06-15-2024)
          </a>
        </div>
      </div>
    </div>
  )
}