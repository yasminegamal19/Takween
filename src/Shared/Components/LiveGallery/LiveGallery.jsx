import { memo } from "react";
import styles from "./LiveGallery.module.css";

const LiveGallery = () => {
  return (
    <section className={styles.combinedSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>The Alchemy Experience</h2>
          <p className={styles.sectionSub}>
            Witness the story, hear the legacy.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className={styles.videoCard}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-100 h-100 object-fit-cover"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className={styles.videoOverlay}>
                <span className={styles.badge}>LIVE VIEW</span>
                <h3>Visual Narrative</h3>
                <p>Cinematic scripts brought to life.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.playerWrapper}>
              <div className="d-flex align-items-center gap-4 mb-4">
                <div className={styles.playBtn}>
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <div>
                  <h4 className="mb-1">Listening to: The Alchemist</h4>
                  <p className="text-white-50 mb-0 small">
                    Narrated by Dr. Amira K. Hassan
                  </p>
                </div>
              </div>

              <div className={styles.waveform}>
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      height: `${Math.random() * 30 + 10}px`, 
                    }}
                  ></div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-top border-secondary">
                <p className="small text-muted">
                  Experience our "Radio" mode for immersive storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LiveGallery);
