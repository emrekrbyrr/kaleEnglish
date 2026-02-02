import Image from "next/image";
import styles from "./AnimatedScaffold.module.css";

const AnimatedScaffold = () => {
  return (
    <div className={styles.animatedScaffoldContainer} aria-hidden="true">
      <div className={styles.scaffoldWrapper}>
        <div className={`${styles.rope} ${styles.ropeLeft}`}></div>
        <div className={`${styles.rope} ${styles.ropeRight}`}></div>

        <div className={styles.scaffoldImageWrapper}>
          <Image
            src="/suspended-scaffold.png"
            alt="KaleLift suspended scaffold"
            width={300}
            height={120}
            className={styles.scaffoldImage}
            sizes="(max-width: 480px) 50px, (max-width: 768px) 70px, (max-width: 1024px) 100px, 150px"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedScaffold;