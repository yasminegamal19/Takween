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
                <h3>SAFE</h3>
                <p>
                  Advanced security in every transaction and product
                  authenticity.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.valueCard}>
                <i className="bi bi-gem"></i>
                <h3>ORIGINAL</h3>
                <p>
                  Hand-crafted artifacts that guarantee uniqueness and quality.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.valueCard}>
                <i className="bi bi-hourglass-split"></i>
                <h3>ANCIENT</h3>
                <p>
                  Bridging the gap between historical rituals and modern
                  lifestyle.
                </p>
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
            <h2 className="mt-4">THE RADIO EXPERIENCE</h2>
            <p className="text-white-50">
              Listen to the echoes of the past while you explore our collection.
            </p>
            <button className={styles.btnListen}>Tune In Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Landing);
