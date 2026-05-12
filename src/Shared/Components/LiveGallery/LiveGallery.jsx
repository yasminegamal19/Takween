import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LiveGallery.module.css";

const LiveGallery = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.combinedSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={styles.sectionTitle}>{t("liveGallery.title")}</h2>

          <p className={styles.sectionSub}>{t("liveGallery.subtitle")}</p>
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
                <span className={styles.badge}>{t("liveGallery.badge")}</span>

                <h3>{t("liveGallery.visualTitle")}</h3>

                <p>{t("liveGallery.visualDesc")}</p>
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
                  <h4 className="mb-1">{t("liveGallery.playing")}</h4>

                  <p className="text-white-50 mb-0 small">
                    {t("liveGallery.narrator")}
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
                  />
                ))}
              </div>

              <div className="mt-4 pt-3 border-top border-secondary">
                <p className="small text-muted">{t("liveGallery.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LiveGallery);
