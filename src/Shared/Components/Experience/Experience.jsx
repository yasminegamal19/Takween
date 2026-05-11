import { memo } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-book ${styles.icon}`}></i>
              <h3>Read</h3>
              <div className={styles.goldLine}></div>
              <p>The classic tactile experience of premium paper and ink.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-headphones ${styles.icon}`}></i>
              <h3>Listen</h3>
              <div className={styles.goldLine}></div>
              <p>Immersive audiobooks narrated by the finest voices.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.card}>
              <i className={`bi bi-eye ${styles.icon}`}></i>
              <h3>Watch</h3>
              <div className={styles.goldLine}></div>
              <p>Visual storytelling and interactive ancient scripts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Experience);

