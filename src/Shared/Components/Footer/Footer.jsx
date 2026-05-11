import { memo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterClick = (e, id) => {
    e.preventDefault();
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToElement, 150);
    } else {
      scrollToElement();
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container py-5">
        <div className={`${styles.footerContent} p-4 p-md-5`}>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Takween Logo" className="mb-3" />
              </div>
              <p className="text-white-50">
                {t(
                  "footer.description",
                  "We craft reliable websites and custom software with clean code and scalable architecture.",
                )}
              </p>
              <div className="d-flex gap-3 mt-4">
                {["facebook", "twitter-x", "instagram", "linkedin"].map(
                  (social) => (
                    <a key={social} href="#" className={styles.socialIcon}>
                      <i className={`bi bi-${social}`}></i>
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <h5 className="text-uppercase mb-4">{t("footer.quickLinks")}</h5>
              <ul className={styles.footerList}>
                {[
                  { id: "home", label: "navbar.home" },
                  { id: "services", label: "navbar.services" },
                  { id: "about", label: "navbar.about" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleFooterClick(e, link.id)}
                    >
                      {t(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <h5 className="text-uppercase mb-4">{t("footer.ourServices")}</h5>
              <ul className={styles.footerList}>
                <li>
                  <Link to="/request-service">
                    {t("footer.requestService")}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy">{t("footer.privacy")}</Link>
                </li>
                <li>
                  <Link to="/terms">{t("footer.terms")}</Link>
                </li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-6 col-12">
              <h5 className="text-uppercase mb-4">
                {t("footer.contactTitle")}
              </h5>
              <div className="d-flex align-items-start mb-4">
                <i className={`bi bi-geo-alt ${styles.contactIcon}`}></i>
                <div>
                  <h6 className="mb-1 text-white">
                    {t("footer.locationLabel")}:
                  </h6>
                  <span className="text-white-50">Fisal, Giza, Egypt</span>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className={`bi bi-telephone-fill ${styles.contactIcon}`}></i>
                <div>
                  <h6 className="mb-1 text-white">{t("footer.callLabel")}:</h6>
                  <span className="text-white-50">+201010595705</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
