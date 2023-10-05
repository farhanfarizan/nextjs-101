import React from "react";
import styles from "../kitchen-sink/kitchen-sink.module.scss";

const KitchenSink = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>
    </div>
  );
};

export default KitchenSink;
