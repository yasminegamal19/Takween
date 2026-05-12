import { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      icon: "bi bi-book-half",
      title: t("services.service1Title"),
      desc: t("services.service1Desc"),
    },
    {
      icon: "bi bi-mic-fill",
      title: t("services.service2Title"),
      desc: t("services.service2Desc"),
    },
    {
      icon: "bi bi-broadcast",
      title: t("services.service3Title"),
      desc: t("services.service3Desc"),
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: t("services.service4Title"),
      desc: t("services.service4Desc"),
    },
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.subTitle}>{t("services.subtitle")}</span>

          <h2 className={styles.mainTitle}>{t("services.title")}</h2>
        </div>

        <div className="row g-4">
          {servicesData.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className={styles.serviceCard}>
                <div className={styles.iconBox}>
                  <i className={service.icon}></i>
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <div className={styles.hoverLine}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
