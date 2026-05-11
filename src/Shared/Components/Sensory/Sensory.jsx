import { memo } from "react";
import styles from "./Sensory.module.css";

const Sensory = () => {
  return (
    <section className={styles.journeyWrapper}>
      <div className="container text-center mb-5">
        <h2 className={styles.goldTitle}>The Secrets of The Alchemist</h2>
      </div>

      <div className={styles.interactiveContainer}>
        <img
          src="/Rectangle 7.png"
          alt="Alchemist Detail"
          className={styles.mainImg}
        />

        <div className={`${styles.hotspot} ${styles.p1}`}>
          <div className={styles.pulse}></div>
          <div className={styles.tooltip}>Midnight Charcoal Leather</div>
        </div>

        <div className={`${styles.hotspot} ${styles.p2}`}>
          <div className={styles.pulse}></div>
          <div className={styles.tooltip}>Hand-poured Gold Detailing</div>
        </div>

        <div className={`${styles.hotspot} ${styles.p3}`}>
          <div className={styles.pulse}></div>
          <div className={styles.tooltip}>Ancient Ritual Essence</div>
        </div>
      </div>
    </section>
  );
};

export default memo(Sensory);
