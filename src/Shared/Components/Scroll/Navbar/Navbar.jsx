import { memo, useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { id: "home", label: "navbar.home", isPage: false },
  { id: "about", label: "navbar.about", isPage: false },
  { id: "services", label: "navbar.services", isPage: false },
  { id: "categories", label: "navbar.categories", isPage: false },
  { id: "terms", label: "navbar.terms", isPage: true, path: "/terms" },
  { id: "privacy", label: "navbar.privacy", isPage: true, path: "/privacy" },
  { id: "contact", label: "navbar.contact", isPage: false },
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

  const handleLinkClick = useCallback(
    (e, link) => {
      setMenuOpen(false);

      // إذا كان اللينك عبارة عن صفحة مستقلة (Terms / Privacy)
      if (link.isPage) {
        // لا نحتاج e.preventDefault هنا لأننا نريد الـ Link أن يعمل طبيعيًا
        return;
      }

      // إذا كان سكشن داخلي (Anchor Scroll)
      e.preventDefault();
      const scrollToElement = () => {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToElement, 300); // زيادة الوقت قليلاً لضمان تحميل الصفحة الرئيسية
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
      className={`${styles.navbar} ${isSticky ? styles.sticky : ""} ${
        i18n.language === "ar" ? styles.langAr : styles.langEn
      }`}
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
              <Link
                to={link.isPage ? link.path : `/#${link.id}`}
                className={styles.navLink}
                onClick={(e) => handleLinkClick(e, link)}
              >
                {t(link.label)}
              </Link>
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
            <i className="bi bi-list"></i>
          </button>
        </div>

        {/* Mobile Menu */}
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
                <Link
                  to={link.isPage ? link.path : `/#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
