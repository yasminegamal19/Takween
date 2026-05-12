import { memo, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const imgRef = useRef(null);
 const navigate = useNavigate();
  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();

      const xPos = (clientX - (left + width / 2)) / 25; 
      const yPos = (clientY - (top + height / 2)) / 25;

      if (img) {
        img.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      if (img) img.style.transform = `translate(0, 0) scale(1)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          ref={imgRef}
          src={product.img}
          alt={product.title}
          className={styles.productImg}
        />
        <div className={styles.overlay} />

        <div className={styles.tagsGroup}>
          {product.status && (
            <span className={`${styles.tag} ${styles.tagStatus}`}>
              {product.status}
            </span>
          )}
        </div>
      </div>

      <div className={styles.details}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className={styles.title}>{product.title}</h3>
          <span className={styles.price}>
            ${product.price.toLocaleString()}
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <i className={`bi bi-star-fill ${styles.starIcon}`}></i>
          <span className={styles.rating}>{product.rating.toFixed(1)}</span>
        </div>

        <button
          className={styles.btnExplore}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {t("products.explore", "Explore")}{" "}
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
