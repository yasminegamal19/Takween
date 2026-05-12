import styles from "./LegalPages.module.css";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.legalWrapper}>
      <div className="container">
        <h1 className={styles.legalTitle}>{t("navbar.privacy")}</h1>
        <div className={styles.contentCard}>
          <section className={styles.legalSection}>
            <h3>Data Collection</h3>
            <p>
              We collect information to provide better services to our clients,
              ensuring the highest level of security for your personal data.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h3>How We Use Data</h3>
            <p>
              Your data is used solely for processing orders and improving your
              experience with our luxury collection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
