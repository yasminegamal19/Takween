import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ProductDetails.module.css";


const DUMMY_PRODUCTS = [
  {
    id: 1,
    tag: "Legacy",
    status: "Best Seller",
    img: "/book1.png",
    title: "Heritage Timepiece",
    price: 3299,
    rating: 4.9,
    description: "hero.alchemistDesc",
  },
  {
    id: 2,
    tag: "Ancient",
    status: "Rare",
    img: "/book2.png",
    title: "Mystic Artifact",
    price: 4599,
    rating: 5.0,
    description: "hero.alchemistDesc",
  },
  {
    id: 3,
    tag: "Legacy",
    status: "New",
    img: "/book3.png",
    title: "Golden Essence",
    price: 2199,
    rating: 4.8,
    description: "hero.alchemistDesc",
  },
  {
    id: 4,
    tag: "Ancient",
    img: "/book4.png",
    title: "Eternal Pen",
    price: 1899,
    rating: 4.9,
    description: "hero.alchemistDesc",
  },
  {
    id: 5,
    tag: "Legacy",
    status: "Best Seller",
    img: "/book1.png",
    title: "Heritage Timepiece",
    price: 3299,
    rating: 4.9,
    description: "hero.alchemistDesc",
  },
  {
    id: 6,
    tag: "Ancient",
    status: "Rare",
    img: "/book2.png",
    title: "Mystic Artifact",
    price: 4599,
    rating: 5.0,
    description: "hero.alchemistDesc",
  },
  {
    id: 7,
    tag: "Legacy",
    status: "New",
    img: "/book3.png",
    title: "Golden Essence",
    price: 2199,
    rating: 4.8,
    description: "hero.alchemistDesc",
  },
  {
    id: 8,
    tag: "Ancient",
    img: "/book4.png",
    title: "Eternal Pen",
    price: 1899,
    rating: 4.9,
    description: "hero.alchemistDesc",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const product = DUMMY_PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-white text-center py-5">Product Not Found</div>;
  }

  return (
    <main className={styles.detailsWrapper}>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-md-6">
            <div className={styles.imageCard}>
              <img
                src={product.img}
                alt={product.title}
                className={styles.mainImage}
              />
            </div>
          </div>

          <div className="col-md-6 ps-md-5">
            <div className={styles.contentBox}>
              <span className={styles.brandName}>TAKWEEN | {product.tag}</span>
              <h1 className={styles.title}>{product.title}</h1>

              <div className="d-flex align-items-center gap-3 mb-4">
                <span className={styles.price}>
                  ${product.price.toLocaleString()}
                </span>
                <div className={styles.ratingBox}>
                  <i className="bi bi-star-fill text-warning"></i>
                  <span>{product.rating}</span>
                </div>
              </div>

              <p className={styles.description}>
                {t(product.description)}
              </p>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span>{t("product.material", "Material")}</span>
                  <p>Fine Leather & Gold</p>
                </div>
                <div className={styles.specItem}>
                  <span>{t("product.edition", "Edition")}</span>
                  <p>Limited Legacy</p>
                </div>
              </div>

              <div className={styles.actions}>
                <button className={styles.btnGold}>
                  {t("product.addToCart", "Acquire Now")}
                </button>
                <button className={styles.btnOutline}>
                  {t("product.inquiry", "Custom Request")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
