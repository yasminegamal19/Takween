import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-book ${styles.icon}`}></i>

              <h3>{t("experience.readTitle")}</h3>

              <div className={styles.goldLine}></div>

              <p>{t("experience.readDesc")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-headphones ${styles.icon}`}></i>

              <h3>{t("experience.listenTitle")}</h3>

              <div className={styles.goldLine}></div>

              <p>{t("experience.listenDesc")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-play-circle ${styles.icon}`}></i>

              <h3>{t("experience.watchTitle")}</h3>

              <div className={styles.goldLine}></div>

              <p>{t("experience.watchDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
