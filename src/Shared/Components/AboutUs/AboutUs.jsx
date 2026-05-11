import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutSection} id="about-us">
      <div className="container">
        <div >
          <span className={styles.subTitle}>تكوين | Takween</span>
          <h2 className={styles.mainTitle}>حيث يلتقي الحبر بالصدى</h2>
        </div>
        <div className="row align-items-center text-start">
          <div className="col-lg-6 ps-lg-5 text-start">
            <p className={styles.description}>
              في <strong>تكوين</strong>، نؤمن أن الكتاب ليس مجرد صفحات ورقية، بل
              هو إرث حي يُقرأ، يُسمع، ويُعاش. انطلقنا بهدف إعادة صياغة التجربة
              الأدبية لتناسب حواس القارئ المعاصر.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <div>
                  <h4>إرث ورقي </h4>
                  <p>
                    إصدارات فاخرة تحتفي بملمس الورق وجودة الطباعة التقليدية.
                  </p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i className="bi bi-mic-fill"></i>
                </div>
                <div>
                  <h4>صدى الخيميائي </h4>
                  <p>تجارب سمعية غامرة تحول النصوص إلى رحلات صوتية ساحرة.</p>
                </div>
              </div>
            </div>

            <button className={styles.btnDiscovery}>اكتشف عالمنا</button>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 text-center">
            <div className={styles.imageWrapper}>
              <div className={styles.experienceBadge}>
                <span>Since</span>
                <strong>2006</strong>{" "}
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
