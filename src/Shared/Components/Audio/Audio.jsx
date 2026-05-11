import styles from "./Audio.module.css";
import { memo } from "react";
const Audio = () => {
  return (
    <div className="container my-5">
      <div className={styles.playerWrapper}>
        <div className={styles.playBtn}>
          <i
            className="bi bi-play-circle-fill"
            style={{ fontSize: "60px", color: "#C5A059" }}
          ></i>
        </div>
        <div>
          <h4 className="mb-1">Listening to: The Alchemist</h4>
          <p className="text-white-50 mb-0">Narrated by Dr. Amira K. Hassan</p>
          <div className={styles.waveform + " mt-3"}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={styles.bar}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Audio);