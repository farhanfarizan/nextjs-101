import React from "react";
import styles from "../kitchen-sink/kitchen-sink.module.scss";

const KitchenSink = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.sectionOne}></div>
        <div className={styles.sectionTwo}>
          <div className={styles.smallbox}></div>
          <div className={styles.smallbox}></div>
        </div>
        <div className={styles.sectionThree}></div>
        <div className={styles.sectionFour}></div>
      </div>
    </div>
  );
};

export default KitchenSink;
