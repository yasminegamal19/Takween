import { memo, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hero = heroRef.current;
    const textGroup = textRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = hero;

      const xPos = (clientX - offsetWidth / 2) / 50;
      const yPos = (clientY - offsetHeight / 2) / 50;

      if (textGroup) {
        textGroup.style.transform = `translate(${-xPos}px, ${-yPos}px)`;
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className={styles.heroWrapper} id="home">
      <div className={styles.backgroundContainer}>
        <img
          src="/splahin 3.jpg"
          alt="The Alchemist Book"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div ref={textRef} className={`${styles.contentGroup} text-center`}>
          <span
            className={`${styles.signatureSeries} text-uppercase mb-3 d-block`}
          >
            {t("hero.signature")}
          </span>

          <h1 className={`${styles.mainTitle} mb-4`}>{t("hero.title")}</h1>

          <p className={`${styles.description} mx-auto mb-5 text-white-50`}>
            {t("hero.description")}
          </p>

          <div className="d-flex gap-4 justify-content-center">
            <button
              className={`btn ${styles.btnAcquire} text-uppercase`}
            >
              {t("hero.acquire")}
            </button>

            <button className={`btn ${styles.btnDetails} text-uppercase`}>
              {t("hero.details")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);