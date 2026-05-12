import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from "./Products.module.css";
import ProductCard from "./ProductCard"; 

const DUMMY_PRODUCTS = [
  {
    id: 1,
    tag: "Legacy",
    status: "Best Seller",
    img: "/book1.png",
    title: "Heritage Timepiece",
    price: 3299,
    rating: 4.9,
  },
  {
    id: 2,
    tag: "Ancient",
    status: "Rare",
    img: "/book2.png",
    title: "Mystic Artifact",
    price: 4599,
    rating: 5.0,
  },
  {
    id: 3,
    tag: "Legacy",
    status: "New",
    img: "/book3.png",
    title: "Golden Essence",
    price: 2199,
    rating: 4.8,
  },
  {
    id: 4,
    tag: "Ancient",
    img: "/book4.png",
    title: "Eternal Pen",
    price: 1899,
    rating: 4.9,
  },
   {
    id: 5,
    tag: "Legacy",
    status: "Best Seller",
    img: "/book1.png",
    title: "Heritage Timepiece",
    price: 3299,
    rating: 4.9,
  },
  {
    id: 6,
    tag: "Ancient",
    status: "Rare",
    img: "/book2.png",
    title: "Mystic Artifact",
    price: 4599,
    rating: 5.0,
  },
  {
    id: 7,
    tag: "Legacy",
    status: "New",
    img: "/book3.png",
    title: "Golden Essence",
    price: 2199,
    rating: 4.8,
  },
  {
    id: 8 ,
    tag: "Ancient",
    img: "/book4.png",
    title: "Eternal Pen",
    price: 1899,
    rating: 4.9,
  },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.swiperSection} id="categories">
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.subTitle}>
            {t("products.collection", "Featured Collection")}
          </span>
          <h2 className={styles.mainTitle}>
            {t("products.discover", "Products Discovery")}
          </h2>
        </div>

        <Swiper
          dir="ltr"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: `.${styles.customPagination}` }}
          navigation={{
            nextEl: `.${styles.navNext}`,
            prevEl: `.${styles.navPrev}`,
          }}
          breakpoints={{
            576: { slidesPerView: 1.5, centeredSlides: true },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className={styles.mySwiper}
        >
          {DUMMY_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className={styles.swiperSlide}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <button className={styles.navPrev}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className={styles.customPagination}></div>
          <button className={styles.navNext}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
