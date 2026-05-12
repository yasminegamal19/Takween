import styles from "./LegalPages.module.css";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.legalWrapper}>
      <div className="container">
        <h1 className={styles.legalTitle}>{t("navbar.terms")}</h1>
        <div className={styles.contentCard}>
          <section className={styles.legalSection}>
            <h3>1. Introduction</h3>
            <p>
              Welcome to Takween. By accessing our website, you agree to be
              bound by these terms and conditions.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h3>2. Intellectual Property</h3>
            <p>
              All content, designs, and products displayed on this platform are
              the exclusive property of Takween Legacy.
            </p>
          </section>

          <section className={styles.legalSection}>
            <h3>3. Limitation of Liability</h3>
            <p>
              Takween shall not be liable for any indirect or consequential loss
              or damage arising under these terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
