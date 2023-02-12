import Image from "next/image";
import preloader from "../../../assets/images/preloader.png";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Image
        src={preloader.src}
        alt="preloader"
        layout="fill"
        priority={true}
      />
    </div>
  );
};
