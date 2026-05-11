import { memo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./States.module.css";

const StatItem = ({ target, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 },
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; 
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className={styles.statBox} ref={countRef}>
      <h2 className={styles.counterNumber}>
        {count.toLocaleString()}
        {suffix}
      </h2>
      <p className={styles.counterLabel}>{label}</p>
    </div>
  );
};

const States = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.statsSection}>
      <div className={styles.bgDecoration}></div>
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-md-3 col-6">
            <StatItem
              target={15000}
              label={t("stats.happyClients", "Happy Clients")}
            />
          </div>
          <div className="col-md-3 col-6">
            <StatItem
              target={120}
              label={t("stats.artifacts", "Unique Artifacts")}
            />
          </div>
          <div className="col-md-3 col-6">
            <StatItem
              target={45}
              label={t("stats.countries", "Countries Reached")}
            />
          </div>
          <div className="col-md-3 col-6">
            <StatItem
              target={98}
              label={t("stats.satisfaction", "Success Rate")}
              suffix="%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(States);
