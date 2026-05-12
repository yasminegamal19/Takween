import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Landing.module.css";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.valuesSection}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className={styles.valueCard}>
                <i className="bi bi-shield-check"></i>

                <h3>{t("landing.safeTitle")}</h3>

                <p>{t("landing.safeDesc")}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.valueCard}>
                <i className="bi bi-book"></i>

                <h3>{t("landing.originalTitle")}</h3>

                <p>{t("landing.originalDesc")}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={styles.valueCard}>
                <i className="bi bi-headphones"></i>

                <h3>{t("landing.audioTitle")}</h3>

                <p>{t("landing.audioDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.radioSection}>
        <div className={styles.radioOverlay}>
          <div className="text-center">
            <div className={styles.pulseDisk}>
              <i className="bi bi-broadcast"></i>
            </div>

            <h2 className="mt-4">{t("landing.radioTitle")}</h2>

            <p className="text-white-50">{t("landing.radioDesc")}</p>

            <button className={styles.btnListen}>
              {t("landing.radioBtn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Landing);
