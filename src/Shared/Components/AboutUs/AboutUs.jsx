import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div>
          <span className={styles.subTitle}>{t("about.subtitle")}</span>

          <h2 className={styles.mainTitle}>{t("about.title")}</h2>
        </div>

        <div className="row align-items-center text-start">
          <div className="col-lg-6 ps-lg-5 text-start">
            <p className={styles.description}>{t("about.description")}</p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-journal-richtext"></i>
                </div>

                <div>
                  <h4>{t("about.feature1Title")}</h4>
                  <p>{t("about.feature1Desc")}</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-mic-fill"></i>
                </div>

                <div>
                  <h4>{t("about.feature2Title")}</h4>
                  <p>{t("about.feature2Desc")}</p>
                </div>
              </div>
            </div>

            <button className={styles.btnDiscovery}>{t("about.button")}</button>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 text-center">
            <div className={styles.imageWrapper}>
              <div className={styles.experienceBadge}>
                <span>{t("about.since")}</span>
                <strong>2006</strong>
              </div>

              <img
                src="/Frame 10.png"
                alt="Takween Legacy"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUs);
