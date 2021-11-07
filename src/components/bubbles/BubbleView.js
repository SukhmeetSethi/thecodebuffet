import styles from "./BubbleView.module.css";
import React from 'react';

function BubbleView(props) {
  return (
    <div className={styles.ellipse}>
      {props.name}
    </div>
  );
}

export default BubbleView;
