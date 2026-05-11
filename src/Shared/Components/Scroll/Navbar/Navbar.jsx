import { memo, useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { id: "home", label: "navbar.home" },
  { id: "about", label: "navbar.about" },
  { id: "services", label: "navbar.services" },
  { id: "terms", label: "navbar.terms" },
  { id: "privacy", label: "navbar.privacy" },
  { id: "contact", label: "navbar.contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [i18n.language]);

  const handleAnchorClick = useCallback(
    (e, id) => {
      e.preventDefault();
      setMenuOpen(false);

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToElement, 100);
      } else {
        scrollToElement();
      }
    },
    [location.pathname, navigate],
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${isSticky ? styles.sticky : ""} ${i18n.language === "ar" ? styles.langAr : styles.langEn}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link
          className={styles.navbarBrand}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/logo.png" alt="Takween Logo" />
        </Link>

        <ul className={`${styles.navbarNav} ${styles.desktopNav}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="nav-item">
              <a
                href={`#${link.id}`}
                className={styles.navLink}
                onClick={(e) => handleAnchorClick(e, link.id)}
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <button
              className={`btn ${styles.customToggle} dropdown-toggle`}
              data-bs-toggle="dropdown"
            >
              {i18n.language === "ar" ? "العربية" : "English"}
            </button>
            <ul className={`dropdown-menu ${styles.dropdownMenuCustom}`}>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("ar")}
                >
                  {t("navbar.language_ar")}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("en")}
                >
                  {t("navbar.language_en")}
                </button>
              </li>
            </ul>
          </div>

          <button
            className={styles.navbarToggler}
            onClick={() => setMenuOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
          <button
            className={styles.closeMobileMenu}
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, link.id)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
