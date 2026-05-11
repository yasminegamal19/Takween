import { memo } from "react";
import styles from "./Services.module.css";

const Services = () => {
  const servicesData = [
    {
      icon: "bi bi-book-half",
      title: "إصدارات فاخرة",
      desc: "كتب ورقية مصممة بجودة ملكية لتكون إرثاً يتوارثه الأجيال.",
    },
    {
      icon: "bi bi-mic-fill",
      title: "المكتبة الصوتية ",
      desc: "تحويل النصوص إلى تجارب سماعية غامرة بأصوات نخبة الرواة.",
    },
    {
      icon: "bi bi-eye-fill",
      title: "العرض التفاعلي ",
      desc: "مشاهدة محتوى بصري وتفاعلي يعيد إحياء القصص القديمة.",
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: "توثيق الملكية ",
      desc: "نضمن أصالة كل قطعة مع توفير بيئة شراء آمنة وموثوقة.",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.subTitle}>خدماتنا | Our Services</span>
          <h2 className={styles.mainTitle}>
            نصيغ لك التجربة الأدبية المتكاملة
          </h2>
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
